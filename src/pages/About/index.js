/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// // Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function About() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <MKBox
        component="nav"
        position="fixed"
        pt="1.2em"
        pb="1em"
        width="100%"
        sx={{
          transition: "all 0.3s ease-in-out",
          backgroundColor: isScrolled ? "#344767" : "#344767",
          boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          zIndex: "100",
        }}
      >
    <Container>
          <Grid container flexDirection="row" alignItems="center" justifyContent="space-between">
            <Grid item>
              <MKTypography
                component={Link}
                href="/"
                variant="button"
                color="white"
                fontWeight="regular"
                fontSize="1.5rem"
                py={0.8125}
                mr={2}
              >
                IHS Automation
              </MKTypography>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Stack direction="row" spacing={2} alignItems="center" gap={2}>
                <MKTypography
                  component={Link}
                  href="/"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  fontSize="1.2rem"
                >
                  Home
                </MKTypography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        </MKBox>
  );
}

export default About;
