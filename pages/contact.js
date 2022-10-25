import { motion as m } from "framer-motion";
import Link from "next/link";
import { container, item } from "../variants";

export default function Contact() {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full text-gray-900 bg-red-400 px-16 lg:px-48"
    >
      <div className="my-80 p-1 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="p-2 text-5xl text-center lg:text-right lg:text-8xl"
        >
          Let's talk
        </m.h1>
      </div>
      <div className="flex gap-20">
        <div className="lg:text-xl text-base">
          <h4>Find us:</h4>
        </div>
        <div className="lg:text-6xl text-2xl underline">
          <m.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="text-2xl my-0.5"
          >
            <div className="overflow-hidden text-lg">
              <m.li variants={item} className="pb-2">
                <Link href="https://twitter.com">Twitter </Link>
              </m.li>
            </div>
            <div className="overflow-hidden text-lg">
              <m.li variants={item} className="pb-2">
                <Link href="https://instagram.com">Instagram</Link>
              </m.li>
            </div>
            <div className="overflow-hidden text-lg">
              <m.li variants={item} className="pb-2">
                <Link href="https://dribbble.com">LinkedIn</Link>
              </m.li>
            </div>
            <div className="overflow-hidden text-lg">
              <m.li variants={item} className="pb-2">
                <Link href="https://gmail.com">Email</Link>
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
}
