function ContactCard({ title, description, underline, icon, url }) {
  return (
    <div className="w-[500px] h-[100px] rounded-xl border border-white">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl py-2">{title}</div>
        <a href={url}>{icon}</a>
      </div>

      <span className="text-gray-500 leading-5 py-1 h-20">{description}</span>
      <a className="underline" href={url}>
        {underline}
      </a>
    </div>
  );
}

export default ContactCard;
