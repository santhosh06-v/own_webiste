import React, { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "College CMS Website",
    type: "Website · PHP · MySQL",
    description: "A responsive college website with a content management workflow for pages, media and announcements.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    link: "https://gascjayankondam.ac.in/",
    icon: "bi-mortarboard"
  },
  {
    number: "02",
    title: "SareeÉ — E-commerce",
    type: "E-commerce · React · PHP",
    description: "A premium saree shopping experience with product collections, cart, checkout and admin-ready workflows.",
    tags: ["React", "PHP", "MySQL", "Razorpay"],
    link: "#contact",
    icon: "bi-bag"
  },
  {
    number: "03",
    title: "MedTrain",
    type: "Business Website",
    description: "Web development work for a training-focused business, with an emphasis on clear content and usability.",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    link: "https://med-train.com/",
    icon: "bi-briefcase"
  },
  {
    number: "04",
    title: "Property & Business Websites",
    type: "Freelance · Web Development",
    description: "Business websites built to present services, build trust and help customers get in touch.",
    tags: ["PHP", "MySQL", "Bootstrap", "Responsive UI"],
    link: "https://srivenkateshwaraproperties.in/",
    icon: "bi-buildings"
  }
];

const skills = [
  { name: "HTML5", level: "Strong", icon: "bi-filetype-html" },
  { name: "CSS3", level: "Strong", icon: "bi-filetype-css" },
  { name: "JavaScript", level: "Working knowledge", icon: "bi-filetype-js" },
  { name: "Bootstrap", level: "Strong", icon: "bi-bootstrap" },
  { name: "PHP", level: "Strong", icon: "bi-filetype-php" },
  { name: "MySQL & SQL", level: "Strong", icon: "bi-database" },
  { name: "Data Analysis", level: "Developing", icon: "bi-graph-up-arrow" },
  { name: "Excel", level: "Add your proficiency", icon: "bi-file-earmark-spreadsheet" },
  { name: "Power BI", level: "Add your proficiency", icon: "bi-bar-chart-line" },
  { name: "React", level: "Building with it", icon: "bi-code-slash" },
  { name: "Git & GitHub", level: "Working knowledge", icon: "bi-github" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-heading, .info-panel, .skill-card, .project-card, .cta-box, .contact-item, .contact-form"
    );

    elements.forEach((element) => element.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top site-nav">
        <div className="container">
         <a className="navbar-brand brand-mark" href="#home" onClick={closeMenu}>
  <span className="typing-name">Santhoshkumar</span></a>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation"
            aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              {["About", "Skills", "Projects", "Contact"].map(item => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
                </li>
              ))}
              <li className="nav-item">
                <a className="btn btn-outline-accent nav-cta" href="#contact" onClick={closeMenu}>Let's talk <i className="bi bi-arrow-up-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid" aria-hidden="true"></div><div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
          <div className="container position-relative">
            <div className="row align-items-center min-vh-100 py-5">
              <div className="col-lg-8">
                <div className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES</div>
                <p className="hero-kicker">Hello, I'm Santhosh</p>
                <h1>I build <span className="gradient-text">digital experiences</span><br className="d-none d-md-block"/> for the web.</h1>
                <p className="hero-copy">Web Developer & aspiring Data Analyst focused on building responsive web applications and turning data into useful insights using SQL and modern web technologies.</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a className="btn btn-accent btn-lg" href="#projects">Explore my work <i className="bi bi-arrow-down-right ms-2"></i></a>
                  <a className="btn btn-ghost btn-lg" href="#contact">Contact me</a>
                </div>
                <div className="hero-meta d-flex flex-wrap gap-4 mt-5">
                  <span><i className="bi bi-geo-alt"></i> Tamil Nadu, India</span>
                  <span><i className="bi bi-code-slash"></i> Web Development</span>
                  <span><i className="bi bi-bar-chart"></i> Data Analytics</span>
                  <span><i className="bi bi-globe2"></i> Tamil · English</span>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-flex justify-content-center">
                <div className="hero-orbit">
                  <div className="orbit-ring"></div>
                  <div className="orbit-core"><span>S</span><small>WEB<br/>DEVELOPER</small></div>
                  <i className="orbit-icon icon-code bi bi-code-slash"></i>
                  <i className="orbit-icon icon-database bi bi-database"></i>
                  <i className="orbit-icon icon-braces bi bi-braces"></i>
                </div>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section-pad">
          <div className="container">
            <div className="section-heading"><span className="section-label">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
            <div className="row g-5 align-items-start">
              <div className="col-lg-7">
                <p className="about-lead">I enjoy turning ideas into clean, functional and user-friendly websites.</p>
                <p className="body-copy">I'm a web developer with an MCA from SRM University and a background in Computer Science. I work across frontend interfaces and backend functionality, building websites that are responsive, easy to use and simple to maintain. I'm also developing my data analytics skills, with an interest in using SQL and data visualization to turn raw information into clear insights.</p>
                <p className="body-copy">My experience includes business websites, CMS-based projects and e-commerce development. I like learning new tools and improving the way I build for the web.</p>
                <a className="text-link" href="#contact">Have a project in mind? Let's connect <i className="bi bi-arrow-up-right"></i></a>
              </div>
              <div className="col-lg-5">
                <div className="info-panel">
                  <div className="info-row"><span>Education</span><strong>Master of Computer Applications (MCA)</strong></div>
                  <div className="info-row"><span>University</span><strong>SRM University, Chennai</strong></div>
                  <div className="info-row"><span>Focus</span><strong>Web Development & Data Analytics</strong></div>
                  <div className="info-row"><span>Based in</span><strong>Tamil Nadu, India</strong></div>
                  <div className="info-row"><span>Languages</span><strong>Tamil, English</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad section-muted">
          <div className="container">
            <div className="section-heading"><span className="section-label">02 / TOOLKIT</span><h2>Skills & <span className="gradient-text">technologies.</span></h2><p className="body-copy">Tools and skills across web development, databases and data analysis.</p></div>
            <div className="row g-3">
              {skills.map(skill => <div className="col-6 col-md-4 col-lg-3" key={skill.name}>
                <div className="skill-card"><i className={`bi ${skill.icon}`}></i><h3>{skill.name}</h3><p>{skill.level}</p></div>
              </div>)}
            </div>
            <div className="tools-line mt-4"><span>ALSO FAMILIAR WITH</span><p>jQuery <b>·</b> AOS <b>·</b> XAMPP <b>·</b> Visual Studio <b>·</b> Plesk <b>·</b> GitHub <b>·</b> Data Cleaning & Reporting</p></div>
          </div>
        </section>

        <section id="projects" className="section-pad">
          <div className="container">
            <div className="section-heading d-flex flex-wrap justify-content-between align-items-end gap-3"><div><span className="section-label">03 / SELECTED WORK</span><h2>Things I've <span className="gradient-text">worked on.</span></h2></div><span className="project-count">01 — 04 / PROJECTS</span></div>
            <div className="row g-4">
              {projects.map(project => <div className="col-md-6" key={project.number}>
                <article className="project-card">
                  <div className="project-top"><span>{project.number} / FEATURED PROJECT</span><i className={`bi ${project.icon}`}></i></div>
                  <div className="project-art"><div className="browser-bar"><span></span><span></span><span></span><b>{project.title.toLowerCase().replaceAll(" ", "-")}.com</b></div><div className="art-content"><div className="art-line wide"></div><div className="art-line"></div><div className="art-blocks"><span></span><span></span><span></span></div></div></div>
                  <div className="project-info"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="project-link">View project <i className="bi bi-arrow-up-right"></i></a></div>
                </article>
              </div>)}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container"><div className="cta-box"><span className="section-label">LET'S BUILD SOMETHING</span><h2>Have an idea? Let's make it <span className="gradient-text">happen.</span></h2><p>I'm open to web development roles, freelance projects and meaningful collaborations.</p><a href="#contact" className="btn btn-accent btn-lg">Start a conversation <i className="bi bi-arrow-up-right ms-2"></i></a></div></div>
        </section>

        <section id="contact" className="section-pad section-muted">
          <div className="container">
            <div className="section-heading"><span className="section-label">04 / CONTACT</span><h2>Let's connect.</h2><p className="body-copy">Have a role, project or opportunity? Send me a message.</p></div>
            <div className="row g-5">
              <div className="col-lg-5">
                <h3 className="contact-title">I'm just one message away.</h3>
                <p className="body-copy">Reach out and I'll get back to you as soon as I can.</p>
                <a className="contact-item" href="mailto:santhumar17@gmail.com"><i className="bi bi-envelope"></i><span><small>EMAIL</small>santhumar17@gmail.com</span><i className="bi bi-arrow-up-right ms-auto"></i></a>
                <a className="contact-item" href="www.linkedin.com/in/santhoshkumar-dataanalyst" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i><span><small>LINKEDIN</small>Connect with me</span><i className="bi bi-arrow-up-right ms-auto"></i></a>
                <a className="contact-item" href="https://github.com/santhosh06-v" target="_blank" rel="noreferrer"><i className="bi bi-github"></i><span><small>GITHUB</small>Explore my code</span><i className="bi bi-arrow-up-right ms-auto"></i></a>
              </div>
              
              <div className="col-lg-7">
                <form className="contact-form" onSubmit={e => { e.preventDefault(); const name=e.target.name.value; const email=e.target.email.value; const message=e.target.message.value; window.location.href=`mailto:santhumar17@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from "+name)}&body=${encodeURIComponent("From: "+name+" ("+email+")\n\n"+message)}`; }}>
                  <div className="row g-3"><div className="col-md-6"><label htmlFor="name">Your name</label><input id="name" name="name" className="form-control" placeholder="Enter your name" required /></div><div className="col-md-6"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" className="form-control" placeholder="" required /></div><div className="col-12"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" className="form-control" placeholder="Tell me about your project or opportunity..." required></textarea></div><div className="col-12"><button className="btn btn-accent" type="submit">Send message <i className="bi bi-send ms-2"></i></button><small className="form-note">This opens your email app with the message ready to send.</small></div></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container d-flex flex-wrap justify-content-between align-items-center gap-3"><a className="navbar-brand brand-mark" href="#home" onClick={closeMenu}>
  <span className="typing-name">Santhoshkumar</span></a><p>Designed & built by Santhosh · {new Date().getFullYear()}</p><a href="#home" className="back-top">BACK TO TOP <i className="bi bi-arrow-up"></i></a></div></footer>
    </div>
  );
}

export default App;