import React from "react";

import { Box, Container, Header, Text } from "@chapter/Features/Components";
import { MaterialHeader } from "@chapter/Features/Shared";

import AppRouter from "../Routers";

export const App = () => {
  return (
    <>
      <MaterialHeader title="Product1" buttonText="Login" url="/auth" />
      <Container>
        <Box>
          <Header>Welcome to Product2:Frontend</Header>
          <Text>Hello Chapter UI, this is Product2!!</Text>
        </Box>

        <AppRouter />
      </Container>
    </>
  );
};

export default App;
