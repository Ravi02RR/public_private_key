import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import keyRoutes from './routes/keyRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/keys', keyRoutes);
app.use(errorMiddleware);

app.get('/', (_req, res) => {
    res.render('index', { title: '' });
});

app.get('/about', (req, res) => {
    res.json({ message: 'About page' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
