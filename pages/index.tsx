import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className={scss.content}>
      <Flex alignItems="center">
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Text scale="xl">Neuro-UI test with nextjs and typescript</Text>
        <Button scale="l" primary>
          Tutoreel heruterladen
        </Button>
      </Flex>
    </div>
  );
};

export default Home;
