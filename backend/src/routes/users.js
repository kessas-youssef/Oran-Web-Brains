const { Router } = require('express');
const User = require('../database/models/User');
const { validateRequestBody } = require('../utils/helpers');

const router = Router();


router.get('/users', async (req, res, next) => {
    try {
        let users = await User.find();

        // To Client
        if(users.length)
        res.status(200).json({ message: 'All users retreived successfully', content: users });
        throw {message: 'No users found', status:404}
    } catch (error) { next(error) }
})

router.post('/addUser', validateRequestBody, async (req, res, next) => {
    try {

        const isUserExists = await User.findOne({ email: req.body.email })
        if (isUserExists)
            throw { message: 'Already existing', status: 409 }

        const user = new User({ ...req.body })
        const savedUser = await user.save();

        res.status(201).json({ message: 'User created successfully', content: { ...savedUser } });

    } catch (error) {
        next(error);
    }
});

router.post('/addAdmin', validateRequestBody, async (req, res, next) => {
    try {
        const { adminEmail, userEmail } = req.body;

        // Admin [
        const admin = await User.findOne({ email: adminEmail })

        if (!admin)
            throw { message: 'Not found: Admin not found', status: 404 }

        if (!admin.admin || admin.admin_level !== 1)
            throw { message: 'Unauthorized: Admin cannot do actions of level 1', status: 401 }
        // Admin ]


        // User [
        const user = await User.findOne({ email: userEmail })

        if (!user)
            throw { message: 'Not found: User not found', status: 404 }

        if (user.admin === true)
            throw { message: 'Conflict: User is already an Admin', status: 409 }

        user.admin = true;
        await user.save();
        // User ]

        // To Client 
        const {password, ...content } = user
        res.status(200).send({ message: 'User registered as Admin', content: { ...content } })

    }
    catch (error) {
        next(error)
    }
})


router.delete('/deleteUser', validateRequestBody, async (req, res, next) => {
    try {

        const { adminEmail, userEmail } = req.body;

        // Admin [
        const admin = await User.findOne({ email: adminEmail })


        if (!admin)
            throw { message: 'Not found: Admin not found', status: 404 }

        if (!admin.admin || admin.admin_level !== 1)
            throw { message: 'Unauthorized: Admin cannot do actions of level 1', status: 401 }
        // Admin ]

        // User [
        const user = await User.findOneAndDelete({ email: userEmail })

        if (!user)
            throw { message: 'Not found: User not found', status: 404 }
        // User ]

        // To Client
        res.status(200).json({ message: 'User deleted successfully', content: { ...user } });

    } catch (error) {
        next(error);
    }
});

router.delete('/deleteAll', async (req, res, next) => {
    try {

        const users = await User.deleteMany({})

        res.status(200).json({ message: 'ALL Users deleted successfully', content: { ...users } });

    } catch (error) { next(error); }
});


module.exports = router;
