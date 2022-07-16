import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "sgofye2i",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});
