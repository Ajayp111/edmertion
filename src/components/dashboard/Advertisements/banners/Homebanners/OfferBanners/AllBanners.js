import React from "react";
import { Box, Typography } from "@material-ui/core";

function AllBanners({ banners }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {banners.map((banner, index) => {
        if (!banner) {
          return null;
        }
        return (
          <Box key={index} className="p-4 border rounded-md m-5">
            <Typography variant="h6">{banner.name}</Typography>
            <img
              src={banner.url}
              alt={banner.name}
              className="w-full"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            />
          </Box>
        );
      })}
    </div>
  );
}

export default AllBanners;
