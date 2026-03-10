'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
Mountain,
ShieldCheck,
Wand2,
FileText,
Search,
Sparkles,
ChevronRight,
KeyRound,
} from 'lucide-react';

type Project = {
id: string;
title: string;
subtitle: string;
icon: React.ElementType;
tags: string[];
problem: string;
solution: string;
impact: string[];
stack: string[];
gradient: string;
};

function classNames(...xs: Array<string | false | null | undefined>) {
return xs.filter(Boolean).join(' ');
}

function Pill({ children }: { children: React.ReactNode }) {
return (
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
{children}
</span>
);
}

function ValueCard({
eyebrow,
title,
desc,
}: {
eyebrow: string;
title: string;
desc: string;
}) {
return (
<div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
<div className="text-[11px] tracking-[0.28em] uppercase text-white/55">
{eyebrow}
</div>
<div className="mt-3 text-2xl font-semibold tracking-tight text-white">
{title}
</div>
<div className="mt-2 text-sm leading-relaxed text-white/65">{desc}</div>
</div>
);
}

export default function Page() {
const PROJECTS: Project[] = useMemo(
() => [
// ✅ 1) Clarity Gate
{
id: 'clarity-gate',
title: 'Clarity Gate (US & SG)',
subtitle: 'Visitor Data Cleaning & Validation',
icon: ShieldCheck,
tags: [
'Validation-first',
'Data Quality',
'Security (Accurate, Complete, Compliant)',
],
problem:
'Visitor submissions frequently contained incomplete or inconsistent data, creating delays in server delivery workflows and repeated clarification cycles across regional data centers.',
solution:
'Designed and developed a validation-first data gateway that enforces structured data rules before submission using Python and Streamlit.',
impact: [
' Built with Python, Pandas and Streamlit',
' Reduced manual validation workload by 98%',
' Improved compliance and data quality governance',
],
stack: [
'Built with Streamlit + Python, using Pandas for data cleaning and OpenPyXL for preserving + generating a styled multi-sheet Excel report, with rule-based (GOFAI) validation and Singapore-timezone aware date logic (3PM as cut off time, exclude weekends).',
'Frontend(UI Web Interaction): Streamlit',
'Backend(Logic/Processing): Python (Validation & Transformation Engine)',
'Data Processing: Pandas Data Pipeline',
'Export/Reporting: OpenPyXL Styled Excel Export, Multi-sheet preservation',
'Workflow / Control: Rule-Based (GOFAI-style)',
'Governance: Data Integrity Rules((ID/PR/expiry/mandatory fields)), Duplicate detection, Highlight Red',
'Date Calculator / Local Time',
],
gradient: 'from-slate-500/15 via-zinc-500/10 to-transparent',
},

// ✅ 2) Sherlock
{
id: 'sherlock',
title: 'Sherlock',
subtitle: 'Vendor Roster Change Detection',
icon: Search,
tags: ['Excel Compare', 'Automation'],
problem: 'Comparing roster versions manually was slow and error-prone.',
solution:
'Designed and developed a Python-based comparison engine to automatically detect personnel additions and removals between datasets.',
impact: ['Improved change detection accuracy', 'Reduced manual comparison effort'],
stack: [
'Frontend(UI Web Interaction): Streamlit',
'Backend(Logic/Processing):Python(Comparison Engine)',
'Data Processing: Pandas Data Pipeline',
'Algorithm: Set-Based Diff Algorithm',
'Reporing/Export: OpenPyXL Styled Multi-Sheet Excel Export (Summary + Detailed Changes)',
],
gradient: 'from-amber-500/15 via-orange-500/10 to-transparent',
},

// ✅ 3) GateKey AI (UPDATED to reflect your Streamlit format-converter portal tool)
{
id: 'gatekey-ai',
title: 'GateKey AI',
subtitle: 'Multi-DC Format Conversion Gateway for Portal Uploads',
icon: KeyRound,
tags: ['Format Conversion', 'Template Compliance', 'Portal-Ready Export'],
problem:
'Different data centers require different upload formats, forcing teams to repeatedly reformat the same datasets.',
solution:
'Designed and developed a centralized conversion system that transforms one dataset into multiple portal-ready upload formats.',
impact: [
'Eliminated repetitive manual formatting work across multiple DC platforms',
'Improved portal acceptance rate through template-validated outputs',
'Converts one dataset into multiple platform-specific upload formats',
],
stack: [
'Frontend(UI Layer): Streamlit web interface (upload, target selection, presets, download)',
'Backend(Orchestration): Python conversion router (per-DC transformers + workflow control)',
'Data Processing: Pandas transformation pipeline (mapping, filtering, sanitization)',
'Template & Compliance: Header enforcement from portal templates (DC_X + DC_Y)',
'Export Engine: XlsxWriter for Excel generation + OpenPyXL for template-preserving outputs (DC_X)',
'Delivery: Portal-ready Excel/CSV outputs (including batch split for DC_Z limits & strict DC_Y CSV)',
],
gradient: 'from-violet-500/15 via-fuchsia-500/10 to-transparent',
},

// ✅ 4) FileSmith AI
{
id: 'filesmith-ai',
title: 'FileSmith AI',
subtitle: 'PDF Filename Decryption & Standardization',
icon: FileText,
tags: ['PDF Parsing', 'Standard Naming'],
problem: 'Encrypted filenames created confusion and tracking difficulties.',
solution:
'Designed and developed an automated OCR(Optical Character Recognition) extraction engine that decodes encrypted filenames and enforces a structured, standardized naming schema across regions.',
impact: ['Instant clarity in file management', 'Improved traceability across data centres'],
stack: [
'Frontend(UI Web Interaction): Streamlit',
'Backend(Logic/Processing):Python Document Processing Engine',
'Extraction: OCR / PDF Text Extraction Pipeline',
'Naming / Governance(Standardization Rules):Converts encrypted name into YYYY.MM.DD-YYYY.MM.DD_DC_VISITOR_QR.pdf',
'Output:File Output Generator (Batch rename + export) Individual renamed PDF or merged pdf',
],
gradient: 'from-indigo-500/15 via-sky-500/10 to-transparent',
},

// ✅ 5) Access Link Hub
{
id: 'access-link-hub',
title: 'Access Link Hub',
subtitle:
'Effective Information Transmission | Rule Based Gmail Automation for specific DC',
icon: Wand2,
tags: ['Apps Script', 'Automation'],
problem:
'Manual extraction and forwarding of QR access links from approval emails was repetitive and time-consuming. (time-sensitive QR code links that refreshed every 30 seconds)',
solution:
'Designed and developed a Gmail Automation System that transforms manual QR Link extraction and standardized draft generation for bulk sending.',
impact: [
'Core Architecture',
'1️⃣ makeVisitorDrafts()',
'2️⃣ cleanup()',
'3️⃣ sendAllVisitorDrafts()',
'Removed repetitive manual processing across high volume batches',
'Improved operational reliability and traceability',
],
stack: [
'Frontend: Gmail UI (User-facing operational), Gmail Labels as workflow state trigger',
'Backend: Google Apps Script (Runs automation logic, Executes by manual trigger functions, Handles thread scanning and draft generation)',
'Integration: Gmail App API (Reading threads, extracting email body, creating and sending drafts, removing labels, marking threads as read)',
'Logic: JavaScript (Regex parsing (pattern matching and extracting specific information from text), Email normalization, Subject generation, Workflow state management (labels))',
],
gradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
},
],
[]
);

const SKILLS = useMemo(
() => [
'Python','UX Design','Streamlit',
'SQL','Excel',
'Data Visualization (Tableau, Power BI)',
'Dashboard Development',
'Workflow Automation',
'Operational Analytics',
'System Analysis and Design',
'Advanced Business Analysis and Design',
'Business Intelligence Development',
'Asset and Database Governance',
'Stakeholder Management', 'Information Architecture',
'Native in English and Chinese (HSK Chinese Proficiency Test Highest Level: HSK6 (High Distinction))'],
[]
);

{/*
const VALUES = useMemo(
() => [
{
eyebrow: 'Mission',
title: 'Inspire Creativity, Enrich Life',
desc: 'Curiosity with taste — explore widely, synthesize deeply, build with intent.',
},
{
eyebrow: 'Growth',
title: 'Grow Together, Keep Learning',
desc: 'Iterate fast, reflect often, and compound capabilities through shared progress.',
},
{
eyebrow: 'Work Style',
title: 'Seek Truth and Be Pragmatic',
desc: 'Evidence-led decisions, clear outputs, and calm execution under constraints.',
},
],
[]
);
*/}

const [activeId, setActiveId] = useState(PROJECTS[0].id);
const activeProject = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

return (
<div className="min-h-screen bg-transparent text-white">
{/* Background */}
<div className="fixed inset-0 -z-10">
<div
className="absolute inset-0 bg-center bg-cover"
style={{ backgroundImage: "url('/mountain.jpg')" }}
/>

{/* Softer overlay — more visible image */}
<div className="absolute inset-0 bg-black/55" />

{/* Subtle luxury vignette instead of heavy gradient */}
<div
className="absolute inset-0"
style={{
background:
"radial-gradient(1200px 600px at 50% 10%, rgba(0,0,0,0.2), transparent 60%), radial-gradient(1200px 800px at 50% 120%, rgba(0,0,0,0.5), transparent 70%)",
}}
/>
</div>

{/* Top Nav */}
<header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2 text-white">
<Mountain className="h-4 w-4" />
<span className="font-semibold tracking-wide">Esther</span>
</div>

<nav className="flex gap-6 text-[13px] text-white/70">
<a href="#skills" className="hover:text-white transition">
Skills
</a>

<a href="#projects" className="hover:text-white transition">
Business Intelligence Apps Developed
</a>
</nav>
</div>
</header>

<main className="mx-auto max-w-6xl px-6 pt-16 pb-24">
{/* Hero */}
<motion.section
initial={{ opacity: 0, y: 14 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.75 }}
className="relative"
>
{/* Profile Photo */}
<div className="absolute top-16 right-12 hidden lg:block">
  <img
    src="/profile.jpg"
    alt="Esther He"
    className="w-72 h-72 object-cover rounded-2xl border border-white/10 shadow-2xl"
  />
</div>
<div className="text-left">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[11px] tracking-[0.26em] uppercase text-white/70 backdrop-blur">
<Sparkles className="h-4 w-4" />
Esther's Portfolio
</div>

<div className="mt-10">
<h1 className="text-6xl font-semibold tracking-tight leading-[1.03] text-white sm:text-7xl">
Esther He{' '}
<span
className="inline-block align-middle text-5xl sm:text-6xl"
style={{
textShadow:
'0 0 18px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.12)',
}}
>
✨
</span>
</h1>

<div className="mt-5 text-xl sm:text-2xl font-medium text-white leading-snug">
Integrity • Perseverance • Resilience • Excellence
<br />
Bridging Digital Technology, Business, Finance and Engineering
</div>



<div className="mt-10 text-3xl sm:text-4xl font-medium text-white/65 leading-snug">
Leadership • Turning Data into Wisdom
</div>


</div>

<div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl">

<p className="text-white/75 leading-relaxed text-sm sm:text-base">
Esther is a Professional with nearly 10 years of experience across technical project coordination, stakeholder management, financial analysis and business intelligence. 
She has developed multiple Python applications that automates workflow and enhance operational efficiency in Infrastructure Team. 
With a strong track record in system analysis and data-driven decision making, Esther transforms operational data into actionable insights that support strategic planning and business performance. 
She is a self-motivated and adaptable professional who thrives in dynamic environments and enjoys contributing to innovative, high-growth organizations.
Passionate about leveraging analytical skills to provide insights that drive business success and solve problems. Good Team Player and Leader.
<br />
<br />
• Project Management, Stakeholder Management, Financial Analysis, Business Analysis and System Analysis
<br />
🌟 I am dedicated to empowering teams, advancing cutting-edge technologies, and
creating impactful solutions for complex challenges.
<br />
<br />
• Technical Skills: Business Intelligence, Excel, SQL, Power BI, Tableau, Python to deliver insights and transform complext workflow into systems.
<br />

🌟 My mission is to drive innovation at the intersection of data science, Artificial Intelligence, usability and infrastructure operations.
<br />
<br />
• Clarity Gate (US & SG)
<br />Built a validation-first data gateway to enforce structured data submission rules, reducing manual verification workload by **98%** and improving data integrity across regional data centers.
<br />
<br />
• Sherlock
<br />Built an automated roster comparison engine to enable instant detection of personnel changes between datasets and reducing manual verification cycles.
<br />
<br />
• Gatekey AI
<br />Built a multi-platform data conversion system that transforms a single source dataset into multiple platform-specific upload formats, significantly reducing repetitive manual formatting work.
<br />
<br />
• FileSmith AI
<br />Built automated document processing pipelines for extracting and standardizing key information from PDF documents, improving traceability and operational clarity across document workflows.
<br />
<br />
• Access Link Hub
<br />Built automation scripts to streamline operational email workflows, reducing manual processing for high-volume operational tasks.

</p>
</div>

{/*
<div className="mt-12 grid gap-6 lg:grid-cols-3">
{VALUES.map((v) => (
<ValueCard key={v.title} eyebrow={v.eyebrow} title={v.title} desc={v.desc} />
))}
</div>
</div>
*/}
</div>
</motion.section>

{/* Skills */}
<section id="skills" className="mt-20">
<h2 className="text-3xl font-semibold text-white">Skills</h2>

<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
<div className="flex flex-wrap gap-2">
{SKILLS.map((x) => (
<Pill key={x}>{x}</Pill>
))}
</div>
</div>
</section>

{/* Business Intelligence Apps Developed */}
<section id="projects" className="mt-20">
<h2 className="text-3xl font-semibold text-white">
Business Intelligence Apps Developed
</h2>

<div className="mt-8 grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-4 space-y-3">
{PROJECTS.map((p) => {
const Icon = p.icon;
const isActive = p.id === activeId;
return (
<button
key={p.id}
onClick={() => setActiveId(p.id)}
className={classNames(
'w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition backdrop-blur-xl',
isActive ? 'bg-white/10' : 'hover:bg-white/10'
)}
>
<div className="flex items-center gap-3">
<Icon className="h-4 w-4 text-white/80" />
<div>
<div className="text-white font-medium">{p.title}</div>
<div className="text-xs text-white/60">{p.subtitle}</div>
</div>
<ChevronRight className="ml-auto h-4 w-4 text-white/40" />
</div>
</button>
);
})}
</div>

<motion.div
key={activeProject.id}
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.35 }}
className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
>
<h3 className="text-xl font-semibold text-white">{activeProject.title}</h3>
<p className="mt-4 text-white/70">{activeProject.problem}</p>
<p className="mt-4 text-white/80 font-medium">{activeProject.solution}</p>

<div className="mt-6 flex flex-wrap gap-2">
{activeProject.tags.map((t) => (
<Pill key={t}>{t}</Pill>
))}
</div>

<ul className="mt-6 space-y-2 text-sm text-white/70">
{activeProject.impact.map((i) => (
<li key={i}>• {i}</li>
))}
</ul>

<div className="mt-7 border-t border-white/10 pt-6">
<div className="text-[11px] tracking-[0.28em] uppercase text-white/55">
Stack
</div>
<div className="mt-3 flex flex-wrap gap-2">
{activeProject.stack.map((s) => (
<Pill key={s}>{s}</Pill>
))}
</div>
</div>
</motion.div>
</div>
</section>
</main>
</div>
);
}

