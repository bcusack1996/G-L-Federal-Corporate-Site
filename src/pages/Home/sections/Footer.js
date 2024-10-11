import React from "react";
import { Container, Grid, Box, Typography, Link, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { Facebook, GitHub, YouTube } from "@mui/icons-material";
// prettier-ignore
function Footer() {
  return (
    <Box component="footer" sx={{ width: "100%", py: 4, px: 2, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} /> contact@ihsautomation.com
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} /> +1-817-857-8450
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon sx={{ mr: 1 }} />
              1606 Headway Cir Suite 9318 Austin, TX 78754
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="column" spacing={1}>
              <Link href="https://www.facebook.com/people/GL-Federal/61558714801982/" target="_blank">
                <Facebook sx={{ mr: 1 }} /> Facebook
              </Link>
              <Link href="https://github.com/G-L-Federal" target="_blank">
                <GitHub sx={{ mr: 1 }} /> GitHub
              </Link>
              <Link href="https://www.youtube.com/@ihsautomation9536" target="_blank">
                <YouTube sx={{ mr: 1 }} /> YouTube
              </Link>
              {/* More social links can be added here */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
