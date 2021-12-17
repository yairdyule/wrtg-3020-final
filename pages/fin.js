import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { CgSpinnerAlt } from "react-icons/cg";
import { useState } from "react";

export default function Fin() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-slate-900 h-fit lg:h-screen overflow-auto  w-screen flex flex-col items-center justify-start py-5">
      <Link href="/">
        <button
          className="cursor pointer inline-flex shadow-lg h-8 w-10 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md shadow-md transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-purple-500"
          onClick={() => {
            setLoading(true);
          }}
        >
          {loading ? (
            <CgSpinnerAlt className="animate-spin" />
          ) : (
            <BsArrowLeft />
          )}
        </button>
      </Link>
      <h3 className="bg-slate-800">
        thanks for stopping by to check this out.
      </h3>
    </div>
  );
}
