import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";
import project1 from "../../image/project1.png";
import project2 from "../../image/project2.png";

export default function Home() {
  const experiences = [
    {
      role: "Cybersecurity Engineer",
      company: "Network for Electronic Transfer (NETS)",
      period: "2026 - Present",
      summary:
        "Responsible for the design, implementation, and maintenance of the organization's cybersecurity solutions and policies",
    },
    {
      role: "CBRD Engineer",
      company: "Singapore Armed Forces",
      period: "2024 - 2026",
      summary:
        "A CBRE Engineer under 39SCE specializes in the threat detection, mitigation, and neutralisation of Chemical, Biological, Radiological, and Explosive threats across mainland Singapore",
    },
    {
      role: "Cybersecurity Engineer",
      company: "Hummingbird Bioscience",
      period: "2024",
      summary:
        "Conducted phishing awareness program, security hardening using CIS Benchmark, Alcatel Access Points migration, risk assessment as well as infrastructure security management ",
    },
    {
      role: "Cybersecurity Engineer",
      company: "Suzhou Dongshan Precision Manufacturing Co.,Ltd.",
      period: "2023",
      summary:
        "Conducted vulnerability management program, SIEM dashboard creation, NIDS tuning, IT services management(Etc. DHCP, DNS), design Tier-2 network for enterprise network implementation",
    },
    {
      role: "Cybersecurity Analyst",
      company: "Insightz Technology",
      period: "2020 - 2021",
      summary:
        "Served as a Level 1 cybersecurity analyst, SIEM and EDR platform management, logs automation using scripting languages and onsite support for EDR implementation",
    },
  ];

  const certifications = [
    {
      name: "Security+",
      issuer: "CompTIA",
      year: "2024",
      badge: "/badges/security_plus.png",
      url: "https://www.credly.com/badges/cbb746dd-970d-4f95-bea9-00f174d91476/public_url",
      description: "Advanced expetise to perform core security functions required of any cybersecurity role.",
    },
    {
      name: "ISO/IEC 27701:2025 Lead Auditor",
      issuer: "Mastermind Assurance",
      year: "2026",
      badge: "/badges/iso-27701.png",
      url: "https://www.credly.com/badges/9ecc7ab5-bea3-4fc5-ad11-1f9a25655c7a/public_url",
      description: "Advanced expertise in assessing privacy information management (PIMS) for handling personal data and GDPR-like compliance",
    },
    {
      name: "ISO/IEC 42001:2023 Lead Auditor",
      issuer: "Mastermind Assurance",
      year: "2026",
      badge: "/badges/iso-42001.png",
      url: "https://www.credly.com/badges/a4f0c681-09b6-47e8-b1cc-acc17e2c235f/public_url",
      description: "Advanced expertise in assessing artificial intelligence management system (AIMS) scopes",
    },
    {
      name: "ISO/IEC 27001:2022 Lead Auditor",
      issuer: "Mastermind Assurance",
      year: "2026",
      badge: "/badges/iso-27001.png",
      url: "https://www.credly.com/badges/50e0a0b5-3ca4-4dd6-8583-175a4879b892/public_url",
      description: "Advanced expertise in assessing information security management system (ISMS) scopes",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2020",
      badge: "/badges/CEH.jpg",
      url: "https://github.com/ChrisNetEngineer/PortfolioStorage/blob/main/ECC-CEH-Certificate.pdf",
      description: "Validates the ability to identify vulnerabilities and threats in systems and networks, and apply appropriate countermeasures.",
    },  
    {
      name: "Certified Secure Computer User (CSCU)",
      issuer: "EC-Council",
      year: "2020",
      badge: "/badges/CSCU.png",
      url: "https://github.com/ChrisNetEngineer/PortfolioStorage/blob/main/ECC-CSCU-Certificate.pdf",
      description: "Validates the knowledge and skills of end-users to protect their information assets from cyber threats and attacks, including safe internet usage, email security, social engineering, and data protection.",
    },
    {
      name: "CCNA",
      issuer: "Cisco",
      year: "2023",
      badge: "/badges/ccna.png",
      url: "https://www.credly.com/badges/7af578ba-fbd6-4a1a-b13e-675e5dd695a3/public_url",
      description: "Demonstrated knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability",
    },  
    {
      name: "AWS Certified Security Specialty",
      issuer: "Amazon Web Services",
      year: "TBC",
      badge: "/badges/aws-security-specialty.png",
      url: "",
      description: "Advanced expertise in designing and implementing security solutions for AWS environments",
    },
  ];

  const academics = [   
    {
      program: "Bachelor of Science with Honours in Cybersecurity",
      school: "Coventry University (UK)",
      period: "2026 - Present",
      gpa: "N/A",
      note: "Focus on Cybersecurity, IoT, and Cloud Security.",
    },
    {
      program: "Diploma in Cybersecurity & Digital Forensics",
      school: "Nanyang Polytechnic",
      period: "2021 - 2024",
      gpa: "3.40",
      note: "Focused on Network Security, Incident Response, and Vulnerability Management.",
    },
    {
      program: "Higher Nitec in Cyber & Network Security",
      school: "ITE College West",
      period: "2019 - 2021",
      gpa: "4.0",
      note: "Built fundamentals in systems administration, scripting, and enterprise networking.",
    },
  ];

  const focusAreas = [
    "AWS Cloud Security",
    "Privileged Access Management (PAM)",
    "Incident Response",
    "Vulnerability Management",
    "Penetration Testing",
    "Network Security",
  ];

  const highlights = [
    { label: "Years in Cybersecurity", value: "5+" },
    { label: "Industry Certifications", value: "8+" },
    { label: "Career Focus", value: "Fintech & Security" },
  ];

  return (
    <>
      <Hero />

      <AnimatedSection>
        <section
          id="projects"
          className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Featured Projects</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">Showcasing my latest work and creative solutions</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <ProjectCard
                title="To Do List"
                description="Developed a modern task management system that leverages real-time state management to help users prioritize objectives and track progress across devices"
                url="https://to-do-lists-six-rouge.vercel.app/"
                image={project1.src}
                index={0}
              />
              <ProjectCard
                title="LinkNET - Priviledge Access Management System"
                description="Control and monitor access to critical systems and data, ensuring that only authorized users have the necessary permissions to perform their tasks while maintaining a secure and compliant environment"
                url="#"
                image={project2.src}
                index={1}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          id="about"
          className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                Who I am and what drives my work in cybersecurity
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
              <div className="lg:col-span-3 relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-100 dark:border-slate-700 shadow-lg group">
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-500/10 dark:bg-blue-400/10 group-hover:bg-blue-500/15 transition-all duration-300"
                  aria-hidden="true"
                />
                <div className="relative z-10 space-y-5 sm:space-y-6">
                  <span className="inline-block text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Cybersecurity & Cloud Security Engineer
                  </span>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I&apos;m a Cybersecurity Engineer with strong interests in AWS Cloud Security, Privileged Access Management (PAM), Incident Response, and Vulnerability Management. Committed to continuous learning, I aim to deepen my expertise through professional certifications and a Master&apos;s degree while building a long-term career in Singapore&apos;s Fintech and cybersecurity industry.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                    {highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-xl px-4 py-3 border border-blue-100 dark:border-slate-600 text-center"
                      >
                        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                          {item.value}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100 dark:border-slate-700 shadow-lg flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Core Focus Areas
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 sm:mb-6">
                  Domains I specialize in and continue to develop
                </p>
                <ul className="space-y-3 flex-1">
                  {focusAreas.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700/80 dark:to-slate-600/80 border border-blue-100/80 dark:border-slate-600"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          id="experience"
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Experience</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">Roles that shaped my professional journey</p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div
                className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-400 to-indigo-500 dark:from-blue-500 dark:via-indigo-500 dark:to-indigo-600"
                aria-hidden="true"
              />
              <div className="space-y-5 sm:space-y-6">
                {experiences.map((experience, idx) => (
                  <article
                    key={idx}
                    className="relative pl-10 sm:pl-12"
                  >
                    <div
                      className="absolute left-0 top-5 sm:top-6 w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 ring-4 ring-white dark:ring-slate-900 shadow-md"
                      aria-hidden="true"
                    />
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-blue-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                            {experience.role}
                          </h3>
                          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                            {experience.company}
                          </p>
                        </div>
                        <span className="self-start text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 whitespace-nowrap shrink-0">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {experience.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          id="academic"
          className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                Academic Background
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                My education journey and technical foundation
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div
                className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-400 via-violet-400 to-purple-400 dark:from-indigo-500 dark:via-violet-500 dark:to-purple-500"
                aria-hidden="true"
              />
              <div className="space-y-5 sm:space-y-6">
                {academics.map((item, idx) => (
                  <article
                    key={idx}
                    className="relative pl-10 sm:pl-12"
                  >
                    <div
                      className="absolute left-0 top-5 sm:top-6 w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 ring-4 ring-white dark:ring-slate-900 shadow-md"
                      aria-hidden="true"
                    />
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-violet-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3 sm:mb-4">
                        <div className="min-w-0 flex-1">
                          <span className="inline-block text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 mb-3">
                            {item.period}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                            {item.program}
                          </h3>
                          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                            {item.school}
                          </p>
                        </div>
                        <div className="self-start shrink-0 flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/30 dark:to-violet-900/30 border border-violet-200 dark:border-violet-800 px-4 py-2.5 group-hover:shadow-md transition-shadow duration-300">
                          <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                            {item.gpa}
                          </span>
                          <span className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wide">
                            GPA
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-t border-violet-100 dark:border-slate-700 pt-3 sm:pt-4">
                        {item.note}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          id="certifications"
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Certifications</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">Industry-recognized credentials with verifiable badge-ready slots</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-2xl p-6 sm:p-7 border border-blue-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
                >
                  <div className="mb-5 rounded-xl border border-blue-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 h-40 sm:h-44 p-4 relative">
                    <Image
                      src={cert.badge}
                      alt={`${cert.name} badge`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug flex-1">
                      {cert.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                    {cert.description}
                  </p>
                  <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all duration-300">
                    <span>View credential</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          id="contact"
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-gray-100 dark:border-slate-700">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Let&apos;s Connect</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Have a project in mind or just want to chat? I&apos;d love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                <a
                  href="mailto:yongen12345@outlook.com"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transform"
                >
                  📧 Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/lim-y-608713194/"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  💼 LinkedIn
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Or find me on your favorite social platform
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
