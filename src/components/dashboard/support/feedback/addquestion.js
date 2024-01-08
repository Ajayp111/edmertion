import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Paper,
  IconButton,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const AddQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      if (selectedQuestionIndex !== null) {
        const updatedQuestions = [...questions];
        updatedQuestions[selectedQuestionIndex] = newQuestion;
        setQuestions(updatedQuestions);
        setSelectedQuestionIndex(null);
      } else {
        setQuestions([...questions, newQuestion]);
      }
      setOpen(false);
      setNewQuestion("");
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedQuestionIndex(null);
    setNewQuestion("");
  };

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleEdit = (index) => {
    setSelectedQuestionIndex(index);
    setNewQuestion(questions[index]);
    setOpen(true);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Questions:
      </Typography>
      <Grid container spacing={2}>
        {questions.map((question, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} style={{ padding: "15px" }}>
              <Typography variant="body1">{question}</Typography>
              <IconButton
                color="primary"
                onClick={() => handleEdit(index)}
                style={{ marginRight: "10px", marginTop: "10px" }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={() => handleDelete(index)}
                style={{ marginTop: "10px" }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleOpen}
        className="px-5"
      >
        Add Question
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ width: "300px", minHeight: "150px" }}>
          <Typography variant="h5" align="center" gutterBottom>
            {selectedQuestionIndex !== null ? "Edit" : "Add"} here:
          </Typography>
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
            style={{ marginTop: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleAddQuestion}
            variant="contained"
            color="primary"
            className="px-5"
          >
            {selectedQuestionIndex !== null ? "Edit" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AddQuestion;
