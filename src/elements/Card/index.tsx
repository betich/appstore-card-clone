import { AppData } from "@types";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./card.module.scss";

type CardPage = {
  data: AppData;
};

const Card: NextPage<CardPage> = ({ data }) => {
  return (
    <motion.div layoutId={`app-${data.id}`}>
      <Link href={`/${data.id}`}>
        <a className={styles["link"]}>
          <div className={styles["block"]}>
            <div className={styles["header"]}>
              <p className={styles["category"]}>{data.category}</p>
              <h2 className={styles["title"]}>{data.title}</h2>
            </div>
            <img className={styles["image"]} src={data.imgUrl} alt={data.title} />
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default Card;
