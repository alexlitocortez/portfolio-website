import React from "react";
import { Box, Link, Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../components/Approutes/AppRoutes";

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const crumbs = matchRoutes(ROUTES, location);

  console.log("new crumbs", crumbs);

  return (
    <Box m={2}>
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        separator=">"
        style={{ color: "white" }}
      >
        <Link
          className="text-light"
          data-testid="bcrumbtestid"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          Home
        </Link>

        {crumbs.map(({ pathnameBase, route }) => {
          const isLast = pathnameBase === crumbs.length - 1;
          return isLast ? (
            <Link
              key={route.name}
              className="text-light"
              data-testid="bcrumbtestid"
              onClick={() => navigate(pathnameBase)}
              style={{
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {route.name}
            </Link>
          ) : (
            <Link
              key={route.name}
              className="text-light"
              data-testid="bcrumbtestid"
              onClick={() => navigate(pathnameBase)}
              style={{
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {route.name}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
