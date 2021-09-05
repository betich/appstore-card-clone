import type { NextPage } from "next";
import { FakeHome, View } from "@components";
import Head from "next/head";
import useAppData from "@modules/useAppData";
import { AppData } from "@types";
import { useRouter } from "next/dist/client/router";

const ViewPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const allData = useAppData() as AppData[];
  const data = useAppData(Number(id)) as AppData;

  const handleClick = () => {
    router.push("/");
  };

  if (!data) <pre>{"can't find that thing lol."}</pre>;
  return (
    <>
      <Head>
        <title>View {data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ position: "fixed", top: 0, filter: "brightness(0.489)", cursor: "pointer" }} onClick={handleClick}>
        <FakeHome data={allData} />
      </div>
      <View data={data} allData={allData} />
    </>
  );
};

export default ViewPage;
