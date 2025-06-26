import React from "react";
import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textBlue">
          {" "}
          view the archive 📁{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="WorldWise"
          description="A smart travel tracking app that helps users log, map, and remember the places they've visited around the world."
          listItem={["React", "Leaflet"]}
          link="https://github.com/DevangKandari/WorldWise"
        />
        <ArchiveCard
          title="Moviemate"
          description="A movie discovery app that fetches real-time data from the TMDB API to display trending, popular, and top-rated movies with detailed info."
          listItem={["React", "ContextAPI"]}
          link="https://github.com/DevangKandari/Use-Popcorn"
        />
        <ArchiveCard
          title="TinDog"
          description="T A fun, responsive Tinder-like website for dogs built using HTML, CSS, and Bootstrap, featuring swipe-style pet profiles and a modern UI."
          listItem={["Python"]}
          link="https://github.com/DevangKandari/TinDog"
        />
      </div>
    </div>
  );
};

export default Archive;
