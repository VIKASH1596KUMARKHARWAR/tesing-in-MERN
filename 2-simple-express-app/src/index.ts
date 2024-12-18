
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});



/*
>> supertest designed to test the express server

npm install --save-dev ts-jest  @jest/globals @types/express
npm i supertest @types/supertest
npm install @types/express  



npx ts-jest config:init // to initialize jest.config.ts

*/