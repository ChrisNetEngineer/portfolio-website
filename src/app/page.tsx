import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";
import project1 from "../../image/project1.png";

export default function Home() {
  const experiences = [
    {
      role: "CBRD Engineer",
      company: "Singapore Armed Forces",
      period: "2024 - 2026",
      summary:
        "A CBRE Engineer under 39SCE specializes in the threat detection, mitigation, and neutralisation of Chemical, Biological, Radiological, and Explosive threats across mainland Singapore",
    },
    {
      role: "Network Security Engineer",
      company: "Hummingbird Bioscience",
      period: "2024",
      summary:
        "Conducted phishing awareness program, security hardening using CIS Benchmark, Alcatel Access Points migration, risk assessment as well as infrastructure security management ",
    },
    {
      role: "Cybersecurity & Infrastructure Engineer",
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
      name: "CCNA",
      issuer: "Cisco",
      year: "2023",
      badge: "/badges/ccna.png",
      description: "Demonstrated knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability",
    },
    {
      name: "Security+",
      issuer: "CompTIA",
      year: "2024",
      badge: "/badges/security_plus.png",
      description: "Advanced expetise to perform core security functions required of any cybersecurity role.",
    },
    {
      name: "ISO/IEC 42001:2023 Lead Auditor",
      issuer: "Mastermind Assurance",
      year: "2026",
      badge: "/badges/iso-42001.png",
      description: "Advanced expertise in assessing artificial intelligence management system (AIMS) scopes",
    },
    {
      name: "ISO/IEC 27001:2022 Lead Auditor",
      issuer: "Mastermind Assurance",
      year: "2026",
      badge: "/badges/iso-27001.png",
      description: "Advanced expertise in assessing information security management system (ISMS) scopes",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2020",
      badge: "/badges/CEH.jpg",
      description: "Validates the ability to identify vulnerabilities and threats in systems and networks, and apply appropriate countermeasures.",
    },  
    {
      name: "Certified Secure Computer User (CSCU)",
      issuer: "EC-Council",
      year: "2020",
      badge: "/badges/CSCU.png",
      description: "Validates the knowledge and skills of end-users to protect their information assets from cyber threats and attacks, including safe internet usage, email security, social engineering, and data protection.",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2020",
      badge: "/badges/CEH.jpg",
      description: "Validates the ability to identify vulnerabilities and threats in systems and networks, and apply appropriate countermeasures.",
    },  
    {
      name: "Certified Secure Computer User (CSCU)",
      issuer: "EC-Council",
      year: "2020",
      badge: "/badges/CSCU.png",
      description: "Validates the knowledge and skills of end-users to protect their information assets from cyber threats and attacks, including safe internet usage, email security, social engineering, and data protection.",
    },
  ];

  const academics = [
    {
      program: "Diploma in Cybersecurity & Digital Forensics",
      school: "Nanyang Polytechnic",
      period: "2021 - 2024",
      gpa: "3.40",
      note: "Focused on network security, incident response, and security operations.",
    },
    {
      program: "Higher Nitec in Information Technology",
      school: "ITE College Central",
      period: "2019 - 2021",
      gpa: "4.0",
      note: "Built fundamentals in systems administration, scripting, and enterprise networking.",
    },
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
                title="Project Two"
                description="Another interesting project with React and Tailwind showcasing advanced web development techniques."
                url="#"
                index={1}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          id="about"
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-100 dark:border-slate-700">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">About Me</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I&apos;m an IT enthusiast and aspiring DevSecOps Engineer driven by a fearless curiosity to build and secure complex systems. From building high-performance applications to penetration testing and IT infrastructure management, I engineer resilient solutions that bridge the gap between rapid innovation and ironclad security  
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
                  {['Web Application', 'Incidence Response', 'Penetration Testing', 'Networking', 'System Integration', 'Server Management'].map((skill, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-center border border-blue-100 dark:border-slate-600">
                      <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">{skill}</span>
                    </div>
                  ))}
                </div>
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
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">Four roles that shaped my professional journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {experiences.map((experience, idx) => (
                <article
                  key={idx}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-2xl p-6 sm:p-7 border border-blue-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {experience.role}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {experience.company}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {experience.summary}
                  </p>
                </article>
              ))}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Academic Background</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">My education journey and technical foundation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {academics.map((item, idx) => (
                <article
                  key={idx}
                  className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 sm:p-7 border border-blue-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Background decoration */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-500/10 dark:bg-blue-400/10 group-hover:bg-blue-500/15 transition-all duration-300" />
                  
                  {/* GPA Circle Badge */}
                  <div className="absolute top-6 right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">{item.gpa}</div>
                      <div className="text-xs sm:text-xs font-semibold text-white/90">GPA</div>
                    </div>
                  </div>

                  <div className="relative z-10 pr-28 sm:pr-32">
                    {/* Period Badge */}
                    <span className="inline-block text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
                      {item.period}
                    </span>

                    {/* Program Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug mb-2">
                      {item.program}
                    </h3>

                    {/* School */}
                    <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                      {item.school}
                    </p>

                    {/* Note/Description */}
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </article>
              ))}
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
                <article
                  key={idx}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-2xl p-6 sm:p-7 border border-blue-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
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
                </article>
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
