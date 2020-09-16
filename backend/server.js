const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const userRouter = require('./routes/users');
const jobRouter = require('./routes/jobs');
const companyRouter = require('./routes/companies');
const reviewRouter = require("./routes/reviews");
const applicationsRouter = require('./routes/applications');

app.use('/users', userRouter);
app.use('/jobs', jobRouter);
app.use('/companies', companyRouter);
app.use('/reviews', reviewRouter);
app.use('/public', express.static('public'));
app.use('/applications', applicationsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
