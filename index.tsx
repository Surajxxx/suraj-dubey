import React from "react";

// Single-file React component (Tailwind CSS required)
// Usage: place this file in a React app (create-react-app / Next.js) and import as default page.

const data = {
  name: "Suraj Dubey",
  title: "Senior Backend Engineer — Backend Lead",
  email: "suraj.dubey191@gmail.com",
  phone: "+91 9824829736",
  linkedin: "https://www.linkedin.com/in/suraj-dubey",
  summary:
    "Results-driven Senior Backend Engineer with a strong track record architecting high-performance, cloud-native systems and AI-enabled platforms. Experience designing microservices, RAG systems for customer support, and scaling production systems to millions of transactions.",
  highlights: [
    "Architected RAG-based AI chatbots and knowledge systems",
    "Led backend teams and cross-functional delivery (5-7 devs)",
    "Designed platforms handling 1k+ req/s and 2M+ weekly transactions",
    "CI/CD, IAC, observability (OpenSearch / OpenTelemetry)",
    "Zero-downtime DB migrations and large-scale cloud migrations"
  ],
  experience: [
    {
      company: "Zaapi",
      role: "Backend Lead",
      period: "Aug 2023 — Present",
      bullets: [
        "Led a 5-person backend team across product & growth initiatives.",
        "Architected a RAG-based AI chatbot using LangChain, LangSmith and vector DBs.",
        "Scaled platform to support 1000+ req/s and improved uptime to 99.8%.",
        "Introduced CI/CD and Infrastructure as Code; migrated CloudWatch logs to OpenSearch to cut costs."
      ]
    },
    {
      company: "GeekyAnts",
      role: "Senior Software Engineer",
      period: "Jun 2022 — Aug 2023",
      bullets: [
        "Led technical delivery for client SaaS platforms—team of 7 engineers.",
        "Built microservices using Node.js, Express, TypeScript, GraphQL and PostgreSQL.",
        "Implemented DAPR-based architecture and WebSocket integrations for Optus platform.",
        "Executed a zero-downtime migration from MSSQL to CosmosDB."
      ]
    },
    {
      company: "GNFC",
      role: "Engineering Roles (Senior Shift Engineer → Automation & Web Apps)",
      period: "Jul 2014 — Jun 2022",
      bullets: [
        "Operated and automated TDI plant control systems (2014–2019).",
        "Led digital transformation projects: digital logbooks, permit systems, lab tools.",
        "Built resilient internal apps and integrated industrial control with web dashboards."
      ]
    }
  ],
  tech: [
    "Node.js / TypeScript / NestJS / Express",
    "Postgres / MySQL / MongoDB / CosmosDB / Redis",
    "AWS / Azure / GCP / Docker / Kubernetes / Terraform",
    "OpenSearch / Elasticsearch / Vector DBs / LangChain / LangSmith",
    "CI/CD / GitHub Actions / CircleCI / Observability"
  ],
  education: {
    degree: "B.Tech in Petroleum Engineering",
    college: "Pandit Deendayal Energy University, Gujarat",
    year: "2014"
  }
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-sm text-gray-600">{data.title}</p>
          </div>
          <div className="text-sm text-right">
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <a href={data.linkedin} className="text-indigo-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Professional Summary</h2>
              <p className="mt-3 text-gray-700">{data.summary}</p>

              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                {data.highlights.map((h, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/3 text-sm">
              <div className="bg-indigo-50 rounded p-4">
                <div className="text-xs uppercase text-gray-500">Quick facts</div>
                <div className="mt-2 text-lg font-medium">11+ years experience</div>
                <div className="mt-3 text-sm text-gray-600">Leadership, Architecture, RAG, Cloud, Microservices</div>
                <a
                  href="/assets/suraj_dubey_resume.pdf"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:opacity-95"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Experience</h3>
            <div className="mt-4 space-y-6">
              {data.experience.map((exp, idx) => (
                <article key={idx} className="border-l-2 border-indigo-100 pl-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-md font-semibold">{exp.role} — {exp.company}</div>
                      <div className="text-sm text-gray-500">{exp.period}</div>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Tech & Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {data.tech.map((t, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-300 rounded-full mr-3" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium">Education</h4>
              <div className="text-sm text-gray-700 mt-2">
                <div>{data.education.degree}</div>
                <div className="text-gray-500 text-xs">{data.education.college} • {data.education.year}</div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Contact & Next Steps</h3>
          <p className="mt-3 text-sm text-gray-700">Interested in collaborating or learning more about my systems and architectures? Reach out by email or phone.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${data.email}`} className="px-4 py-2 border rounded">Email</a>
            <a href={data.linkedin} className="px-4 py-2 border rounded">LinkedIn</a>
          </div>
        </section>

        <footer className="mt-8 text-center text-xs text-gray-500">Made with ❤️ — Portfolio generated for {data.name}</footer>
      </main>
    </div>
  );
}