# 🧾 Product Requirements Document (PRD)
## Tanbir Alam — Personal Portfolio Website

### 1. Overview

**Product Name:** Tanbir Alam Portfolio  
**Version:** 1.0.0  
**Type:** Personal Website / Developer Portfolio  
**Owner:** Tanbir Alam (Full Stack Developer)  
**Last Updated:** November 2025  

---

### 2. Purpose

The goal of this portfolio website is to present **Tanbir Alam** as a skilled and professional **Full Stack Developer** by showcasing his **projects, skills, experience, and journey** in a visually appealing, interactive, and credible way.  

It should serve as a digital identity — helping recruiters, clients, and collaborators easily understand who he is, what he can do, and how to contact him.  

---

### 3. Objectives

- Present Tanbir’s **technical skillset** and **unique story** (non-tech to tech journey).  
- Showcase **real-world projects** with live demos and GitHub links.  
- Highlight **work experience** and **achievements**.  
- Provide an easy way to **contact** or collaborate.  
- Establish an **SEO-optimized**, **fast**, and **modern** web presence.  
- Reflect **design maturity** and **developer personality**.  

---

### 4. Target Audience

| Audience Type | Purpose |
|----------------|----------|
| Recruiters / Hiring Managers | Evaluate Tanbir’s skills and projects for hiring or freelance work. |
| Clients / Businesses | Understand capability for potential collaborations. |
| Fellow Developers | Explore open-source contributions or projects. |
| General Visitors | Learn about Tanbir’s journey, philosophy, and tech interests. |

---

### 5. Scope

The project will be a **single-developer web application**, built with modern frontend technologies (Next.js + TailwindCSS), deployed on **Vercel**, and integrated with **GitHub** and optional email API for the contact form.

**Out of scope (for now):**
- User authentication or admin dashboard.
- Blog management system (can be added in version 2.0).
- CMS integration (optional future enhancement).

---

### 6. Core Features

#### 6.1 Home (Hero Section)
- Display name, title, and tagline:  
  “Hi, I’m Tanbir Alam — a Full Stack Developer who builds scalable web apps and intuitive user interfaces.”
- Include call-to-action buttons:  
  - “View Projects” → Projects section  
  - “Hire Me” → Contact section
- Optional: Animated tech logos (React, Node, AWS) using Framer Motion.

#### 6.2 About Me
- Short bio highlighting journey from Philosophy Honours to Full Stack Developer.  
- Mention learning path, core motivation, and coding philosophy.  
- Add profile photo or animated illustration.  
- Include **“Download Resume”** button.  

#### 6.3 Skills
- Categorized by domain:
  - **Frontend:** HTML, CSS, JavaScript, React, Next.js, TailwindCSS  
  - **Backend:** Node.js, Express.js  
  - **Database:** MongoDB, PostgreSQL  
  - **Cloud & DevOps:** AWS, GCP, Docker  
  - **Tools:** Git, VS Code, Postman
- Visual representation (icons or bars).  

#### 6.4 Projects
- Each project displayed in a responsive grid/card format.
- Each project includes:
  - Thumbnail / Screenshot
  - Title + short description
  - Tech stack used
  - Links: [Live Demo] [GitHub]
- Highlight these six:
  1. **Imagitor** – Client-side image resizer/converter  
  2. **ReacUI** – React UI component library  
  3. **E-commerce Platform** – Full-stack online store  
  4. **Authentication System** – Secure user auth system  
  5. **Nidhi Banking System** – Professional backend project  
  6. **Alumni Management System** – Full system built solo  

#### 6.5 Experience
- Timeline-based or card-based structure.
- Include:
  - Company/Project name
  - Duration
  - Responsibilities
  - Technologies used
  - Achievements
- Example:  
  **Software Developer – XYZ Company (2023-2024)**  
  Built and managed Nidhi Banking and Alumni Management Systems independently.

#### 6.6 Contact
- Simple and functional contact form: Name, Email, Message.  
- Integrate via **EmailJS** or backend API (Node.js endpoint).  
- Display social media icons:
  - GitHub  
  - LinkedIn  
  - Twitter  
  - Email link (mailto:)  
- Include small message:  
  “Let’s build something amazing together.”

#### 6.7 Footer
- Simple and minimal:
© 2025 Tanbir Alam. Built with ❤️ using Next.js and TailwindCSS.


- Add links to GitHub and LinkedIn.

---

### 7. Additional Features (Optional / Phase 2)
- **Dark Mode Toggle** using Tailwind themes.
- **Blog Section** for tech posts or tutorials.
- **Analytics Integration** (Vercel Analytics / Google Analytics).
- **Open Graph & SEO Optimization**.
- **3D Hero Section / Animation** (using Three.js or Lottie).

---

### 8. Design Guidelines

#### 8.1 UI/UX Principles
- Clean, minimal, and modern.
- Developer-centric visual theme (black/white with accent gradients).
- Consistent spacing and readable typography.
- Smooth animations using **Framer Motion**.
- Mobile-first responsive design.

#### 8.2 Color Palette (Example)
| Element | Color | Use |
|----------|--------|-----|
| Primary Accent | #6366F1 (Indigo) | Buttons, links |
| Secondary Accent | #22D3EE (Cyan) | Highlights |
| Background | #0F172A (Dark) / #FFFFFF (Light) | Page background |
| Text | #E2E8F0 (Light Mode) / #1E293B (Dark Mode) | Typography |

#### 8.3 Typography
- **Primary Font:** Inter / Poppins  
- **Code Snippets (if used):** Fira Code  
- Font hierarchy:  
- Headings: bold and large  
- Body: medium weight  
- Captions: small & subtle  

---

### 9. Technical Specifications

| Category | Technology | Description |
|-----------|-------------|-------------|
| Framework | **Next.js 14** | Server-side rendering, SEO support |
| Styling | **TailwindCSS** | Utility-first design |
| Animations | **Framer Motion** | Smooth transitions and micro-interactions |
| Forms | **EmailJS / Node API** | Contact form integration |
| Hosting | **Vercel** | Free deployment and CI/CD |
| Version Control | **Git + GitHub** | Source code management |
| Optional DB | **MongoDB Atlas** | For storing contact messages |
| Analytics | **Vercel Analytics / Google Analytics** | Site tracking |

### 10. Folder Structure (Proposed)

```markdown
/portfolio
│
├── /src
│ ├── /components
│ ├── /pages
│ │ ├── index.js # Home page
│ │ ├── about.js # About section
│ │ ├── projects.js # Projects section
│ │ ├── contact.js # Contact form
│ ├── /styles
│ ├── /assets
│ └── /utils
│
├── package.json
├── tailwind.config.js
└── README.md
```


---

### 11. Performance & SEO Requirements

| Area | Requirement |
|------|--------------|
| Page Load Speed | < 2 seconds |
| Lighthouse Score | 90+ for all categories |
| SEO | Meta tags, title, description, Open Graph |
| Accessibility | Proper ARIA labels, alt tags |
| Responsiveness | Fully mobile + tablet + desktop friendly |

---

### 12. Milestones & Phases

| Phase | Description | Deliverables |
|--------|--------------|--------------|
| **Phase 1** | Wireframe & UI design | Figma mockups, color palette |
| **Phase 2** | Development setup | Next.js app structure, Tailwind config |
| **Phase 3** | Component building | Hero, About, Skills, Projects, Contact |
| **Phase 4** | Integration | Animations, SEO, contact form |
| **Phase 5** | Testing & Deployment | Responsive checks, deploy on Vercel |
| **Phase 6** | Enhancement (optional) | Blog section, analytics, dark mode |

---

### 13. Success Metrics

- Recruiters or clients can understand Tanbir’s profile in < 60 seconds.  
- Portfolio site loads under 2 seconds on mobile.  
- At least 90% Lighthouse performance score.  
- Contact form functioning properly.  
- At least 1 professional inquiry within the first month of launch.

---

### 14. Future Enhancements
- Add **case studies** for each project.  
- Integrate a **blog** for content marketing and SEO.  
- Add **3D interactive hero animation**.  
- Build **admin panel** to manage projects dynamically.

---

### 15. Risks & Mitigation
| Risk | Description | Mitigation |
|-------|--------------|-------------|
| Design overload | Too many effects may slow performance | Keep minimal, test load time |
| API Email failures | Contact form not working | Fallback to mailto: link |
| SEO gaps | Missing meta tags | Use Next.js Head component properly |
| Responsiveness | Layout breaks on small screens | Test with Chrome DevTools |

---

### 16. Deliverables

- Fully functional and responsive portfolio website.  
- SEO-optimized metadata.  
- All project links and assets integrated.  
- Hosted live URL on Vercel.  
- GitHub repository (public).

---

### 17. Summary

This PRD defines the complete plan for **Tanbir Alam’s Developer Portfolio Website** — including its goals, design principles, features, and technical specifications.  
Once implemented, this portfolio will represent Tanbir’s professional identity online and act as a showcase of both **technical expertise** and **creative presentation**.

---

**Author:** Tanbir Alam  
**Role:** Full Stack Developer  
**Email:** social.tanbir@gmail.com  
**Location:** Kolkata, India  
**Date:** November 2025
