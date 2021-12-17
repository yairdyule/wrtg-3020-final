import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import { CgSpinnerAlt } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";

function AccordionSection({ title, pts }) {
  const [open, setOpen] = useState(false);
  const Open = (
    <span className="inline-flex items-center justify-center p-2  rounded-md ">
      <AiOutlinePlus className="text-white" />
    </span>
  );
  const Close = (
    <span className="inline-flex items-center justify-center p-2  rounded-md ">
      <AiOutlineMinus className="text-white" />
    </span>
  );

  return (
    <div className="transition ">
      <div
        className="cursor-pointer border-t hover:bg-gray-700 transition flex space-x-5 px-5 items-center h-16"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? Open : Close}
        <h3 className="text-slate-100 font-medium">{title}</h3>
      </div>
      {open && (
        <div className=" transition ease-in-out delay-100 accordion-content px-5 pt-0 overflow-hidden ">
          <ul className="list-disc text-slate-200 leading-12 font-light pl-12 pb-5 text-justify">
            {pts.map((text) => (
              <li className="pt-2">{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function First() {
  let subj = {
    title: "subjectivity",
    pts: [
      "as the product of an individual, this project is steeped in subjectivity",
      "i tried to keep it within reason - if i failed to do so, feel free to contact me via email or github",
    ],
  };

  let bias = {
    title: "bias",
    pts: [
      "the points and perspectives that i offer are mediated by my biases",
      "if you think i should include/modify anything, do not hesitate to contact me",
    ],
  };

  let goals = {
    title: "goals & dreams",
    pts: [
      "w/ this website, i wish to casually portray some (limited) perspectives, covering a few (limited) facets of a massively complicated issue of great importance",
      "as mentioned, i don't intend to be exhaustive in my coverage",
      "however, if you think i should reconsider any of my content/design choices... you know what to do!",
    ],
  };
  let tech = {
    title: "the technical side",
    pts: ["this site was hacked together", "it might break", "lmk if it does"],
  };

  let items = [subj, bias, goals, tech];
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-fill lg:h-screen bg-slate-900 flex flex-col items-center justify-start pt-32 ">
      <div className="w-4/12 mx-auto rounded-lg radius-lg  shadow-lg drop-shadow-lg ">
        <div className="bg-slate-800 rounded-lg radius-lg p-10 shadow-md flex flex-col justify-center">
          <h1 className="text-lg font-medium text-slate-50">
            disclaimers & disclosures
          </h1>
          <p className="text-md font-light text-white my-1"></p>
          <p className="text-md font-light text-white my-3">
            full transparency - this was not created to be an exhaustive
            resource
          </p>
          <p className="text-md font-light text-white my-3">
            rather, i hope for it to serve as a casual reference, where readers
            can survey some perspectives & go about their day
          </p>
          <div className="h-1 w-full mx-auto  my-2"></div>
          {items.map((item, index) => {
            return (
              <AccordionSection key={index} title={item.title} pts={item.pts} />
            );
          })}
          {/*continue button*/}
          <div className="pt-8 mx-auto ">
            <Link href="/">
              <a
                className="group cursor-pointer inline-flex items-center bg-slate-700 leading-none text-slate-400 rounded-full p-2 shadow text-sm"
                onClick={() => {
                  setLoading(true);
                }}
              >
                <span className=" transition ease-in-out duration-300 group-hover:text-white group-hover:text-md inline-flex px-2 group-hover:text-white">
                  i understand the disclaimers - the designer is human and
                  fallible
                </span>
                <span className="inline-flex bg-slate-600 text-slate-300 rounded-full h-6 mx-2 my-1 px-3 justify-center items-center transition ease-in-out duration-300 group-hover:bg-emerald-400 group-hover:text-white group-hover:text-md">
                  {loading ? (
                    <CgSpinnerAlt className="animate-spin" />
                  ) : (
                    <BsArrowRight />
                  )}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
