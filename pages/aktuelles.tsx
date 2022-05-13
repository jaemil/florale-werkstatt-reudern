import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";

const Aktuelles: NextPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className={scss.content}>
      <Text scale="xl">Aktuelles</Text>
    </div>
  );
};

export default Aktuelles;
