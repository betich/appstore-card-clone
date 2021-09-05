import { NextPage } from "next";
import { AppData } from "@types";
import styles from "./view.module.scss";
import Home from "@components/Home";
import { motion } from "framer-motion";

type ViewPage = {
  data: AppData;
  allData: AppData[];
};

/*
<div className={styles["original"]}>
        <Home data={allData as AppData[]} />
      </div>
      <motion.div className={styles["overlay"]}>
      </motion.div>
*/

const View: NextPage<ViewPage> = ({ data, allData }) => {
  if (!data || !data.description) return <pre>loading...</pre>;

  return (
    <>
      <motion.div className={[styles["block"], styles["overlay"]].join(" ")} layoutId={`app-${data.id}`}>
        <img className={styles["image"]} src={data.imgUrl} alt={data.title} />
        <header className={styles["header"]}>
          <p className={styles["category"]}>{data.category}</p>
          <h1 className={styles["title"]}>{data.title}</h1>
        </header>
        <div className={styles["description"]}>
          {data.description.split("\n").map((d, i) => (
            <p key={i} className={styles["text"]}>
              {d}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default View;
