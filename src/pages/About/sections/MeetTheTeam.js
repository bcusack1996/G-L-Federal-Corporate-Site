/* eslint-disable prettier/prettier */

import React from "react";

// @mui material components
// import Icon from "@mui/material/Icon";
// import Stack from "@mui/material/Stack";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import SpeedIcon from "@mui/icons-material/Speed";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const BradyImg =
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/c3a6ec11-9be5-4e01-d603-bb80569c8a00/public";
// import ChrisImg from "../../../assets/images/Chris.jpeg";
const DennisImg=
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/a416624c-6625-47fd-48f5-8fc78f813500/public";
const RichardImg=
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/51da0625-f7f5-484c-1197-647e2240be00/public";
const AliciaImg=
  "https://imagedelivery.net/I44K_HLbdSFFoBMKswAB4w/2f059153-b047-4824-3858-1c79fec0af00/public";

const MemberCard = styled(Paper)(({ theme, layout }) => ({
  display: "flex",
  flexDirection: layout === "reverse" ? "row-reverse" : "row",
  alignItems: "flex-start",
  gap: theme.spacing(4),
  padding: theme.spacing(3),
  margin: "auto",
  maxWidth: 800,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // Stack the elements on smaller screens
    textAlign: "center",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

const Image = styled("img")({
  width: "200px",
  height: "100%",
  objectFit: "cover",
  borderRadius: "4px",
  objectPosition: "top",
});

function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Brady Cusack",
      position: "Managing Partner, Chief Executive Officer",
      bio: "Brady Cusack is an experienced technology leader with expertise in enterprise architecture, robotics process automation, and cybersecurity operations. Brady graduated from Towson University with a B.S. in Computer Science focused on Cybersecurity. He then worked as an automation consultant for numerous small businesses where he helped lead implementations at Fortune 500 companies. Brady later founded a small managed service provider, growing it to support two federal agencies and five government contractors.",
      imageUrl: BradyImg,
    },
    {
      name: "Dennis Chen",
      position: "Partner, SVP of Operations",
      bio: "Dennis graduated from Towson University of MD in Information Systems and Business. Dennis brings over 20+ years of experience leading technology services companies with a strong public sector focus such as Evurge Solutions and WorkAway IT. Dennis has decards of experience providing IT solutions and support to commercial and Federal agencies including US Department of Defense, US Department of State, US Department of Commerce, and the US Nuclear Regulatory Commission. He has designed and deployed solutions for database reporting needs, Cybersecurity and forensic analysis facilities, as well as virtual and cloud environments.",
      imageUrl: DennisImg,
    },
    {
      name: "Richard Gordon",
      position: "Chairman of the Board",
      bio: "Richard Gordon utilizes a comprehensive array of resources to enhance customer agility, speed, and evidence-based decision-making, allowing for preemptive problem solving. His varied experience which ranges from Capital Hill to Executive Leadership consulting equips him uniquely to contribute significantly to your success.",
      imageUrl: RichardImg,
    },
    {
      name: "Alicia Auman",
      position: "Federal Sales Lead",
      bio: "Alicia Auman joins IHS Automation bringing experience selling software to state and local government entites. Alicia has over a decade of experience in the education space, spending years working as a resource inside and out of the classroom.",
      imageUrl: AliciaImg,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography variant="h3" component="h2" justifyContent="center" gutterBottom>
          Meet the Team
        </Typography>
        <Typography variant="body1" paragraph justifyContent="center">
          Our leadership team brings together years of expertise and dedication to drive our vision
          forward.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={member.name}>
              <MemberCard display="flex" layout={index === 1 || index === 3 ? "reverse" : "normal"}>
                <Image src={member.imageUrl} alt={member.name} />
                <Box sx={{ padding: 2 }}>
                  <Typography gutterBottom variant="h4" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" marginBottom={1}>
                    {member.position}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" maxWidth={400}>
                    {member.bio}
                  </Typography>
                </Box>
              </MemberCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MeetTheTeam;
