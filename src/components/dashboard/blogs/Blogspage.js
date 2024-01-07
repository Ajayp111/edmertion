import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReviewComments from "./ReviewComments";
import { Card, Button } from "react-bootstrap";

const BlogsPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container mt-8">
      <div className=" overflow-hidden max-w-full py-3 ml-4  ">
        <h1 className="py-8 text-2xl font-bold underline underline-offset-8 text-Black-400 text-wrap overflow-y-hidden ">
          Blogs Page
        </h1>
        <div>
          <h1 className="font-inter text-24 font-bold leading-24 tracking-normal text-left">
            Comments :
          </h1>
          <h3 className="font-inter text-base font-semibold leading-6 text-left py-3">
            Review Comments :
          </h3>
          <div className="border-solid  border-2  border-black-100  ">
            <Accordion
              className="mb-4"
              sx={{
                padding: "20px",
              }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                sx={{
                  // borderRadius: "8px",
                  // border: "1px solid",
                  padding: "20px 10px",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    fontFamily: "inter",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    // lineHeight: "24px",
                    display: "flex",
                    flexDirection: "column",
                    overflowWrap: "break-word",
                  }}
                >
                  How the Current economic situation affects our jobs How the
                  Current economic situation affects our jobs
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  overflowY: "hidden",
                  maxHeight: "300px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                }}
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {/* comment component */}
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: "20px",
              }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                sx={{
                  borderRadius: "8px",
                  padding: "20px 10px",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    fontFamily: "inter",
                    flexShrink: 0,
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    lineHeight: "24px",
                  }}
                >
                  Dummy Blog Title
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  overflowY: "hidden",
                  maxHeight: "300px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                }}
                style={{
                  maxHeight: "300px", // Set the maximum height to make the container scrollable
                  overflowY: "auto", // Enable vertical scrollbar
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {/* comment components */}
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                  <ReviewComments />
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                padding: "20px",
              }}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                sx={{
                  // borderRadius: "8px",
                  // border: "1px solid",
                  padding: "20px 10px",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  sx={{
                    fontFamily: "inter",
                    flexShrink: 0,
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    lineHeight: "24px",
                  }}
                >
                  Dummy Blog Title
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  overflowY: "hidden",
                  maxHeight: "300px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                }}
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  maxWidth: "100%",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {/* comment component */}
                  <ReviewComments />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
