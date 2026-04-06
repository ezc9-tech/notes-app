export function getAllNotes(req, res){
    res.status(200).send("Get all notes");
}

export function createNote(req, res){
    res.status(201).send("Create a new note")
}

export function updateNote(req, res) {
    res.status(200).send("Update a note")
}

export function deleteNote(req, res) {
    res.status(200).send("Delete a note")
}