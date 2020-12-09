import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';

import './controllers/loginController';
import './controllers/rootController';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(AppRouter.getInstance());
app.listen(3000, () => console.log('LISTENING ON PORT 3000'));
