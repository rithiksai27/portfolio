import React from "react";
import { MacbookScroll1 } from "./ui/Scroll1";
import { MacbookScroll2 } from "./ui/Scroll2";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-custom-color w-full mt-40" id="Achievements">
      <h1 className="heading text-center mb-1">
        Key <span className="text-purple">Accomplishments</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-1">
        <div className="w-full md:w-auto">
          <MacbookScroll1
            title="Web-Sprint 2023"
            showGradient={false}
          />
        </div>
        <div className="w-full md:w-auto">
          <MacbookScroll2
            title="24Hr BootCamp on Web"
            showGradient={false}
          />
        </div>
      </div>
    </div>
  );
}
