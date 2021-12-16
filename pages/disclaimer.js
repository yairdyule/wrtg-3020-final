import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

function AccordionSection({ title, text }) {
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
        className="cursor-pointer hover:bg-gray-700 transition flex space-x-5 px-5 items-center h-16"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? Open : Close}
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      {open && (
        <div className=" transition ease-in-out delay-100 accordion-content px-5 pt-0 overflow-hidden ">
          <p className=" text-slate-100 leading-6 font-light pl-9 pb-5 text-justify">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

export default function first() {
  let subj = {
    title: "Subjectivity",
    text: "I'm a subjective guy. I might get things wrong. To combat this, I'm welcoming suggestions—for every aspect of this site. I want this to be a resource that changes in response to valuable feedback, not a static source of outdated/misinformed rhetoric.",
  };

  let bias = {
    title: "Bias",
    text: "This probject is necessarily limited by the scope of my information, the transmission of which is mediated by my decision-making process, which is filtered through perspective/biases. If this is ever problematic, please submit an issue on the project's Github. ",
  };

  let tech = {
    title: "Technical aspects",
    text: "The HTML, CSS, and Javascript for this project is handcrafted and maintained by myself. If there are issues of any sort, I urge you (even the non-technical) to open an issue on the project's Github.",
  };

  let items = [subj, bias, tech];

  return (
    <div className="h-screen  bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 grid place-items-center">
      <div className="w-6/12 mx-auto rounded border border-gray-700 shadow-lg drop-shadow-lg ">
        <div className="bg-slate-800 p-10 shadow-md">
          <h1 className="text-lg font-medium text-slate-50">Disclaimers</h1>
          <p className="text-md font-light text-white my-3"></p>

          <p className="text-md font-light text-white my-3">
            This site is not intended to be a thoroughly exhaustive compendium
            of scholarly resources. Rather, I merely intend to offer a cursory
            overview of commonly-held perspectives on various issues surrounding
            <span className="italic font-md text-blue-200"> #Defund</span>, with
            which you may do as you wish.
          </p>

          <div className="h-1 w-full mx-auto border-b my-5"></div>
          {items.map((item) => {
            return <AccordionSection title={item.title} text={item.text} />;
          })}
        </div>
        <div className="p-2 mx-auto px-auto">
          <Link href="/">
            <a className="group cursor-pointer inline-flex items-center bg-slate-700 leading-none text-slate-400 rounded-full p-2 shadow text-sm">
              <span className="inline-flex bg-slate-600 text-slate-300 rounded-full h-6 px-3 justify-center items-center transition ease-in-out duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:text-md">
                Continue
              </span>
              <span className="inline-flex px-2 group-hover:text-white">
                I understand the disclaimers. I will submit an issue on Github.
                ;)
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
