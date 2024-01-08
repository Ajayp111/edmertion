import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@material-ui/core";

function AllBanners({ banners }) {
  const [newBanner, setNewBanner] = useState({});
  const [editedBannerIndex, setEditedBannerIndex] = useState(null);

  const handleDelete = (index) => {
    const updatedBanners = [...banners];
    updatedBanners.splice(index, 1);
    console.log("Updated banners: ", updatedBanners);
  };

  const handleEdit = (index) => {
    setEditedBannerIndex(index);
    setNewBanner({ ...banners[index], name: banners[index].name || "" });
  };
  const handleSave = () => {
    if (editedBannerIndex !== null) {
      const updatedBanners = [...banners];
      updatedBanners[editedBannerIndex] = newBanner;
      console.log("Updated banners: ", updatedBanners);
    } else {
      const updatedBanners = [...banners, newBanner];
      console.log("Updated banners: ", updatedBanners);
    }
    setEditedBannerIndex(null);
    setNewBanner({});
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {banners.map((banner, index) => {
        if (!banner) {
          return null;
        }
        return (
          <Box key={index} className="p-4 border rounded-md m-5">
            {editedBannerIndex === index ? (
              <TextField
                value={newBanner.name}
                onChange={(e) =>
                  setNewBanner({ ...newBanner, name: e.target.value })
                }
                label="Name"
              />
            ) : (
              <Typography variant="h6">{banner.name}</Typography>
            )}
            <img
              src={banner.url}
              alt={banner.name}
              className="w-full"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            />
            <div className="flex space-x-2">
              <Button
                onClick={() => handleEdit(index)}
                variant="contained"
                color="primary"
              >
                {editedBannerIndex === index ? "Save" : "Edit"}
              </Button>
              {editedBannerIndex !== index && (
                <Button
                  onClick={() => handleDelete(index)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              )}
            </div>
          </Box>
        );
      })}
      {editedBannerIndex !== null && (
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      )}
    </div>
  );
}

export default AllBanners;
