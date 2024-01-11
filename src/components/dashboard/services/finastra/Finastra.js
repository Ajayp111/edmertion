import React from "react";
import Search from "./search";
import Finbanks from "./finbanks";
import Finform from "./finform";
export default function Finastra() {
  return (
    <div>
      <div className=" text-black p-4 flex justify-between items-center">
        <h1 className="text-2xl" style={{ userSelect: "none" }}>
          FinAstra
        </h1>
      </div>
      <div className="w-full">
        <Search />
        <Finform />
        <Finbanks />
      </div>
    </div>
  );
}
