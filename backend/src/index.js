require('dotenv').config();
const express = require('express')
const usersRoute = require('./routes/users')
const authRoute = require('./routes/authenticate')
const cors = require('cors')
require('./database/index')
const {errorMiddleware } = require('./utils/helpers')

const app = express()


app.use(express.json());
app.use(cors())

app.use('/api', usersRoute)
app.use('/api/auth', authRoute)

app.use(errorMiddleware)
app.listen(3030, () => console.log('Server running'))