const { Router } = require('express');
const { validateRequestBody, hashPass, checkPass } = require('../utils/helpers');
const User = require('../database/models/User');

const router = Router();

router.post('/loginAdmin', validateRequestBody, async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })

        console.log(user);
        if (!user)
            throw { message: 'Not found: User not found', status: 404 }
        if (!user.admin)
            throw { message: 'Unauthorized: Admins only', status: 401 }

        if (!checkPass(password, user.password))
            throw { message: 'Unauthorized: Wrong Password', status: 401 }

        // To Client
        const { userPassword, ...content } = user
        res.status(200).send({ message: 'User logged as Admin', content: { ...content } })
        user.save()
    }
    catch (error) {
        next(error)
    }
})

router.post('/registerAdmin', validateRequestBody, async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (!user)
            throw { message: 'Not found: User not found', status: 404 }
        if (!user.admin)
            throw { message: 'Unauthorized: User is not an Admin', status: 401 }

        user.set('password', hashPass(password));
        user.save();

        // To Client
        const { userPassword, ...content } = user
        res.status(200).send({ message: 'User registered as Admin', content: { ...content } })

    }
    catch (error) {
        next(error)
    }
})

module.exports = router
