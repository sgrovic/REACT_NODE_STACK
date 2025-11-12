const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json()); // parse JSON body
app.use(express.urlencoded({ extended: true })); // optional, for form data

const apiKeyAuth = require('./middleware/apiKeyAuth');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');



app.use(apiKeyAuth); // <- all routes below this line are protected
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter); // all routes under /api/users

const PORT = process.env.PORT || 3000; // fallback to 3000 if not set
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
