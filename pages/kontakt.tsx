import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";

const Kontakt: NextPage = () => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Kontakt</h1>

        <Flex flexWrap="wrap">
          <Text style={{ lineHeight: "1.7" }} align="center">
            E-Mail: anne-kathrin_faiss@web.de
            <br /> Telefon: 07022 211117
            <br />
            Handy: 0175 4981104
            <br />
            Kelterweg 20 <br />
            72622 Reudern
          </Text>
          <iframe
            style={{ marginTop: "50px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.2283700454764!2d9.384210915992071!3d48.62461182509219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999546133ab62f%3A0x442f459126a63d04!2sFlorale%20Werkstatt%20Anne-Kathrin%20Faiss!5e0!3m2!1sde!2sde!4v1652357450232!5m2!1sde!2sde"
            loading="lazy"
            height="500"
          ></iframe>
        </Flex>
      </Paper>
    </div>
  );
};

export default Kontakt;
