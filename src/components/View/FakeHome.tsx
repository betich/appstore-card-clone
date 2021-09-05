import { NextPage } from "next";
import styles from "./fakehome.module.scss";
import { AppData } from "@types";
import { Card } from "@elements";
import { motion } from "framer-motion";

type HomePage = {
  data: AppData[];
};

const dayOfWeek = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const FakeHome: NextPage<HomePage> = ({ data }) => {
  const time = new Date();
  const date = time.getDate();
  let ending = "th";
  if (date === 1) ending = "st";
  else if (date === 2) ending = "nd";
  else if (date === 3) ending = "rd";

  const day = dayOfWeek[time.getDay()];
  const month = months[time.getMonth()];

  return (
    <motion.article className={styles["home"]}>
      <header className={styles["header"]}>
        <p className={styles["subtitle"]}>{`${day}, ${month} ${date + ending}`.toUpperCase()}</p>
        <h1 className={styles["title"]}>Today</h1>
        <hr />
      </header>
      <main className={styles["card-container"]}>
        {data.map((d) => (
          <motion.div key={d.id}>
            <a className={styles["link"]}>
              <div className={styles["block"]}>
                <div className={styles["header"]}>
                  <p className={styles["category"]}>{d.category}</p>
                  <h2 className={styles["title"]}>{d.title}</h2>
                </div>
                <img className={styles["image"]} src={d.imgUrl} alt={d.title} />
              </div>
            </a>
          </motion.div>
        ))}
      </main>
    </motion.article>
  );
};

export default FakeHome;
