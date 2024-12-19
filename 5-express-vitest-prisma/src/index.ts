import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());


//simple mocking -- REMOVE IT (we will do deep mocking  
// vi.mock('../db', () => ({
//   prismaClient: { sum: { create: vi.fn() }}
// }));
// vi.mock('../db');

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer,
        id: response.id
    })
});

app.get("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })
    res.json({
        answer,
        id: response.id
    })
});





/*
npm i prisma
npx prisma init
npx prisma generate


//don't need the db  connection/db migration we are jsut atomation testing --so no nedd , just a mock db will work too in order to genrate the prisma client
insted of doing the simple mocking we will do the deep mocking >>>>
                Another way to mock variables is to let vitest figure out the types and mock out all the attributes of the object being mocked.
                // console.log(Object.keys(prismaClient))
    npm i -D vitest-mock-extended 


*/
