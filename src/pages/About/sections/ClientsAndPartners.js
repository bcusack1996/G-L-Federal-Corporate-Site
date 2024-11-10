/* eslint-disable prettier/prettier */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Background
const partnerBG = "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/7c32c994-bdb2-4738-880d-c368e96ef500/public";

// Customers and Partners Logos
const logos = [
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/219c5bd3-234a-4a8b-7bb1-e384925c9d00/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/582f97ce-d92a-4889-1835-907223f92200/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/bbe0b9a3-76f9-4821-40b9-7ee68e847f00/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/3f789e7e-2c30-4401-ab80-8bb30635c500/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/23007e06-2076-4fd1-c901-db8eba192400/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/68aa997c-429a-41f7-6cce-c2d229c0d500/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/e13fcb16-69d7-4971-dcc3-5c096f7b5800/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/e55b20c8-268d-477c-8791-ab182d722200/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/026487e1-e060-4489-413d-3270ae15b300/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/c3dc9b88-e53a-4da7-33c6-0163535ff800/public",
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/816a56b6-63ac-41f5-1971-af940cf4a200/public"
];

function ClientsAndPartners() {
  return (
    <MKBox
      py={16}
      my={8}
      sx={{
        backgroundImage: `url(${partnerBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
  variant="h3"
  mb={2}
  color="white"
  sx={{
    backgroundColor: "#00000090",  
    padding: "16px 24px",         
    borderRadius: "8px",         
    fontWeight: "bold",        
    textShadow: "2px 2px 4px rgba(0,0,0,0.6)", 
    letterSpacing: "1.2px",
    fontSize: "2.5rem", 
  }}
>
  Clients and Partners
</MKTypography>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{ mt: 3 }}
          style={{ background: "white" }}
          justifyContent="center"
          alignItems="center"
        >
          {logos.map((logo, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <MKBox
                component="img"
                src={logo}
                alt={`logo-${index}`}
                sx={{
                  maxHeight: "100px", // Ensures all images have the same height
                  maxWidth: "100%",
                  objectFit: "contain", // Keeps aspect ratio while fitting in the height
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ClientsAndPartners;
