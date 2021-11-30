import express, {Application} from 'express';
import courseRouter from './routes/course';

const app : Application = express();

app.use('/api', courseRouter);

app.listen(3000, () => console.log('Server Running!'));