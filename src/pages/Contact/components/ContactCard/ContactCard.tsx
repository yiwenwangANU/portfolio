import React, { type ReactElement, type ReactNode } from "react";

type ContactCardProps = {
  title: ReactNode;
  description: ReactNode;
  underline: ReactNode;
  icon: ReactElement<{ className?: string }>;
  url: string;
};

const ContactCard = ({
  title,
  description,
  underline,
  icon,
  url,
}: ContactCardProps) => {
  return (
    <div className="h-24 w-full rounded-xl border-2 border-white lg:w-[420px] xl:w-[450px] 2xl:w-[480px]">
      <div className="flex flex-row justify-between">
        <div className="px-4 py-3 text-xl font-bold">{title}</div>
        <a href={url}>
          {React.cloneElement(icon, {
            className:
              "w-10 h-10 -translate-x-7 sm:translate-y-7 translate-y-4",
          })}
        </a>
      </div>

      <span className="py-1 pl-4 pr-2 leading-5 text-gray-400">
        {description}
      </span>
      <a className="text-purple-500 underline hover:text-purple-400" href={url}>
        {underline}
      </a>
    </div>
  );
};

export default ContactCard;
