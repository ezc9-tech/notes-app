import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./utils/db.js";
import dotenv from "dotenv";
import { rateLimiter } from "./middleware/rateLimit.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
});