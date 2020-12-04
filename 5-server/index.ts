import express from 'express';
import { router } from './src/routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => console.log('LISTENING ON PORT 3000'));
