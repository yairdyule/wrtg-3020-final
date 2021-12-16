import { useState, useContext, createContext, useReducer } from "react";

const OpinionContext = createContext(true);
const OpinionUpdateContext = createContext();
const UnsureContext = createContext(true);
const UnsureUpdateContext = createContext();

export function useOpinion() {
  return useContext(OpinionContext);
}

export function useOpinionUpdate() {
  return useContext(OpinionUpdateContext);
}

export function useUnsure() {
  return useContext(UnsureContext);
}
export function useUnsureUpdate() {
  return useContext(UnsureUpdateContext);
}

export function OpinionProvider({ children }) {
  const [defund, setDefund] = useState(true);
  const [unsure, setUnsure] = useState(false);

  function toggleDefund() {
    setDefund(!defund);
  }

  function toggleUnsure() {
    setUnsure(!unsure);
  }

  return (
    <OpinionContext.Provider value={defund}>
      <OpinionUpdateContext.Provider value={toggleDefund}>
        <UnsureContext.Provider value={unsure}>
          <UnsureUpdateContext.Provider value={toggleUnsure}>
            {children}
          </UnsureUpdateContext.Provider>
        </UnsureContext.Provider>
      </OpinionUpdateContext.Provider>
    </OpinionContext.Provider>
  );
}
