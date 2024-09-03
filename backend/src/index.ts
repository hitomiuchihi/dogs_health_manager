// src/index.ts
import express from 'express';

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! This application can manage health of your dogs.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
