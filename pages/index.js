import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { GiFire } from "react-icons/gi";
import { BsPersonFill, BsFillPeopleFill } from "react-icons/bs";
import Topic from "../components/Topic";

export default function Home() {
  // const [defund, setDefund] = useState(true);
  let brutality = {
    topic: "brutality",
    defundText: "the police are brutal to black people",
    dontText: `actually, they're brutal to everyone`,
    DefundIcon: BsPersonFill,
    DontIcon: BsFillPeopleFill,
  };
  let funding = {
    topic: "better use for funding",
    defundText:
      "the money we take from them could go to upstream social services",
    dontText: "underfunded police have led to the situation we witness",
    DefundIcon: MdMoneyOffCsred,
    DontIcon: MdAttachMoney,
  };
  let wake = {
    topic: "instead of police...",
    defundText:
      "we can implement mechanisms by which communities can self-govern as they see fit",
    dontText: "there will be chaos.",
    DefundIcon: MdOutlineHealthAndSafety,
    DontIcon: GiFire,
  };
  let issues = [brutality, funding, wake];

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {issues.map((issue) => {
          return (
            <Topic
              topic={issue.topic}
              defundText={issue.defundText}
              dontText={issue.dontText}
              DefundIcon={issue.DefundIcon}
              DontIcon={issue.DontIcon}
            />
          );
        })}
      </div>
    </>
  );
}
