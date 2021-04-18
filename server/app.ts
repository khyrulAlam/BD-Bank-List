import express from "express";
import { json } from "body-parser";
import { routerIndex } from "./router/index";
import cors from "cors";


const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(cors());


app.get('/', async (req: express.Request, res: express.Response) => {
    res.json({ message: 'APP is running  💮 ' })
})
app.use("/api", routerIndex);


app.all("*", async (req: express.Request, res: express.Response) => {
    res.statusCode = 404
    res.json({ error: true, message: 'not found' });
});



export { app };