import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Image from "next/image";
import Anne from "../public/images/anne.png";
import Paper from "../components/paper";

const UeberMich: NextPage = () => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Über Mich</h1>

        <div className={scss.imageWrapper}>
          <Image src={Anne} />
          <Text margin="xl" _class={scss.textOverlay}>
            <Text weight="bold" margin="0 0 0 xl" scale="xl">
              Anne-Kathrin Faiss
            </Text>
            <Text margin="m 0 xl xl">Floristmeisterin</Text>
          </Text>
        </div>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Paper>
    </div>
  );
};

export default UeberMich;
