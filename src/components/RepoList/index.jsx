import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { AccordionDetails } from "@mui/material";

import { convertTimestamp } from "../../utils/date";
import Contributor from "../Contributor";
import Chart from "../Chart";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  borderRadius: theme.spacing(1),
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  display: "flex",
  alignItems: "center",
}));

const AvatarContainer = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const DetailsContainer = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const Section = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

function RepositoryAccordion({ repo, expanded, handleExpanded }) {
  const handleChange = (panel) => (event, newExpanded) => {
    handleExpanded(newExpanded ? panel : false);
  };

  return (
    <CustomAccordion
      expanded={expanded === repo.name}
      onChange={handleChange(repo.name)}
    >
      <CustomAccordionSummary expandIcon={<ArrowForwardIosSharpIcon />}>
        <AvatarContainer>
          <Avatar
            alt={repo.owner.login}
            src={repo.owner.avatar_url}
            sx={{ width: 80, height: 80 }}
          />
        </AvatarContainer>
        <DetailsContainer>
          <Typography variant="h6">{repo.name}</Typography>
          <Typography variant="body1">{repo.description}</Typography>
          <Section>
            <Typography variant="body2" color="textSecondary">
              Stars: {repo.stargazers_count}
            </Typography>
          </Section>
          <Section>
            <Typography variant="body2" color="textSecondary">
              Issues: {repo.open_issues}
            </Typography>
          </Section>
          <Section>
            <Typography variant="body2" color="textSecondary">
              Last Pushed: {convertTimestamp(repo.updated_at)} by{" "}
              {repo.owner.login}
            </Typography>
          </Section>
        </DetailsContainer>
      </CustomAccordionSummary>
      <AccordionDetails>
        {expanded === repo.name && (
          <>
            <Chart repo={repo.name} owner={repo.owner.login} />
            <Contributor repo={repo.name} owner={repo.owner.login} />
          </>
        )}
      </AccordionDetails>
    </CustomAccordion>
  );
}

export default RepositoryAccordion;
