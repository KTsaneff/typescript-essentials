import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log("Hello Udemy!");
    console.log(req.method);
    res.json({message: "Good Bye!"});
});

app.listen(3000);