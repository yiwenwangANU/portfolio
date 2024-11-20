import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <div className="text-white xl:px-72 lg:px-44 md:px-16 px-10 overflow-hidden">
      <motion.div
        className="text-5xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.div>
      <motion.div
        className="pt-1 pb-3 text-gray-500 text-lg"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Having more than 1 year and a half of experience building web
        applications.
      </motion.div>
      <motion.div
        className="pt-5 max-w-3xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-3xl font-bold">Freelancer</div>
        <div className="py-1 text-gray-500 text-lg">
          Online -- Nov 2023 – Now
        </div>
        <ul className="pt-2 list-disc px-3 text-lg">
          <li>Developed custom web applications tailored to client needs</li>
          <li>
            Designed engaging user interfaces for mobile and desktop platforms.
          </li>
          <li>
            Provided content writing and copyediting for blogs and websites.
          </li>
        </ul>
        <hr className="h-px my-8 border-0 bg-gray-700" />
      </motion.div>
      <motion.div
        className="pt-4 max-w-3xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-3xl font-bold">Operations Engineering Intern</div>
        <div className=" text-gray-500 text-lg">
          Ausmate Pty Ltd, Canberra, Australia -- Jun 2021 - Sep 2021
        </div>
        <ul className="pt-2 list-disc px-3 text-lg">
          <li>
            Website Development & Maintenance: Updated website content using
            HTML, CSS, and JavaScript, managed RDS database updates to ensure
            data integrity.
          </li>
          <li>
            Security Enhancements: Including setting up automated backups,
            updating SSL certificates, performing pressure tests, and enabling
            continuous monitoring.
          </li>
          <li>
            Cloud Server Migration: Led migration to a new cloud service
            provider, testing, and site/database migration.
          </li>
        </ul>
        <hr className="h-px my-8 border-0 bg-gray-700" />
      </motion.div>
      <motion.div
        className="pt-4 max-w-3xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-3xl font-bold">Web Development Intern</div>
        <div className=" text-gray-500 text-lg">
          CSIRO - Black Mountain Site, Canberra, Australia -- Feb 2019 - Oct
          2019
        </div>
        <ul className="pt-2 list-disc px-3 text-lg">
          <li>
            Feature Development: Collaborating with a team to build and enhance
            a Django-based website, implementing new features and integrating
            Neo4j for efficient data management.
          </li>
          <li>
            Testing & Debugging: Conducting testing and debugging to ensure the
            site’s reliability and performance.
          </li>
          <li>
            Version Control: Using Git for version control, coordinating with
            team members to manage code changes and maintain project
            consistency.
          </li>
        </ul>
        <hr className="h-px my-8 border-0 bg-gray-700" />
      </motion.div>
    </div>
  );
}

export default WorkExperience;
