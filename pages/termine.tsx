import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";

const Termine: NextPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className={scss.content}>
      <Text scale="xl">Termine</Text>
    </div>
  );
};

export default Termine;
