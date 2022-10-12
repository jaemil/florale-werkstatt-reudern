import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";
import { client } from "../lib/sanityConfig";
import ReactMarkdown from "react-markdown";

const Maerkte: NextPage = ({ maerkte }: any) => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Märkte</h1>

        {maerkte.length > 0 &&
          maerkte.map((item: any, index: number) => (
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

export default Maerkte;

export async function getStaticProps() {
  const maerkte = await client.fetch(`*[_type == "maerkte"]`);

  return {
    props: {
      maerkte,
    },
    revalidate: 10,
  };
}
