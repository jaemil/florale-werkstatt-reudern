import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";
import { createClient } from "next-sanity";
import ReactMarkdown from "react-markdown";
import { client } from "../lib/sanityConfig";

const Aktuelles: NextPage = ({ aktuelles }: any) => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Aktuelles</h1>

        {aktuelles.length > 0 &&
          aktuelles.map((item: any, index: number) => (
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

export default Aktuelles;

export async function getStaticProps() {
  const aktuelles = await client.fetch(`*[_type == "aktuelles"]`);

  return {
    props: {
      aktuelles,
    },
    revalidate: 10,
  };
}
