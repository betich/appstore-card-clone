import { NextPage } from "next";
import styles from "./home.module.scss";
import { AppData } from "@types";
import { Card } from "@elements";
import { motion } from "framer-motion";

type HomePage = {
  data: AppData[];
};

const dayOfWeek = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Home: NextPage<HomePage> = ({ data }) => {
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
          <Card key={d.id} data={d} />
        ))}
      </main>
    </motion.article>
  );
};

export default Home;
