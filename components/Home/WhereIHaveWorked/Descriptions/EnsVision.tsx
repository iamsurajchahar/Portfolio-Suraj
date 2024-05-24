import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the front-end development and intregated payment gateway in the Food Delivery Application using ReactJs, Tailwind CSS, Payment gateway, MongoDb, ExpressJS",
      keywords: ["MongoDb", "ExpressJs", "Payment gateway", "ReactJs", "Javascript","Tailwind CSS","front-end dee"],
    },
    {
      text: "Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted with Razorpay payment gateway and gained expertise in Web development",
      keywords: ["Razorpay payment gateway"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@Ethnus</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2023 - July 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://ethnus.com/", "_blank")}
          >
            https://ethnus.com/
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
