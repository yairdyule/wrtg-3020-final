import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
