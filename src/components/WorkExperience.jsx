function WorkExperience() {
  return (
    <div className="text-white px-40">
      <div className="text-2xl font-bold">Work Experience</div>
      <div className="text-sm text-gray-500">
        Having more than 1 year and a half of experience building web
        applications.
      </div>
      <div className="pt-5 max-w-2xl">
        <div className="text-xl font-bold">Freelancer</div>
        <div className="text-xs text-gray-500">Online -- Nov 2023 – Now</div>
        <ul className="pt-2 list-disc px-3 text-sm">
          <li>Developed custom web applications tailored to client needs</li>
          <li>
            Designed engaging user interfaces for mobile and desktop platforms.
          </li>
          <li>
            Provided content writing and copyediting for blogs and websites.
          </li>
        </ul>
        <hr className="h-px my-8 border-0 bg-gray-700" />
      </div>
      <div className="pt-4 max-w-2xl">
        <div className="text-xl font-bold">Operations Engineering Intern</div>
        <div className="text-xs text-gray-500">
          Ausmate Pty Ltd, Canberra, Australia -- Jun 2021 - Sep 2021
        </div>
        <ul className="pt-2 list-disc px-3 text-sm">
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
      </div>
      <div className="pt-4 max-w-2xl">
        <div className="text-xl font-bold">Web Development Intern</div>
        <div className="text-xs text-gray-500">
          CSIRO - Black Mountain Site, Canberra, Australia -- Feb 2019 - Oct
          2019
        </div>
        <ul className="pt-2 list-disc px-3 text-sm">
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
      </div>
    </div>
  );
}

export default WorkExperience;
