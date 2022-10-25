import Head from "next/head";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full text-gray-900 bg-orange-100 px-16 lg:px-48"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-96 p-1">
          <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
            Happy Coffee
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>A Coffee Company</h2>
            <h2>Roasting & Café</h2>
            <h2>2022</h2>
          </div>
          <div>
            <h3>Our coffee is gonna make you smile.</h3>
            <h3>We import all and roast all beans locally.</h3>
            <h3>Click contact for cool transition.</h3>
          </div>
        </div>
      </main>
    </m.div>
  );
}
