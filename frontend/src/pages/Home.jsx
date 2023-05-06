import React from "react";
import { Box, Container, Text, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sanz" color="black">
          Informal-Talk
        </Text>
      </Box>

      <Box color="black" bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList marginBottom="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Link to={"/chats"}>To Chats</Link>
    </Container>
  );
};

export default Home;
