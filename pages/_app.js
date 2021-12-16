import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const Context = createContext();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
