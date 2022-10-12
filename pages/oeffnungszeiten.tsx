import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";
import { client } from "../lib/sanityConfig";
import ReactMarkdown from "react-markdown";

const Oeffnungszeiten: NextPage = ({ oeffnungszeiten }: any) => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Öffnungszeiten</h1>

        {oeffnungszeiten.length > 0 &&
          oeffnungszeiten.map((item: any, index: number) => (
            <Text key={index} style={{ lineHeight: "1.7" }} align="center">
              <ReactMarkdown className={scss.markdown}>
                {item?.bio}
              </ReactMarkdown>
            </Text>
          ))}
      </Paper>
    </div>
  );
};

export default Oeffnungszeiten;

export async function getStaticProps() {
  const oeffnungszeiten = await client.fetch(`*[_type == "oeffnungszeiten"]`);

  return {
    props: {
      oeffnungszeiten,
    },
    revalidate: 10,
  };
}
