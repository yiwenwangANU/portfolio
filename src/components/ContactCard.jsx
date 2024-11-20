import React from "react";

function ContactCard({ title, description, underline, icon, url }) {
  return (
    <div className="2xl:w-[480px] xl:w-[450px] lg:w-[420px] w-full h-24 rounded-xl border-white border-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl px-4 py-3">{title}</div>
        <a href={url}>
          {React.cloneElement(icon, {
            className:
              "w-10 h-10 -translate-x-7 sm:translate-y-7 translate-y-4",
          })}
        </a>
      </div>

      <span className="text-gray-400 leading-5 pl-4 pr-2 py-1">
        {description}
      </span>
      <a className="underline text-purple-500 hover:text-purple-400" href={url}>
        {underline}
      </a>
    </div>
  );
}

export default ContactCard;
