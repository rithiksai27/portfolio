"use client";

import React from "react";

import { companies, Academics } from "@/data";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="Academics" className="py-20" id="Clients">
      <h1 className="heading">
        <span className="text-purple"> Academics</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={Academics}
            direction="right"
            speed="slow"
          />
        </div>

        
      </div>
    </section>
  );
};

export default Clients;