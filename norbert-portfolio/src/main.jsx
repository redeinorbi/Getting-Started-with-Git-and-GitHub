import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, ChevronDown, Code2,
  FileDown, Globe2, GraduationCap, Layers3, Linkedin, Mail, MapPin, Menu,
  Network, ShieldCheck, Sparkles, Terminal, Users, Workflow, X
} from 'lucide-react';
import './styles.css';

const cv = '/Norbert-Redei-CV.pdf';
const experience = [
  {
    dates: 'SEP 2024 — NOW', role: 'zSolutions Delivery Consultant', company: 'IBM Technology Expert Labs', location: 'Kraków, Poland', current: true,
    intro: 'Enterprise IBM Z product services across z/OS and hybrid environments.',
    points: [
      'Deliver deployment, installation, configuration and upgrades for z/OS solutions and third-party ISV products from BMC, Broadcom and Rocket Software.',
      'Administer, configure and validate solution deployments through TSO/ISPF.',
      'Design and deliver specialized enablement workshops with technical sales teams.',
      'Support complex migrations for Fortune 500 clients, with zero critical incidents reported in the CV.',
      'Connect Expert Labs services to customer business objectives and strategic IT goals.'
    ]
  },
  {
    dates: 'JAN 2022 — AUG 2024', role: 'Mainframe Business Analyst', company: 'Nissan Regional Business Services', location: 'Budapest, Hungary',
    intro: 'A bridge between business teams and the technical realities of core mainframe applications.',
    points: [
      'Supported ADABAS/Natural applications for core processes across European operations.',
      'Led application rediscovery spanning JCL, Natural, Adabas and TSO/ISPF; documented system architectures and translated specifications into requirements.',
      'Introduced standardized documentation processes to improve accuracy.',
      'Facilitated stakeholder alignment, requirement gathering and solution design across business and IT.'
    ]
  },
  {
    dates: 'SEP 2021 — JAN 2022', role: 'z/OS System Programmer', company: 'Kyndryl', location: 'Székesfehérvár, Hungary',
    intro: 'Operational control, incident escalation and product lifecycle support during a major organizational transition.',
    points: [
      'Maintained z/OS systems and subsystems through TSO/ISPF during the IBM spinoff.',
      'Acted as the first escalation point for critical issues; maintained 99.9% uptime across production environments.',
      'Managed IBM and third-party products including upgrades, deployments, patching, migration planning and troubleshooting.',
      'Implemented changes following ITIL best practices while preserving system stability.'
    ]
  },
  {
    dates: 'JUN 2018 — SEP 2021', role: 'z/OS System Programmer', company: 'IBM Global Technology Services', location: 'Székesfehérvár, Hungary',
    intro: 'Foundation in the operation of high-availability, mission-critical mainframe workloads.',
    points: [
      'Managed z/OS systems and subsystems with TSO/ISPF to support availability and performance.',
      'Administered environments supporting applications with 24/7 availability requirements.',
      'Handled the lifecycle of IBM, BMC, Broadcom and Rocket Software products across evaluation, upgrades, deployments, migrations, patching and troubleshooting.',
      'Coordinated with global teams to resolve complex technical problems and maintain operational health.'
    ]
  }
];

const skillGroups = [
  { icon: Terminal, title: 'IBM Z & z/OS', desc: 'Enterprise mainframe operations', tags: ['z/OS', 'TSO/ISPF', 'System Programming', 'IBM Z Products'] },
  { icon: Layers3, title: 'Legacy application landscape', desc: 'Understanding systems end-to-end', tags: ['JCL', 'ADABAS', 'Natural', 'Performance Analysis'] },
  { icon: Workflow, title: 'Solution delivery', desc: 'From deployment to adoption', tags: ['Installation & Upgrades', 'Migration Support', 'Technical Enablement', 'Workshop Facilitation'] },
  { icon: Network, title: 'Business & architecture', desc: 'Turning complexity into alignment', tags: ['Business Analysis', 'Requirements', 'Solution Architecture', 'Service Delivery'] }
];

const certifications = [
  { title: 'Mainframe Specialist — z/OS', level: 'Expert 2.5', org: 'IBM' },
  { title: 'Mainframe Security — RACF', level: 'Expert 2.5', org: 'IBM' },
  { title: 'Mainframe Production Scheduler', level: 'IBM Z Workload Scheduler · Scheduling Expert', org: 'IBM' }
];

const recommendations = [
  {
    quote: 'He excels at analyzing complex mainframe applications and business processes, coordinating effectively between Business and IT, and rapidly adopting technologies including Natural, PlantUML, AI tools, z/OS, zTools, and Zowe.',
    source: 'Previous Technical Lead', company: 'Nissan'
  },
  {
    quote: 'Norbert has a holistic understanding of mainframe components and the broader IBM Z product landscape, and translates that knowledge effectively for internal teams and clients.',
    source: 'Previous Director', company: 'IBM'
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#experience'], ['Credentials', '#credentials'], ['Contact', '#contact']];
  return <header className="header">
    <a className="brand" href="#top" aria-label="Norbert Rédei home"><span className="brand-mark">NR<span>.</span></span><span className="brand-label">TECHNICAL CONSULTANT</span></a>
    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label, href]) => <a key={label} onClick={() => setOpen(false)} href={href}>{label}</a>)}
      <a className="nav-cta" href={cv} target="_blank" rel="noreferrer">View CV <ArrowUpRight size={15}/></a>
    </nav>
  </header>
}

function CodePanel() {
  return <div className="terminal-panel" aria-label="Mainframe capability summary">
    <div className="terminal-top"><div className="window-dots"><i/><i/><i/></div><span>PROFILE / SYSTEM CONTEXT</span><span className="terminal-status"><span/> OPERATIONAL</span></div>
    <div className="terminal-body">
      <div className="terminal-kicker">// TECHNICAL PROFILE</div>
      <div className="terminal-title">Enterprise systems.<br/><em>Business clarity.</em></div>
      <div className="terminal-rule" />
      <div className="term-row"><span>PLATFORM</span><b>IBM Z · z/OS</b></div>
      <div className="term-row"><span>INTERFACE</span><b>TSO / ISPF</b></div>
      <div className="term-row"><span>FOCUS</span><b>Delivery · Migration · Enablement</b></div>
      <div className="term-row"><span>APPROACH</span><b>Reliable by design</b></div>
      <div className="terminal-bottom"><span className="terminal-pulse"/> A calm pair of hands for complex systems</div>
    </div>
    <div className="terminal-foot"><span>IBM Z / MAINFRAME SERVICES</span><span>50°03' N&nbsp; 19°56' E</span></div>
  </div>
}

function SectionHead({ eyebrow, title, children, number }) {
  return <div className="section-head"><div><div className="eyebrow"><span>{number}</span>{eyebrow}</div><h2>{title}</h2>{children && <p>{children}</p>}</div><div className="head-line"/></div>
}

function App() {
  const [expanded, setExpanded] = useState(0);
  return <>
    <Header/>
    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="availability"><span/> BASED IN KRAKÓW, POLAND <span className="avail-divider">/</span> OPEN TO MEANINGFUL CHALLENGES</div>
          <p className="hero-overline">IBM Z · z/OS · ENTERPRISE SOLUTIONS</p>
          <h1>Making complex<br/>systems <span>work better.</span></h1>
          <p className="hero-summary">I'm <strong>Norbert Ábel Rédei</strong> — a mainframe specialist focused on IBM Z solution delivery, z/OS environments, and the people and business outcomes behind the technology.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">Explore my experience <ArrowDownRight size={17}/></a><a className="button button-secondary" href={cv} target="_blank" rel="noreferrer"><FileDown size={17}/> Download CV</a></div>
          <div className="hero-socials"><a href="https://www.linkedin.com/in/norbert-redei" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a><a href="https://www.credly.com/users/norbert-redei" target="_blank" rel="noreferrer"><Award size={16}/> Certifications <ArrowUpRight size={13}/></a><a href="mailto:redeinorbi@gmail.com"><Mail size={16}/> Email <ArrowUpRight size={13}/></a></div>
        </div>
        <div className="hero-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-dot orb-dot-a"/><div className="orb-dot orb-dot-b"/><div className="hero-index">01 <span>/ PROFILE</span></div><CodePanel/><div className="visual-caption"><span>FIG. 01</span> Systems thinking meets service delivery</div></div>
        <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>BUILT ON EXPERIENCE, NOT HYPE</span></div>
      </section>

      <section className="stat-strip"><div className="wrap stats">
        <div className="stat"><strong>8<span>+</span></strong><div><b>Years in IT</b><small>Progressive mainframe experience</small></div></div>
        <div className="stat"><strong>4</strong><div><b>Core career roles</b><small>From operations to solution delivery</small></div></div>
        <div className="stat"><strong>24<span>/7</span></strong><div><b>Critical environments</b><small>Supporting always-on workloads</small></div></div>
        <div className="stat"><strong>2</strong><div><b>Languages</b><small>Hungarian native · English C1</small></div></div>
      </div></section>

      <section className="section wrap about-section" id="about">
        <SectionHead number="01" eyebrow="A LITTLE CONTEXT" title={<>Technology is the work.<br/><span>Trust is the outcome.</span></>}/>
        <div className="about-grid"><div className="about-lead"><p className="lead-paragraph">I work where enterprise technology gets real: production systems, complex deployments, migration planning, and the conversations that turn technical requirements into business value.</p><p>My background spans IBM, Kyndryl, Nissan Regional Business Services and IBM Technology Expert Labs. I've moved between hands-on z/OS operations, mainframe business analysis and client-facing solution delivery—so I can work across technical detail and the bigger picture.</p><p>Outside the technology stack, serving as an elected city council member strengthened the communication, negotiation and stakeholder skills I bring to every engagement.</p><a className="text-link" href="#experience">See how that experience adds up <ArrowRight size={16}/></a></div>
          <div className="principles"><div className="principle"><span className="principle-no">01</span><div><h3>Operate with care</h3><p>Stability and continuity matter. I approach production changes with discipline and a focus on minimizing disruption.</p></div></div><div className="principle"><span className="principle-no">02</span><div><h3>Make complexity legible</h3><p>Rediscovery, documentation and clear requirements help teams make better decisions about systems they depend on.</p></div></div><div className="principle"><span className="principle-no">03</span><div><h3>Bring people with you</h3><p>Technical enablement and practical communication turn a delivered solution into something teams can use confidently.</p></div></div></div>
        </div>
      </section>

      <section className="section expertise-section" id="expertise"><div className="wrap">
        <SectionHead number="02" eyebrow="WHERE I ADD VALUE" title={<>A practical mix of depth<br/><span>and perspective.</span></>}><span>Focused on the systems enterprises rely on, with the ability to connect platform detail to real operational and business needs.</span></SectionHead>
        <div className="skill-grid">{skillGroups.map((g, i) => {const Icon = g.icon; return <article className="skill-card" key={g.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={20}/></span><span className="skill-index">0{i+1}</span></div><h3>{g.title}</h3><p>{g.desc}</p><div className="tag-list">{g.tags.map(t => <span key={t}>{t}</span>)}</div></article>})}</div>
        <div className="platform-band"><div><span className="band-label">TECHNOLOGY LANDSCAPE</span><p>Hands-on familiarity across IBM and third-party ISV products</p></div><div className="platform-logos"><span>IBM Z</span><i/><span>BMC</span><i/><span>BROADCOM</span><i/><span>ROCKET SOFTWARE</span></div></div>
      </div></section>

      <section className="section wrap experience-section" id="experience">
        <SectionHead number="03" eyebrow="CAREER TIMELINE" title={<>Built in production.<br/><span>Grown through delivery.</span></>}><span>A progression from core z/OS operations to analysis, migration support and client-facing solution delivery.</span></SectionHead>
        <div className="experience-layout"><div className="timeline-intro"><div className="timeline-marker"><span/></div><p className="mono-label">2018 — PRESENT</p><h3>One platform.<br/>Multiple perspectives.</h3><p>Each chapter added a different lens: operating critical infrastructure, rediscovering complex applications, then helping enterprise clients deploy and adopt solutions.</p><a href={cv} className="text-link" target="_blank" rel="noreferrer">Full CV <ArrowUpRight size={15}/></a></div>
          <div className="timeline">{experience.map((job, i) => <article className={'job ' + (expanded === i ? 'job-expanded' : '')} key={job.role + job.company}><button className="job-toggle" onClick={() => setExpanded(expanded === i ? -1 : i)} aria-expanded={expanded === i}><span className="job-index">0{i+1}</span><span className="job-main"><span className="job-dates">{job.dates} {job.current && <em>CURRENT</em>}</span><strong>{job.role}</strong><span className="job-company">{job.company} <i>·</i> {job.location}</span></span><span className="job-chevron">{expanded === i ? <X size={18}/> : <ChevronDown size={19}/>}</span></button>{expanded === i && <div className="job-detail"><p className="job-intro">{job.intro}</p><ul>{job.points.map((point, j) => <li key={j}>{point}</li>)}</ul></div>}</article>)}</div>
        </div>
      </section>

      <section className="section credentials-section" id="credentials"><div className="wrap">
        <SectionHead number="04" eyebrow="CREDENTIALS & LEARNING" title={<>A foundation in the platform.<br/><span>A habit of learning.</span></>}/>
        <div className="credentials-grid"><div className="cert-column"><div className="subsection-title"><Award size={18}/><span>IBM CERTIFICATIONS</span></div>{certifications.map((c, i) => <div className="cert-row" key={c.title}><div className="cert-badge"><ShieldCheck size={21}/></div><div className="cert-info"><h3>{c.title}</h3><p>{c.level}</p><span>{c.org}</span></div><span className="cert-num">0{i+1}</span></div>)}<a className="text-link" href="https://www.credly.com/users/norbert-redei" target="_blank" rel="noreferrer">View full certification portfolio <ArrowUpRight size={15}/></a></div>
          <div className="education-column"><div className="subsection-title"><GraduationCap size={18}/><span>EDUCATION</span></div><div className="education-card"><span className="education-date">EXPECTED 2027</span><h3>BA in English / Business Communication</h3><p>Fully remote program · In progress</p><div className="education-icon"><GraduationCap size={24}/></div></div><div className="education-card education-card-muted"><span className="education-date">2017</span><h3>Certified IT System Administrator</h3><p>Széchenyi István Műszaki Technikum<br/>Székesfehérvár SZC, Hungary</p><div className="education-icon"><Code2 size={22}/></div></div><div className="language-block"><span className="subsection-title"><Globe2 size={17}/> LANGUAGES</span><div className="language-row"><span>Hungarian</span><b>Native</b><div className="lang-track"><i style={{width:'100%'}}/></div></div><div className="language-row"><span>English</span><b>C1 · Advanced</b><div className="lang-track"><i style={{width:'83%'}}/></div></div></div></div>
        </div>
      </div></section>

      <section className="section wrap leadership-section"><SectionHead number="05" eyebrow="LEADERSHIP & COMMUNITY" title={<>Leadership beyond<br/><span>the technology stack.</span></>}/><div className="leadership-card"><div className="leadership-symbol"><Users size={26}/></div><div className="leadership-main"><span className="job-dates">OCT 2022 — SEP 2024</span><h3>Elected City Council Member</h3><p className="leadership-org">Székesfehérvár City Council · Hungary</p><p>Represented constituents in decisions on urban development, public services and community programs serving 95,000+ residents. Served on municipal committees, took part in policy and budget discussions, organized community and charity initiatives, and facilitated dialogue between citizens and officials.</p><div className="leadership-tags"><span>Stakeholder management</span><span>Public communication</span><span>Negotiation</span><span>Community engagement</span></div></div><div className="leadership-note"><Sparkles size={17}/><span>A different context.<br/>Transferable skills.</span></div></div></section>

      <section className="section recommendations-section"><div className="wrap"><SectionHead number="06" eyebrow="WHAT COLLEAGUES SAY" title={<>Good work travels<br/><span>through people.</span></>}/><div className="quotes-grid">{recommendations.map((r, i) => <figure className="quote-card" key={r.company}><div className="quote-mark">“</div><blockquote>{r.quote}</blockquote><figcaption><span className="quote-avatar">{r.company === 'IBM' ? 'I' : 'N'}</span><span><b>{r.source}</b><small>{r.company}</small></span><span className="quote-num">0{i+1}</span></figcaption></figure>)}</div><p className="quote-note">Excerpted from recommendations included in my CV.</p></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="contact-copy"><div className="eyebrow"><span>07</span> START A CONVERSATION</div><h2>Let's make the<br/><span>complex manageable.</span></h2><p>Whether it is IBM Z solution delivery, z/OS migration support, enablement, or bridging business and technology, I'd be glad to connect.</p><a className="button button-primary" href="mailto:redeinorbi@gmail.com">Get in touch <ArrowUpRight size={17}/></a></div><div className="contact-card"><div className="contact-card-top"><span>CONTACT DETAILS</span><ArrowUpRight size={18}/></div><a href="mailto:redeinorbi@gmail.com"><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small><b>redeinorbi@gmail.com</b></span><ArrowUpRight className="contact-arrow" size={15}/></a><a href="https://www.linkedin.com/in/norbert-redei" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18}/></span><span><small>LINKEDIN</small><b>norbert-redei</b></span><ArrowUpRight className="contact-arrow" size={15}/></a><a href="https://www.credly.com/users/norbert-redei" target="_blank" rel="noreferrer"><span className="contact-icon"><Award size={18}/></span><span><small>CREDENTIALS</small><b>Credly profile</b></span><ArrowUpRight className="contact-arrow" size={15}/></a><div className="contact-location"><MapPin size={16}/><span>Kraków, Poland</span><span className="location-status"><i/> LOCAL TIME · CET/CEST</span></div></div></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#top"><span className="brand-mark">NR<span>.</span></span></a><span>© {new Date().getFullYear()} Norbert Ábel Rédei</span><span>IBM Z · z/OS · SOLUTION DELIVERY</span><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="wrap footer-note">Designed to reflect the work: clear, considered, and built to last.</div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
