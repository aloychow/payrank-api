const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

const multer = require('multer');

const app = express();

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

  const storage = multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, 'images');
    }, 
    filename: (request, file ,callback) => {
      callback(null, request.body.name);
    },
  })

  const upload = multer({storage: storage});
  app.post('/api/upload', upload.single('file'), (request, response) => {
    response.status(200).json('File has been uploaded');
  });

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/api/categories', categoryRoute);

app.listen('3001', () => {
  console.log('Backend is running...');
});