import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { connectDatabase } from './database/mongoConnection';

const app = express();

connectDatabase();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(4444, () => console.log('Server online'));