import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";

const Maerkte: NextPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className={scss.content}>
      <Text scale="xl">Märkte</Text>
    </div>
  );
};

export default Maerkte;
