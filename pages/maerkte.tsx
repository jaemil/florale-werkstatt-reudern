import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";

const Maerkte: NextPage = () => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Märkte</h1>
        <Text style={{ lineHeight: "1.7" }} align="center">
          Immer Freitags: Wochenmarkt Kornwestheim
          <br />
          Immer Samstags: Wochenmarkt Fellbach
          <br />
        </Text>
      </Paper>
    </div>
  );
};

export default Maerkte;
