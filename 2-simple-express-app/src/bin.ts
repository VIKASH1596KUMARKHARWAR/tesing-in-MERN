import { app } from "./index"
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});


//here we need to call the app.listen and not on th eindex.ts as this file si gooing to be tested
