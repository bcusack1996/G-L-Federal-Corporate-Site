import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function FormSimple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://prod-66.westus.logic.azure.com:443/workflows/f933ea14f09f4794b55d34bb27a7ef3a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VtZztSLE_YrZkxfYyb-NobVC0AG9KLBb-Cb6BLhcGI4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      console.log("Message sent");
      setSubmitStatus("Message sent successfully!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.error("Failed to send message");
      setSubmitStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <MKBox component="section" py={12} id="contact">
      <Container>
        <Grid container justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Contact Us
          </MKTypography>
        </Grid>
        <Grid container xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" autoComplete="off" onSubmit={handleSubmit}>
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Name"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    type="email"
                    label="Email Address"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Type your message here..."
                    multiline
                    fullWidth
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Send Message
                </MKButton>
              </Grid>
              {submitStatus && (
                <MKTypography variant="body2" color="error" textAlign="center">
                  {submitStatus}
                </MKTypography>
              )}
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
