import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('We are live!')
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}, we are in buiness!`)
})