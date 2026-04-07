import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})