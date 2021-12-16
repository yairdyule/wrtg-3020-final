import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [defund, setDefund] = useState(true);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar defund={defund} onSwitch={setDefund} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
