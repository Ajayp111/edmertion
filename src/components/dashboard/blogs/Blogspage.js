import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReviewComments from "./ReviewComments";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";
// Styling the dot
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#ff6347",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
  },
}));

const BlogsPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const renderReviewComments = (count) => {
    const comments = [];
    for (let i = 0; i < count; i++) {
      comments.push(
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "12px",
              height: "10px",
              backgroundColor: "#ff6347",
              borderRadius: "50%",
              marginRight: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              paddingRight: "5px",
            }}
          ></div>
          <ReviewComments />
        </div>
      );
    }
    return comments;
  };

  return (
    <div className="container mt-8">
      <div className="ml-4">
        <h1
          className="text-2xl font-bold underline underline-offset-8 text-black-400"
          style={{ userSelect: "none" }}
        >
          Blogs Page
        </h1>
        <div>
          <h1
            className="font-bold text-2xl mt-8 mb-4"
            style={{ userSelect: "none" }}
          >
            {" "}
            Review Comments :
          </h1>

          <Accordion
            sx={{ padding: "20px" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h6">Blog 1</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {renderReviewComments(5)}
            </AccordionDetails>
          </Accordion>
          {/* Accordion for Blog Title 2 */}
          <Accordion
            sx={{ padding: "20px" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h6">Blog 2</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {renderReviewComments(10)}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ padding: "20px" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h6">Blog 3</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {renderReviewComments(3)}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ padding: "20px" }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h6">Blog 4</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {renderReviewComments(3)}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ padding: "20px" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h6">Blog 5</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {renderReviewComments(3)}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
