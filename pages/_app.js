import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { OpinionProvider } from "../components/OpinionContext";

function MyApp({ Component, pageProps }) {
  return (
    <OpinionProvider>
      <div className="h-screen w-screen flex flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </OpinionProvider>
  );
}

export default MyApp;
