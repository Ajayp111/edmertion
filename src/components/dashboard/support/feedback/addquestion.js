import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";

function AddQuestion() {
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setOpen(false);
    setNewQuestion("");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl mb-4">Questions:</h1>
      {questions.map((question, index) => (
        <div key={index} className="mb-2">
          <p className="bg-gray-100 p-2 rounded">{question}</p>
        </div>
      ))}
      <Button className="mb-4" variant="contained" onClick={handleOpen}>
        Add Question
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ width: "300px", minHeight: "150px" }}>
          <h1 className="text-xl mb-4">Write here:</h1>
          <TextField
            name="question"
            type="text"
            placeholder="Write Question here"
            value={newQuestion}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleAddQuestion}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddQuestion;
