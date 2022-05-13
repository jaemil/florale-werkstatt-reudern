import type { NextPage } from "next";
import { Button, Flex, Input, Text } from "@findnlink/neuro-ui";
import { useState } from "react";
import scss from "../styles/app.module.scss";
import Paper from "../components/paper";
import { createClient } from "next-sanity";
import ReactMarkdown from "react-markdown";

const Aktuelles: NextPage = ({ aktuelles }: any) => {
  console.log("aktuelles", aktuelles);

  return (
    <div className={scss.content}>
      <Paper>
        <h1>Aktuelles</h1>

        {aktuelles.length > 0 && (
          <ul>
            {aktuelles.map((item: any) => (
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

export default Aktuelles;

const client = createClient({
  projectId: "sgofye2i",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function getStaticProps() {
  const aktuelles = await client.fetch(`*[_type == "aktuelles"]`);

  return {
    props: {
      aktuelles,
    },
  };
}
