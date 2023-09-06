import type { NextPage } from "next";
import Head from "next/head";
import { RarityView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>11pxl Collection Rarity</title>
        <meta
          name="Collection Rarity"
          content="11pxl.com"
        />
      </Head>
      <div id="root"></div>
      <RarityView />
    </div>
  );
};

export default Home;
