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
import Topic from "../components/Topic";

import { FaBalanceScaleLeft, FaBalanceScale } from "react-icons/fa";
import { BsQuestion } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const FadedButton = (props) => {
  return (
    <button
      className="inline-flex h-12  text-green-500 items-center justify-center p-4 mb-2 bg-green-900 rounded-md shadow-xl "
      onClick={() => {
        props.setGlobalDefund(!props.globalDefund);
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <BsFillPeopleFill className="" />
        <p className="text-sm">everyone</p>
      </div>
    </button>
  );
};

const loadTopics = () => {
  let communication = {
    topic: "communication",
    defundText:
      "fears of crime and violence are justifiable. are you married to abolition, or perhaps open to reform?",
    dontText:
      "have you made as strong an effort to understanding the reality of police brutality as for resisting reform?",
    DefundIcon: GiPoliceTarget,
    DontIcon: BsFillPeopleFill,
    defund: true,
  };
  let messaging = {
    topic: "messaging",
    defundText:
      '"defund" divides your allyship and embitters the uninitiated. a more all-embracing message/agenda may improve receptivity',
    dontText:
      "'defunders' don't want violence any more than you do. insinuations to that effect are baseless and divisive",
    DefundIcon: HiTrendingUp,
    DontIcon: HiTrendingDown,
    defund: true,
  };
  let agenda = {
    topic: "priorities",
    defundText:
      "full-on abolition is untenable and unlikely. focusing efforts at reform may prove more fruitful",
    dontText:
      "those opposed to police reform out of partisanship might do well to reconsider their priorities",
    DefundIcon: HiTrendingUp,
    DontIcon: HiTrendingDown,
    defund: true,
  };
  let arstneio = {
    topic: "",
    defundText:
      "full-on abolition is untenable and unlikely. focusing efforts at reform may prove more fruitful",
    dontText:
      "those opposed to police reform out of partisanship might do well to reconsider their priorities",
    DefundIcon: HiTrendingUp,
    DontIcon: HiTrendingDown,
    defund: true,
  };
  return [communication, messaging, agenda];
};

export default function Fin() {
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
    <div className="bg-slate-900 min-h-screen max-h-fit  overflow-auto w-screen flex flex-col items-center justify-start py-5">
      <FadedButton setGlobalDefund={switchGlobal} globalDefund={globalDefund} />
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

      <div className="pt-8">
        <Link href="/facets">
          <button
            className="inline-flex shadow-lg h-8 w-32 gap-1 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md  transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-indigo-200"
            onClick={() => {
              setLoading(true);
            }}
          >
            {loading ? (
              <CgSpinnerAlt className="animate-spin" />
            ) : (
              <BsArrowLeft />
            )}
            perspectives
          </button>
        </Link>
      </div>
    </div>
  );
}
