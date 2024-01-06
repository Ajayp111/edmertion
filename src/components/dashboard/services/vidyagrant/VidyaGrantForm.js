import React, { useState } from "react";
import ScholarshipDetails from "./ScholarshipDetails";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";

import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";

import TextField from "@material-ui/core/TextField";

import { PhotoCamera } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),

    marginBottom: theme.spacing(2),
  },

  dialog: {
    minWidth: 500,
  },
}));

function VidyaGrantForm({ onSubmit }) {
  const classes = useStyles();
  const [imageData, setImageData] = useState("");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    organisation: "",

    amount: "",

    about: "",

    eligibility: "",

    applicationProcess: "",

    contact: "",

    applicableTo: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const scholarshipDetails = {
      name: formData.name,
      organisation: formData.organisation,
      amount: formData.amount,
      about: formData.about,
      eligibility: formData.eligibility,
      applicationProcess: formData.applicationProcess,
      contact: formData.contact,
      applicableTo: formData.applicableTo,
      imageData: imageData,
    };

    console.log(scholarshipDetails);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImageData(URL.createObjectURL(e.target.files[0]));
    } else {
      setImageData("");
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOpen}
      >
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add New Scholarship</DialogTitle>
        <DialogContent className={classes.dialog}>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="image"
                name="image"
                type="file"
                className="border p-2 w-full rounded"
                onChange={handleImageChange}
              />
              <img
                src={imageData}
                alt="Upload"
                className="border p-2 w-full rounded"
              />
            </div>

            <TextField
              fullWidth
              label="Name of the Scholarship"
              variant="outlined"
              margin="normal"
              name="name"
              required
            />

            <TextField
              fullWidth
              label="Name of the Organisation"
              variant="outlined"
              margin="normal"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Amount"
              variant="outlined"
              margin="normal"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="About"
              variant="outlined"
              margin="normal"
              name="about"
              multiline
              rows={4}
              value={formData.about}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Eligibility"
              variant="outlined"
              margin="normal"
              name="eligibility"
              multiline
              rows={4}
              value={formData.eligibility}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Application Process"
              variant="outlined"
              margin="normal"
              name="applicationProcess"
              multiline
              rows={4}
              value={formData.applicationProcess}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Contact"
              variant="outlined"
              margin="normal"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="applicableTo"
              variant="outlined"
              margin="normal"
              name="applicableTo"
              value={formData.applicableTo}
              onChange={handleChange}
              required
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Publish
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <ScholarshipDetails data={formData} />
    </>
  );
}

export default VidyaGrantForm;
