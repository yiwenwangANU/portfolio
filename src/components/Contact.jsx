import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import ContactCard from "./ContactCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    title: "Email",
    description: "Email me at",
    underline: "wangyiwenau@gmail.com",
    icon: <MdEmail />,
    url: "mailto:wangyiwenau@gmail.com",
  },
  {
    title: "LinkedIn",
    description: "Connect with me on",
    underline: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/yiwenwangg/",
  },
  {
    title: "Github",
    description: "Follow me on",
    underline: "Github",
    icon: <FaGithub />,
    url: "https://github.com/yiwenwangANU",
  },
];
function Contact() {
  return (
    <div className="2xl:px-64 xl:px-40 md:px-16 sm:px-10 px-5 pt-20 text-white">
      <motion.div
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.div>
      <motion.div
        className="text-gray-400 leading-5 px-1 py-4 text-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        You can connect with me in any way you prefer.
      </motion.div>
      <motion.div
        className="flex flex-row gap-x-8 gap-y-12 flex-wrap px-2 py-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {contactInfo.map((item) => (
          <ContactCard
            title={item.title}
            description={item.description}
            underline={item.underline}
            icon={item.icon}
            url={item.url}
            key={item.title}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Contact;
