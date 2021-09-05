import "@styles/reset.min.css";
import "@styles/styles.scss";
import { AnimateSharedLayout, motion } from "framer-motion";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <motion.div>
          <Component {...pageProps} />
        </motion.div>
      </AnimateSharedLayout>
    </>
  );
}
export default MyApp;
