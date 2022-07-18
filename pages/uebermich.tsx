import type { NextPage } from "next";
import { Button, Flex, Image, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";

import Anne from "../public/images/anne.png";
import Paper from "../components/paper";
import Hochzeit from "../public/images/hochzeit.jpg";
import Gartenpflanzen from "../public/images/gartenpflanzen.jpg";
import Trauer from "../public/images/trauer.jpg";

const UeberMich: NextPage = () => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Über Mich</h1>

        <div className={scss.imageWrapper}>
          <Image src={Anne.src} />
          <Text margin="xl" _class={scss.textOverlay}>
            <Text weight="bold" margin="0 0 0 xl" scale="xl">
              Anne-Kathrin Faiss
            </Text>
            <Text margin="m 0 xl xl">Floristmeisterin</Text>
          </Text>
        </div>
        <Text margin="xl 0 0 0">
          Blumen sagen mehr als 1000 Worte... Leidenschaft <br />
          Die Liebe zu den Blumen in der Natur. Ich habe viel erlebt und gelernt
          in denn 20 Jahren meiner Selbständigkeit. <br /> Mit meinen
          Zauberhänden die wunderschönen Blumen jeden Tag zu Schönes zu
          arrangieren das ist meine persönliche Kunst! Meine Florale Werkstatt
          und Garten der zum verweilen einlädt... ist immer für Sie geöffnet...
          <br />
          <Text margin="m 0 0 0">
            unvergessliche Momente zu genießen in meiner Werkstatt oder auf den
            Märkten berate ich Sie gerne über: <br />
          </Text>
          <Text align="center">
            <Text _class={scss.font2}>Hochzeitsdekoration</Text>
            <Image src={Hochzeit.src} />
            <Text _class={scss.font2}>Trauerdekoration</Text>
            <Image src={Trauer.src} />
            <Text _class={scss.font2}>Deko für Haus und Garten</Text>
            <Image src={Gartenpflanzen.src} />
            <Text _class={scss.font2}>Firmenevents</Text>
          </Text>
          <br />
        </Text>
      </Paper>
    </div>
  );
};

export default UeberMich;
