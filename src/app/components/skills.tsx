import Image, { StaticImageData } from "next/image";
import HTML from "../public/html.svg";
import CSS from "../public/css.svg";
import JS from "../public/JS.svg";
import React from "../public/react.svg";
import Node from "../public/node.svg";
import Next from "../public/nextjs.svg";
import Graph from "../public/graphql.svg";
import PHP from "../public/php.svg";
import SQL from "../public/sqlite.svg";
import Tail from "../public/tailwind.svg";
import Strapi from "../public/strapi.svg";
import Mongo from "../public/mongodb.svg";

export default function Skills() {
  const FrontEndSkills = [
    [HTML, "https://www.w3schools.com/html/"],
    [CSS, "https://www.w3schools.com/css/"],
    [JS, "https://www.w3schools.com/js/"],
    [React, "https://react.dev/"],
    [Node, "https://nodejs.org/en"],
    [Next, "https://nextjs.org/"],
    [Graph, "https://graphql.org/"],
    [Tail, "https://tailwindcss.com/"],
  ];
  const BackEndSkills = [
    [PHP, "https://www.php.net/"],
    [SQL, "https://www.w3schools.com/sql/"],
    [Strapi, "https://strapi.io/"],
    [Mongo, "https://www.mongodb.com/"],
  ];
  return (
    <div className="flex flex-col gap-8 py-24">
      <h2 className="text-4xl text-center">Front-End Skills</h2>
      <div className="flex justify-center gap-8 pb-24">
        {FrontEndSkills.map((item, i) => (
          <a href={item[1]} key={i} target="_blank" rel="noreferrer nofollow">
            <Image
              src={item[0]}
              alt="Front End Skill"
              width={75}
              height={75}
              className="hover:scale-125"
            />
          </a>
        ))}
      </div>
      <h2 className="text-4xl text-center">Back-End Skills</h2>
      <div className="flex justify-center gap-8 pb-24">
        {BackEndSkills.map((item, i) => (
          <a href={item[1]} key={i} target="_blank" rel="noreferrer nofollow">
            <Image
              src={item[0]}
              alt="Back End Skill"
              width={75}
              height={75}
              className="hover:scale-125"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
