import { CgSpinnerAlt } from "react-icons/cg";
import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { GiPoliceTarget, GiReceiveMoney } from "react-icons/gi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { BsPersonFill, BsFillPeopleFill } from "react-icons/bs";
import { BiInfinite } from "react-icons/bi";
import Topic from "./Topic";

import { FaBalanceScaleLeft, FaBalanceScale } from "react-icons/fa";
import { BsQuestion } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const SwitchButton = (props) => {
  const [defund, setDefund] = useState(props.defund);
  const unsure = props.unsure;

  const switchGlobal = props.switchGlobal;

  const onClick = () => {
    setDefund(!defund);
    props.setDefund(!defund);
    switchGlobal(!defund);
  };

  const defundButton = (
    <button
      className="inline-flex h-12 w-14 text-yellow-300 items-center justify-center p-4 mb-2 bg-yellow-900 rounded-md shadow-xl hover:bg-yellow-800 transition ease-in duration-150 hover:text-yellow-400"
      onClick={onClick}
    >
      <div className="flex flex-col justify-center items-center">
        <MdMoneyOffCsred className="" />
        <p className="text-sm">defund</p>
      </div>
    </button>
  );

  const unsureButton = (
    <button
      className="inline-flex h-12 w-14 text-indigo-300 items-center justify-center p-4 mb-2 bg-indigo-900 rounded-md shadow-xl hover:bg-indigo-800 hover:text-indigo-200"
      onClick={onClick}
    >
      <div className="flex flex-col justify-center items-center">
        <BsQuestion className="" />
        <p className="text-sm">unsure</p>
      </div>
    </button>
  );

  const dontButton = (
    <button
      className="inline-flex h-12 w-14 text-blue-300 items-center justify-center p-4 mb-2 bg-blue-900 rounded-md shadow-xl transition ease-in duration-150 hover:bg-blue-800 hover:text-blue-600"
      onClick={onClick}
    >
      <div className="flex flex-col justify-center items-center">
        <MdAttachMoney className="" />
        <p className="text-sm">fund</p>
      </div>
    </button>
  );

  if (unsure) return unsureButton;
  return defund ? defundButton : dontButton;
};

const loadTopics = () => {
  let brutality = {
    topic: "brutality",
    defundText:
      "police forces  are overly-militarized and unnecessarily brutal - demilitarize them and fund communities",
    dontText: `police work a stressful job, are undertrained, and are overworked. funding these problems will lead to better outcomes`,
    DefundIcon: GiPoliceTarget,
    DontIcon: BsFillPeopleFill,
    defund: true,
  };
  let efficacy = {
    topic: "efficacy",
    defundText:
      "police don't even decrease crime, they beget creative criminals",
    dontText:
      "removing police won't decrease crime. well-funded, evidence-led police departments will",
    DefundIcon: HiTrendingUp,
    DontIcon: HiTrendingDown,
    defund: true,
  };
  let funding = {
    topic: "funding",
    defundText:
      "all/some of police departments' funding should be diverted to fund social programs",
    dontText:
      "underfunded police forces got us to this situation in the first place",
    DefundIcon: MdMoneyOffCsred,
    DontIcon: GiReceiveMoney,
    defund: true,
  };
  let accountability = {
    topic: "accountability",
    defundText:
      "individual police need to stand accountable for their unjust actions",
    dontText:
      "due to the nature of their work, officers should be granted some discretion",
    DefundIcon: FaBalanceScaleLeft,
    DontIcon: FaBalanceScale,
    defund: true,
  };
  let wake = {
    topic: "without police",
    defundText:
      "communities can implement mechanisms by which they can self-govern, as they see fit",
    dontText:
      "criminal activity will reign unfettered, causing communities to become unsafe",
    DefundIcon: BiInfinite,
    DontIcon: MdOutlineHealthAndSafety,
    defund: true,
  };
  let popularity = {
    topic: "unanimity",
    defundText: "it's what the people want!",
    dontText: '"defund" is an unpopular stance',
    DefundIcon: BsFillPeopleFill,
    DontIcon: BsPersonFill,
    defund: true,
  };
  return [brutality, funding, efficacy, wake, popularity, accountability];
};

export default function Topics() {
  const [state, setState] = useState(loadTopics());
  const [globalDefund, setGlobalDefund] = useState(true);
  const [unsure, setUnsure] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSwitch = (index, stance) => {
    let tempState = [...state];
    tempState[index].defund = stance;
    setState(tempState);
    if (checkUnsure()) {
      setUnsure(true);
    } else {
      setUnsure(false);
    }
  };

  const checkEqual = () => {
    let canary = state[0].defund;
    return state.every(({ defund }) => defund == canary);
  };

  console.log(checkEqual());

  const checkUnsure = () => {
    return state.filter(({ defund }) => defund != globalDefund).length > 0;
  };

  const switchGlobal = (stance) => {
    let tempState = [...state];
    for (let i = 0; i < tempState.length; i++) {
      tempState[i].defund = stance;
    }
    console.log("state flipped");
    setState(tempState);
    setUnsure(false);
    setGlobalDefund(stance);
  };

  return (
    <div className="bg-slate-900 h-fit lg:h-screen overflow-auto  w-screen flex flex-col items-center justify-start py-5">
      <SwitchButton
        className="h-8 w-8"
        defund={globalDefund}
        setDefund={setGlobalDefund}
        switchGlobal={switchGlobal}
        unsure={unsure}
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-0.5 gap-x-2">
        {state.map((issue, index) => {
          return (
            <Topic
              issue={issue}
              index={index}
              onSwitch={onSwitch}
              key={index}
            />
          );
        })}
      </div>

      <div className="pt-8 inline flex flex-row items-center justify-center gap-2">
        <Link href="/">
          <button
            className="inline-flex shadow-lg gap-1 h-8 w-32 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md  transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-indigo-200"
            onClick={() => {
              setLoading(true);
            }}
          >
            <BsArrowLeft classname="pr-2 mr-2" />
            disclaimers
          </button>
        </Link>
        <Link href="/recommendations">
          <button
            className="inline-flex shadow-lg gap-1 h-8 w-32 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md  transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-indigo-200"
            onClick={() => {
              setLoading(true);
            }}
          >
            <p>ideas</p>
            {loading ? (
              <CgSpinnerAlt className="animate-spin" />
            ) : (
              <BsArrowRight className="" />
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}
