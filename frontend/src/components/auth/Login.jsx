import React, { useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleClick = () => setShow((prev) => !prev);

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="login-email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl id="login-password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        onClick={submitHandler}
        type="submit"
        width="100%"
        style={{ marginTop: "15px" }}
      >
        Login
      </Button>

      <Button
        colorScheme="red"
        variant={"solid"}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("guest@123");
        }}
        type="submit"
        width="100%"
        style={{ marginTop: "15px" }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
