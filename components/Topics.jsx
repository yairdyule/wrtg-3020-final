import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { GiFire } from "react-icons/gi";
import { BsPersonFill, BsFillPeopleFill } from "react-icons/bs";
import Topic from "./Topic";

import { BsQuestion } from "react-icons/bs";
import { useState } from "react";

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
      className="inline-flex h-12 w-14 text-red-300 items-center justify-center p-2 bg-red-900 rounded-md shadow-xl"
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
      className="inline-flex h-12 w-14 text-indigo-300 items-center justify-center p-2 bg-indigo-900 rounded-md shadow-xl"
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
      className="inline-flex h-12 w-14 text-green-300 items-center justify-center p-2 bg-green-900 rounded-md shadow-xl"
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
    defundText: "the police are brutal to black people",
    dontText: `actually, they're brutal to everyone`,
    DefundIcon: BsPersonFill,
    DontIcon: BsFillPeopleFill,
    defund: true,
  };
  let funding = {
    topic: "better use for funding",
    defundText:
      "the money we take from them could go to upstream social services",
    dontText:
      "underfunded police have led to the situation we witness. *all* resources need more funding.",
    DefundIcon: MdMoneyOffCsred,
    DontIcon: MdAttachMoney,
    defund: true,
  };
  let wake = {
    topic: "without police",
    defundText:
      "we can implement mechanisms by which communities can self-govern as they see fit",
    dontText: "there will be chaos",
    DefundIcon: MdOutlineHealthAndSafety,
    DontIcon: GiFire,
    defund: true,
  };
  return [brutality, funding, wake];
};

export default function Topics() {
  const [state, setState] = useState(loadTopics());
  const [globalDefund, setGlobalDefund] = useState(true);
  const [unsure, setUnsure] = useState(false);

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
    <div className="bg-slate-900  h-screen w-full flex flex-col items-center justify-center">
      <SwitchButton
        className="h-8 w-8"
        defund={globalDefund}
        setDefund={setGlobalDefund}
        switchGlobal={switchGlobal}
        unsure={unsure}
      />
      {state.map((issue, index) => {
        return (
          <Topic issue={issue} index={index} onSwitch={onSwitch} key={index} />
        );
      })}
    </div>
  );
}
