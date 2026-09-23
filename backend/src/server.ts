import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        message: 'Node Portfolio API funcionando 🚀',
    });
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
