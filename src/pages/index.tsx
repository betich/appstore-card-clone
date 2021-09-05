import type { NextPage } from "next";
import { Home } from "@components";
import Head from "next/head";
import useAppData from "@modules/useAppData";
import { AppData } from "@types";

const HomePage: NextPage = () => {
  const data = useAppData() as AppData[];

  return (
    <>
      <Head>
        <title>Appstore Card Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home data={data} />
    </>
  );
};

export default HomePage;
