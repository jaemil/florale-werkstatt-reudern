import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";

const Oeffnungszeiten: NextPage = () => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Öffnungszeiten</h1>
        <Text style={{ lineHeight: "1.7" }} align="center">
          Montag und Dienstag: 15:00 - 18:30 Uhr
          <br /> Mittwoch, Donnerstag und Freitag: 15:00 - 20:00 Uhr
        </Text>
      </Paper>
    </div>
  );
};

export default Oeffnungszeiten;
