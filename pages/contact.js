import { motion as m } from "framer-motion";
export default function Contact() {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full text-gray-900 bg-red-400 px-16 lg:px-48"
    >
      <div className="my-96 p-1">
        <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
          Let's Talk
        </h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find us:</h4>
        </div>
        <div className="lg:text-6xl text-2xl underline">
          <ul className="text-2xl">
            <li className="pb-2">Twitter</li>
            <li className="pb-2">Instagram</li>
            <li className="pb-2">LinkedIn</li>
            <li className="pb-2">YouTube</li>
          </ul>
        </div>
      </div>
    </m.main>
  );
}
