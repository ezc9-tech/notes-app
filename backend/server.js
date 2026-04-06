import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/notes", (req, res) => {
    res.status(200).send("Get all notes");
})

app.post("/api/notes", (req, res) => {
    res.status(201).send("Create a new note")
})

app.put("/api/notes?:id", (req, res) => {
    res.status(200).send("Update a note")
})

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).send("Delete a note")
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})