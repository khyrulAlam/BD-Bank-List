import { app } from "./app";

const PORT = process.env.PORT || 3200;

const appStart = async () => {
    app.listen(PORT, () => {
        console.log(`app listing on port 3200 !!! 🚥`);
    });
};

appStart();
