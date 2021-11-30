import express, {Application} from 'express';
import courseRouter from './routes/course';

const app : Application = express();
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Welcome to the app!")
});

app.get('/api', (req, res) =>{
    res.send("Welcome to the app!")
});

app.use('/api/course', courseRouter);

app.listen(3000, () => console.log('Server Running!'));