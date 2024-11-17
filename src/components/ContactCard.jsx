import React from "react";

function ContactCard({ title, description, underline, icon, url }) {
  return (
    <div className="w-[500px] h-24 rounded-xl border-white border-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl px-4 py-3">{title}</div>
        <a href={url}>
          {React.cloneElement(icon, {
            className: "w-10 h-10 -translate-x-7 translate-y-7",
          })}
        </a>
      </div>

      <span className="text-gray-400 leading-5 px-4 py-1 ">{description}</span>
      <a className="underline text-purple-500 hover:text-purple-400" href={url}>
        {underline}
      </a>
    </div>
  );
}

export default ContactCard;
