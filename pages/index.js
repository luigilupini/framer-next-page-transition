import Head from "next/head";
import { motion as m } from "framer-motion";
import { container, item } from "../variants";

export default function Home() {
  const d = new Date();
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full text-gray-900 bg-orange-100 px-16 lg:px-48"
    >
      <Head>
        <title>Page transitions with Framer</title>
        <meta name="description" content="Landing page with transition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-80 p-1 overflow-hidden">
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-2 text-5xl text-center lg:text-right lg:text-8xl"
          >
            Rosetta
          </m.h1>
        </div>
        <div className="flex justify-between">
          <m.div variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden py-0.5">
              <m.h2 variants={item}>A Coffee Company</m.h2>
            </div>
            <div className="overflow-hidden py-0.5">
              <m.h2 variants={item}>Roasting & Cafe</m.h2>
            </div>
            <div className="overflow-hidden py-0.5">
              <m.h2 variants={item}>{d.getFullYear()}</m.h2>
            </div>
          </m.div>
          <m.div variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden py-0.5">
              <m.h3 variants={item}>Our coffee is gonna make you smile.</m.h3>
            </div>
            <div className="overflow-hidden py-0.5">
              <m.h3 variants={item}>
                We import and roast all beans locally.
              </m.h3>
            </div>
            <div className="overflow-hidden py-0.5">
              <m.h3 variants={item}>Click contact to see transition.</m.h3>
            </div>
          </m.div>
        </div>
      </main>
    </m.div>
  );
}
