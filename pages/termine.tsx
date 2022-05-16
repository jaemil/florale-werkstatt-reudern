import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";
import ReactMarkdown from "react-markdown";
import { createClient } from "next-sanity";

const Termine: NextPage = ({ termine }: any) => {
  return (
    <div className={scss.content}>
      <Paper>
        <h1>Termine</h1>
        {termine.length > 0 && (
          <ul>
            {termine.map((item: any) => (
              <li key={item._id}>
                <ReactMarkdown>{item?.bio}</ReactMarkdown>
              </li>
            ))}
          </ul>
        )}
      </Paper>
    </div>
  );
};

export default Termine;

const client = createClient({
  projectId: "sgofye2i",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function getStaticProps() {
  const termine = await client.fetch(`*[_type == "termine"]`);

  return {
    props: {
      termine,
    },
  };
}
