import React from "react";
import SearchComponent from "./Search";
import VidyaGrantForm from "./VidyaGrantForm";
import Vidyadummy from "./vidyadummy";
export default function VidyaGrant() {
  return (
    <div>
      <div className=" text-black p-4 flex justify-between items-center">
        <h1 className="text-2xl">Vidya Grant</h1>
        <div></div>
      </div>
      <div className="w-full">
        <SearchComponent />
      </div>

      <div>
        <VidyaGrantForm />
      </div>
      <div>
        <Vidyadummy />
      </div>
    </div>
  );
}
