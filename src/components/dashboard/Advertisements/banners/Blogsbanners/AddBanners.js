import React, { useState } from "react";
import {
  Button,
  Input,
  FormHelperText,
  Box,
  Typography,
} from "@material-ui/core";

function AddBanner({ addBanner }) {
  const [bannerName, setBannerName] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [bannerError, setBannerError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bannerName === "" || bannerUrl === "") {
      setBannerError(true);
    } else {
      addBanner({ name: bannerName, url: bannerUrl });
      setBannerName("");
      setBannerUrl("");
      setBannerError(false);
    }
  };

  return (
    <div className="border-4 border-dashed border-gray-200 w-200 h-200 p-20">
      <div className="h-full w-full flex items-center justify-center">
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              value={bannerName}
              onChange={(e) => setBannerName(e.target.value)}
              placeholder="Enter banner name"
              required
              className="mb-4"
            />
            <FormHelperText hidden={!bannerError} className="mb-4 text-red-500">
              Please enter banner name and choose a file
            </FormHelperText>
            <label className="block text-center mb-4">
              <Button
                variant="contained"
                component="span"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose Banner File
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    setBannerUrl(URL.createObjectURL(e.target.files[0]))
                  }
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </Button>
            </label>
            {bannerUrl && (
              <Box mt={2}>
                <Typography variant="body1" className="mb-2">
                  Preview:
                </Typography>
                <img
                  src={bannerUrl}
                  alt={bannerName}
                  className="w-full rounded-lg shadow-md"
                />
              </Box>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Banner
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBanner;
