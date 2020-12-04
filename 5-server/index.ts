import express from 'express';
import { router } from './src/routes/loginRoutes';

const app = express();
app.use(router);

app.listen(3000, () => console.log('LISTENING ON PORT 3000'));
