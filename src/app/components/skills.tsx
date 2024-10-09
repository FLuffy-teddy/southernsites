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
  const FrontEndSkills = [HTML, CSS, JS, React, Node, Next, Tail, Graph];
  const BackEndSkills = [PHP, SQL, Strapi, Mongo];
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-24">
      <h2 className="text-4xl">Front-End Skills</h2>
      <div className="flex justify-between gap-4 pb-24">
        {FrontEndSkills.map((item, i) => (
          <Image
            src={item}
            alt="Front End Skill"
            key={i}
            width={75}
            height={75}
          />
        ))}
      </div>
      <h2 className="text-4xl">Back-End Skills</h2>
      <div className="flex justify-between gap-8 pb-24">
        {BackEndSkills.map((item, i) => (
          <Image
            src={item}
            alt="Back End Skill"
            key={i}
            width={75}
            height={75}
          />
        ))}
      </div>
    </div>
  );
}
