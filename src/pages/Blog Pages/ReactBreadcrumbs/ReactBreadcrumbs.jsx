import React from "react";
import styled from "styled-components";
import { CodeBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Image from "react-bootstrap/Image";
import blogPicture from "../../../assets/breadcrumb thumbnail.png";
import "/Users/l/portfolio-website/src/pages/Blog Pages/HowISwitchedCareers2TimesAndGotADeveloperJob.css";

export const StyledDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #171d20;
`;

const ReactBreadcrumbs = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const textOne = "npm i react-router-dom";

  function MyCoolCodeBlock({
    code,
    language,
    showLineNumbers,
    startingLineNumber,
  }) {
    return (
      <CodeBlock
        text={textOne}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
      />
    );
  }

  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#171d20" }}>
        <div className="flexOne"></div>
        <StyledDiv className="flexOne">
          <h1 className="blogTitles">How To Make Breadcrumbs With React</h1>
          <StyledDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <Image thumbnail src={blogPicture} className="blogImage" />

              <p className="blogParagraph" style={{ marginTop: "3rem" }}>
                For the new React Router Dom version, we first need to use
                "useRoutes".
              </p>
              <p className="blogParagraph" style={{ marginTop: "3rem" }}>
                useRoutes is a hook used to render your route tree. Instead of
                using "Routes", you'll use an object to define your route.
              </p>
            </div>
          </StyledDiv>
        </StyledDiv>
        {/* Install react router dom */}
        {/* Explain the terms and concepts from react router dom */}
        {/* Explain approutes component first and then display snapshot */}
        {/* Explain breadcrumbs component first and then display snapshot */}
        <div className="flexOne"></div>
      </div>
      <div style={{ height: "100%", backgroundColor: "#171d20" }}>
        <Footer />
      </div>
    </>
  );
};

export default ReactBreadcrumbs;
