import express from 'express';
import bodyParser from 'body-parser';
import contactRouter from './api/contact';
import './config'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
