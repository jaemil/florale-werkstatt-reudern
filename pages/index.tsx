import { createClient } from "next-sanity";
export default function IndexPage({ pets }: any) {
  return (
    <>
      <main>
        <h2>Pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet: any) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "sgofye2i",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets,
    },
  };
}
