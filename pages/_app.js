import "../styles/globals.css";
import Navbar from "../components/Navbar";

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

function MyApp({ Component, pageProps }) {
  return (
    <div className="py-24 px-12 lg:px-48 font-GTWalsheimProBold">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
