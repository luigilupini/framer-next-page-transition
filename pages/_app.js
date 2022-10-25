import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
/* AnimatePresence: 
By passing initial={false}, AnimatePresence will disable any initial animations
on children that are present when the component is first rendered. And `mode` it
determines how to handle entering and exiting elements.

! For AnimatePresence to work it requires a `key` prop:
Direct children must each have unique `key` prop so `AnimatePresence` can track
their presence in the tree, https://www.framer.com/docs/animate-presence.
*/

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="py-24 px-12 lg:px-48 font-GTWalsheimProBold">
      <AnimatePresence initial={false} mode={"wait"}>
        <Navbar />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;

/* Next.js uses the App component to initialize pages.
`_app.js` contains your whole app, its rendered on any page of the project. You
can override it and control the page initialization. Which allows you to do:

- Persisting your layout between page changes
- Keeping state when navigating `pages`
- Custom error handling using `componentDidCatch`
- Inject additional data into `pages`
- Add global CSS to your application

! To override the default `App`, create the file `./pages/_app.js`:
> https://nextjs.org/docs/advanced-features/custom-app */
