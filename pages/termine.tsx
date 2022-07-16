import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";
import ReactMarkdown from "react-markdown";
import { createClient } from "next-sanity";
import { client } from "../lib/sanityConfig";

const Termine: NextPage = ({ termine }: any) => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Termine</h1>
        {termine.length > 0 &&
          termine.map((item: any) => (
            <Text style={{ lineHeight: "1.7" }}>
              <ReactMarkdown>{item?.bio}</ReactMarkdown>
            </Text>
          ))}
      </Paper>
    </div>
  );
};

export default Termine;

export async function getStaticProps() {
  const termine = await client.fetch(`*[_type == "termine"]`);

  return {
    props: {
      termine,
    },
  };
}
