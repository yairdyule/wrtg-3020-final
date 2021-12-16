import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { GiFire } from "react-icons/gi";
import { BsPersonFill, BsFillPeopleFill } from "react-icons/bs";
import Topic from "./Topic";

export default function Topics() {
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
    dontText:
      "underfunded police have led to the situation we witness. *all* resources need more funding.",
    DefundIcon: MdMoneyOffCsred,
    DontIcon: MdAttachMoney,
  };
  let wake = {
    topic: "without police",
    defundText:
      "we can implement mechanisms by which communities can self-govern as they see fit",
    dontText: "there will be chaos",
    DefundIcon: MdOutlineHealthAndSafety,
    DontIcon: GiFire,
  };
  let issues = [brutality, funding, wake];
  return (
    <div className="bg-slate-900  h-screen w-full flex flex-col items-center justify-center">
      {issues.map((issue, index) => {
        return (
          <Topic
            topic={issue.topic}
            defundText={issue.defundText}
            dontText={issue.dontText}
            DefundIcon={issue.DefundIcon}
            DontIcon={issue.DontIcon}
            key={index}
          />
        );
      })}
    </div>
  );
}
