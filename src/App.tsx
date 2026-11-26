import { useState, type FormEvent } from "react";

const assets = "/assets";

const services = [
  {
    number: "01",
    title: "Diseño web",
    description:
      "Creamos diseños atractivos y funcionales que reflejan la identidad de tu marca. Cuidamos la estética y la experiencia del usuario para que tu sitio se vea bien en cualquier dispositivo.",
  },
  {
    number: "02",
    title: "Desarrollo Web",
    description:
      "Desarrollamos sitios rápidos, seguros y fáciles de administrar, hechos a la medida de lo que tu negocio necesita, desde un portafolio hasta una tienda en línea.",
  },
  {
    number: "03",
    title: "SEO y optimización",
    description:
      "Mejoramos tu visibilidad en Google y el rendimiento de tu sitio para que más personas te encuentren, y se conviertan en clientes.",
  },
];

const serviceOfferings = [
  {
    number: "01",
    title: "Diseño web",
    phrase: "Damos voz a la marca en un sitio que se sienta tuyo",
    points: [
      "Diseño de interfaces y experiencia de usuario (UX/UI).",
      "Diseño personalizado según la identidad de cada marca.",
      "Diseño adaptable a celulares, tablets y computadoras.",
      "Estructura y organización del contenido.",
    ],
  },
  {
    number: "02",
    title: "Desarrollo Web",
    phrase: "Lo construimos con cuidado, rápido y accesible",
    points: [
      "Programación y construcción del sitio.",
      "Implementación de funcionalidades e interacciones.",
      "Adaptación a diferentes dispositivos.",
      "Integración de formularios y herramientas externas.",
      "Mantenimiento y soporte técnico.",
    ],
  },
  {
    number: "03",
    title: "SEO y Optimización",
    phrase: "Para que las personas correctas lleguen a tu historia",
    points: [
      "Posicionamiento en motores de búsqueda.",
      "Investigación de palabras clave.",
      "Optimización de velocidad de carga.",
      "Optimización de contenido e imágenes.",
      "Mejoras de rendimiento y accesibilidad.",
    ],
  },
];

const projects = [
  {
    name: "Terra Alta",
    image: "/projects/terra-alta.png",
    href: "/proyectos/terra-alta",
    description:
      "Una experiencia digital para una agencia de viajes en México, diseñada para inspirar nuevas rutas y experiencias.",
  },
  {
    name: "Pausa Café",
    image: "/projects/pausa-cafe.png",
    href: "/proyectos/pausa-cafe",
    description:
      "Un espacio digital cálido y sensorial que convierte cada pausa en una experiencia memorable.",
  },
  {
    name: "Portafolio Ellen",
    image: "/projects/portafolio-ellen.png",
    href: "/proyectos/portafolio-ellen",
    description:
      "Un portafolio de diseño limpio y expresivo que pone el trabajo creativo en el centro.",
  },
];

const projectDetails = [
  {
    slug: "terra-alta",
    title: "TERRA ALTA",
    subtitle: "Agencia de viajes",
    client: "Rodolfo Perez",
    service: "Desarollo Web",
    year: "2026",
    heroImage: "/projects/terra-alta.png",
    heroLabel: "TERRA ALTA",
    processImage: "/assets/projects/terra/75b65.png",
    siteUrl: "https://pie-sienna-42355881.figma.site/",
    problem:
      "La agencia de viajes contaba con una página web que no estaba a la altura de su propuesta. El sitio era lento, difícil de navegar desde el celular y no permitía que los usuarios encontraran fácilmente las rutas de senderismo, sus niveles de dificultad o cómo reservar. Esto provocaba que muchos visitantes abandonaran la página antes de contactar a la agencia, y se perdieran oportunidades de venta frente a competidores con una presencia en línea más sólida.",
    process:
      "Se comenzó definiendo el concepto y la identidad visual de Terra Alta. Posteriormente, se desarrollaron los wireframes y se estableció la estructura del sitio web en Figma. A partir de estas propuestas, se utilizó Figma Make para construir la página, incorporando fotografías de destinos naturales, tipografías, paleta de colores y elementos interactivos que reflejan la esencia de la marca.",
    result:
      "Una página ágil, clara y funcional que facilita descubrir y reservar expediciones de senderismo. Los visitantes encuentran la ruta ideal en pocos clics, navegan sin problema desde cualquier dispositivo y la agencia cuenta con una herramienta sólida para crecer su negocio en línea.",
    nextProjects: [
      { label: "PROYECTO 2", href: "/proyectos/pausa-cafe" },
      { label: "PROYECTO 3", href: "/proyectos/portafolio-ellen" },
    ],
  },
  {
    slug: "pausa-cafe",
    title: "PAUSA CAFÉ",
    subtitle: "Cafetería",
    client: "Andrea Gonzales",
    service: "Página Web",
    year: "2026",
    heroImage: "/assets/projects/pausa/1fd65.png",
    heroLabel: "Pausa Café",
    processImage: "/assets/projects/pausa/0fa0a.png",
    siteUrl: "https://planet-eel-12264653.figma.site/",
    problem:
      "Pausa Café necesitaba una página web que representara la personalidad de la marca y permitiera a los usuarios conocer mejor su propuesta de café de especialidad y panadería artesanal. El reto era crear una experiencia digital que no pareciera una página convencional de cafetería, sino que transmitiera una sensación cálida, urbana y editorial. También debía facilitar el acceso a información como el origen del café, el menú y los datos para visitar el establecimiento.",
    process:
      "Se comenzó definiendo la identidad visual de Pausa Café y desarrollando los wireframes en Figma Design. Posteriormente, se utilizaron estos diseños como base para construir el sitio en Figma Make, incorporando fotografías, tipografías, colores y elementos interactivos.",
    result:
      "Se obtuvo una página web funcional con cuatro apartados: Inicio, Sobre, Menú y Visítanos. El diseño combina una estética cálida, urbana y editorial con animaciones y una navegación interactiva que refleja la personalidad de la marca y facilita la experiencia del usuario.",
    nextProjects: [
      { label: "PROYECTO 1", href: "/proyectos/terra-alta" },
      { label: "PROYECTO 3", href: "/proyectos/portafolio-ellen" },
    ],
  },
  {
    slug: "portafolio-ellen",
    title: "PORTAFOLIO",
    subtitle: "Diseño Gráfico",
    client: "Ellen De Luna",
    service: "Diseño Web",
    year: "2026",
    heroImage: "/assets/projects/portfolio/a63ad.png",
    heroLabel: "",
    processImage: "/assets/projects/portfolio/40be1.png",
    siteUrl: "https://portafolioellendeluna.figma.site/",
    problem:
      "Se detectó la necesidad de crear un espacio digital que permitiera organizar y presentar los proyectos de la clienta de manera clara y profesional. Su trabajo necesitaba estar reunido en un solo lugar, con una estructura que facilitara su exploración y mostrara de forma atractiva su experiencia, habilidades y estilo creativo, permitiéndole conectar con futuros clientes y nuevas oportunidades profesionales.",
    process:
      "Durante el proceso, se realizó una selección de los proyectos más relevantes para incluir en el portafolio. Posteriormente, se trabajó en la organización y distribución de la información, definiendo las secciones, el acomodo de los proyectos y la estructura visual del sitio, buscando lograr una navegación clara, atractiva y coherente con la identidad de la clienta.",
    result:
      "El resultado es un portafolio digital que reúne y presenta sus proyectos de manera organizada y atractiva. A través del diseño, la distribución de los elementos y la identidad visual, se logró reflejar su estilo y personalidad, creando un espacio que representa quién es, muestra su trabajo de forma auténtica y le permite compartirlo de una manera más profesional con futuros clientes.",
    nextProjects: [
      { label: "PROYECTO 1", href: "/proyectos/terra-alta" },
      { label: "PROYECTO 2", href: "/proyectos/pausa-cafe" },
    ],
  },
];

function Header({
  projectsActive = false,
  servicesActive = false,
  aboutActive = false,
}: {
  projectsActive?: boolean;
  servicesActive?: boolean;
  aboutActive?: boolean;
}) {
  return (
    <header className="site-header">
      <div className="nav-row">
        <a className="brand" href="/" aria-label="UMBRAL, inicio">
          <img src={`${assets}/f1b63.svg`} alt="UMBRAL" />
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a className={projectsActive ? "is-active" : ""} href="/proyectos">
            PROYECTOS
          </a>
          <a className={servicesActive ? "is-active" : ""} href="/servicios">
            SERVICIOS
          </a>
          <a className={aboutActive ? "is-active" : ""} href="/sobre-nosotros">
            SOBRE NOSOTROS
          </a>
        </nav>

        <a className="talk-button talk-button--red" href="/hablemos">
          HABLEMOS
        </a>
      </div>
      <img className="header-rule" src={`${assets}/4cb74.svg`} alt="" />
    </header>
  );
}

function Closing({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`closing${dark ? " closing--dark" : ""}`}>
      <div className="cta">
        <p>¿Por dónde empezamos?</p>
        <a className="talk-button talk-button--white" href="/hablemos">
          HABLEMOS
        </a>
      </div>

      <footer className="site-footer">
        <img className="footer-rule" src={`${assets}/e99ea.svg`} alt="" />
        <div className="footer-row">
          <p>UMBRAL · Diseño Web · Desarrollo Web · SEO y Optimización</p>
          <a href="mailto:umbral@gmail.com">umbral@gmail.com</a>
        </div>
      </footer>
    </section>
  );
}

function HomePage() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              <span>Tu marca empieza</span>
              <span className="hero-second-line">
                en el
                <img src={`${assets}/6adb0.svg`} alt="UMBRAL" />
              </span>
            </h1>
            <p>Diseñamos páginas web que invitan a explorar.</p>
          </div>

          <div className="laptop-window" aria-hidden="true">
            <img className="laptop-layer" src={`${assets}/a60f2.png`} alt="" />
          </div>
        </section>

        <section className="featured" id="proyectos" aria-labelledby="featured-title">
          <h2 id="featured-title">Trabajo destacado</h2>
          <div className="featured-image">
            <img
              src={`${assets}/07597.png`}
              alt="Terra Alta: El mundo a otra altura, Agencia de viajes en México"
            />
          </div>
          <p className="project-caption">Terra alta</p>
        </section>

        <section className="services" id="servicios" aria-labelledby="services-title">
          <h2 id="services-title">Servicios</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <p className="service-number">{service.number}</p>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <Closing />
      </main>
    </div>
  );
}

function ProjectsPage() {
  const projectPath = window.location.pathname.replace(/\/+$/, "");
  const initialIndex = Math.max(
    0,
    projects.findIndex((project) => project.href === projectPath),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeProject = projects[activeIndex];

  return (
    <div className="site-shell projects-page">
      <Header projectsActive />

      <main className="projects-main">
        <section className="projects-intro" aria-labelledby="projects-title">
          <h1 id="projects-title">PROYECTOS</h1>
          <p>Algunos de los espacios que hemos diseñado.</p>
        </section>

        <section className="projects-showcase" aria-label="Proyectos seleccionados">
          <div className="project-carousel">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <a
                  className={`project-slide${isActive ? " is-selected" : ""}`}
                  href={project.href}
                  key={project.name}
                  onClick={(event) => {
                    if (!isActive) {
                      event.preventDefault();
                      setActiveIndex(index);
                    }
                  }}
                  aria-current={isActive ? "true" : undefined}
                >
                  <img src={project.image} alt={project.name} />
                  <span>{project.name}</span>
                </a>
              );
            })}
          </div>

          <div className="active-project-copy" aria-live="polite">
            <div>
              <h2>{activeProject.name}</h2>
              <p>{activeProject.description}</p>
            </div>
            <a className="project-type-button" href={activeProject.href}>
              DISEÑO
            </a>
          </div>
        </section>

        <Closing dark />
      </main>
    </div>
  );
}

function ServicesPage() {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div className="site-shell services-page">
      <Header servicesActive />

      <main>
        <section className="services-scroll-area" aria-labelledby="services-page-title">
          <div className="services-sticky-heading">
            <h1 id="services-page-title">SERVICIOS</h1>
            <p>Tres oficios, Un mismo equipo</p>
          </div>

          <div className="service-expansion-list">
            {serviceOfferings.map((service, index) => {
              const isOpen = openService === index;

              return (
                <button
                  className={`service-expand-card${isOpen ? " is-open" : ""}`}
                  key={service.number}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenService(isOpen ? null : index)}
                >
                  <span className="service-expand-summary">
                    <span className="service-expand-number">{service.number}</span>
                    <span className="service-expand-title">{service.title}</span>
                  </span>
                  <span className="service-expand-details">
                    <span className="service-expand-phrase">{service.phrase}</span>
                    <span className="service-expand-points">
                      {service.points.map((point) => (
                        <span key={point}>• {point}</span>
                      ))}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <Closing />
      </main>
    </div>
  );
}

const workSteps = [
  {
    number: "01.",
    name: "Escuchamos",
    description:
      "Conocemos tu marca, tus objetivos y las necesidades de tu proyecto. Queremos entender qué quieres comunicar y a quién quieres llegar.",
  },
  {
    number: "02.",
    name: "Planeamos",
    description:
      "Organizamos las ideas, definimos la estructura del sitio y establecemos una dirección visual y funcional que responda a tus objetivos.",
  },
  {
    number: "03.",
    name: "Diseñamos y desarrollamos",
    description:
      "Transformamos la estrategia en una experiencia digital. Trabajamos en el diseño de interfaces, la programación y los detalles que hacen que cada sitio sea único.",
  },
  {
    number: "04.",
    name: "Lanzamos",
    description:
      "Probamos, ajustamos y optimizamos el sitio para asegurar que todo funcione correctamente antes de su publicación.",
  },
];

const teamMembers = [
  {
    name: "Lucía Hermosillo",
    role: "Dirección creativa",
    image: "/assets/about/b9d77.png",
    imageClass: "team-photo--lucia-hermosillo",
  },
  {
    name: "Ellen De Luna",
    role: "Build",
    image: "/assets/about/2f4c8.png",
    imageClass: "team-photo--ellen",
  },
  {
    name: "Lucía Benavides",
    role: "Diseño",
    image: "/assets/about/749ce.png",
    imageClass: "team-photo--lucia-benavides",
  },
];

function AboutPage() {
  return (
    <div className="site-shell about-page">
      <Header aboutActive />

      <main>
        <section className="about-hero">
          <div className="about-wordmark">
            <img src="/assets/about/c46c0.svg" alt="UMBRAL" />
          </div>
          <h1>Un estudio pequeño que cuida cada detalle.</h1>
        </section>

        <section className="about-intro">
          <p>
            Somos UMBRAL, un estudio creativo especializado en diseño y desarrollo web. Creemos que
            cada marca tiene algo que contar y que su presencia digital debe reflejarlo de la mejor
            manera.
          </p>
          <p>
            Trabajamos combinando diseño, tecnología y estrategia para crear sitios web que no solo
            se vean bien, sino que también funcionen, comuniquen y conecten con las personas.
          </p>
          <p>
            Nos gusta involucrarnos en cada proyecto, entender sus necesidades y cuidar cada
            decisión. Porque creemos que las mejores soluciones nacen cuando cada detalle tiene un
            propósito.
          </p>
        </section>

        <div className="about-wide-image">
          <img
            src="/assets/about/7181c.png"
            alt="Escritorio con laptop y taza"
          />
        </div>

        <section className="about-who">
          <h2>¿Quiénes Somos?</h2>
          <div>
            <p>
              Somos un equipo creativo que encuentra en el diseño web una oportunidad para
              transformar ideas en experiencias digitales. Nos interesa conocer cada marca,
              entender su esencia y encontrar la manera de comunicarla a través de un sitio web.
            </p>
            <p>
              En UMBRAL combinamos distintas habilidades y perspectivas para desarrollar proyectos
              que equilibran estética, funcionalidad y estrategia. Nos caracteriza la atención al
              detalle, la colaboración y el interés por crear soluciones pensadas para cada
              cliente.
            </p>
          </div>
        </section>

        <section className="about-workflow">
          <div className="workflow-copy">
            <h2>¿Cómo trabajamos?</h2>
            <div className="workflow-intro">
              <h3>Lo construimos con cuidado, rápido y accesible</h3>
              <p>
                Creemos que un buen sitio web comienza mucho antes de diseñar la primera pantalla.
                Por eso, nos involucramos en cada etapa del proceso, desde conocer la marca hasta
                poner el proyecto en funcionamiento.
              </p>
            </div>

            <div className="workflow-steps">
              {workSteps.map((step) => (
                <div className="workflow-step" key={step.number}>
                  <div>
                    <span>{step.number}</span>
                    <strong>{step.name}</strong>
                  </div>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="workflow-image">
            <img src="/assets/about/5b235.png" alt="Manos con laptops sobre una mesa" />
          </div>
        </section>

        <section className="about-team">
          <h2>Equipo</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name}>
                <div className={`team-photo ${member.imageClass}`}>
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <Closing />
      </main>
    </div>
  );
}

type ContactValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const emptyContactValues: ContactValues = {
  name: "",
  email: "",
  service: "",
  message: "",
};

function ContactPage() {
  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const updateField = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setSubmitError(false);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof ContactValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Este campo es obligatorio";
    if (!values.email.trim()) {
      nextErrors.email = "Este campo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Escribe un correo válido";
    }
    if (!values.message.trim()) nextErrors.message = "Este campo es obligatorio";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      setSubmitError(false);
      return;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...values,
        }).toString(),
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      setValues(emptyContactValues);
      setErrors({});
      setSubmitError(false);
      setSubmitted(true);
    } catch {
      setSubmitted(false);
      setSubmitError(true);
    }
  };

  return (
    <div className="site-shell contact-page">
      <Header />

      <main>
        <section className="contact-layout">
          <h1>
            Cuéntanos
            <br />
            tu historia
          </h1>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            onSubmit={submitForm}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="contact-field">
              <label htmlFor="contact-name">Nombre</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <span className="contact-error" id="contact-name-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Correo</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <span className="contact-error" id="contact-email-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-service">Servicio</label>
              <input
                id="contact-service"
                name="service"
                type="text"
                value={values.service}
                onChange={(event) => updateField("service", event.target.value)}
              />
            </div>

            <div className="contact-field contact-field--message">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && (
                <span className="contact-error" id="contact-message-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button className="contact-submit talk-button talk-button--red" type="submit">
              ENVIAR
            </button>
            {submitted && (
              <p className="contact-confirmation" role="status">
                Gracias por escribirnos. Te responderemos pronto.
              </p>
            )}
            {submitError && (
              <p className="contact-submission-error" role="alert">
                No pudimos enviar tu mensaje. Inténtalo de nuevo.
              </p>
            )}
          </form>
        </section>

        <footer className="contact-footer">
          <img className="footer-rule" src={`${assets}/e99ea.svg`} alt="" />
          <div className="footer-row">
            <p>UMBRAL · Diseño Web · Desarrollo Web · SEO y Optimización</p>
            <a href="mailto:umbral@gmail.com">umbral@gmail.com</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProjectDetailPage({ detail }: { detail: (typeof projectDetails)[number] }) {
  return (
    <div className={`site-shell project-detail project-detail--${detail.slug}`}>
      <Header projectsActive />

      <main>
        <section className="detail-summary">
          <h1>{detail.title}</h1>
          <p className="detail-subtitle">{detail.subtitle}</p>
          <div className="detail-rule" />
          <dl className="detail-meta">
            <div>
              <dt>Cliente</dt>
              <dd>{detail.client}</dd>
            </div>
            <div>
              <dt>Servicio</dt>
              <dd>{detail.service}</dd>
            </div>
            <div>
              <dt>Año</dt>
              <dd>{detail.year}</dd>
            </div>
          </dl>
        </section>

        <section className="detail-visual">
          <img src={detail.heroImage} alt={detail.title} />
          {detail.heroLabel && <p>{detail.heroLabel}</p>}
        </section>

        <section className="detail-problem">
          <h2>Problema</h2>
          <p>{detail.problem}</p>
        </section>

        <section className="detail-process">
          <div>
            <h2>Proceso</h2>
            <p>{detail.process}</p>
          </div>
          <img src={detail.processImage} alt={`Proceso de ${detail.title}`} />
        </section>

        <section className="detail-result">
          <div>
            <h2>Resultado</h2>
            <p>{detail.result}</p>
          </div>
          <a
            className="visit-site-button"
            href={detail.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar el sitio
          </a>
        </section>

        <section className="next-project">
          <p>¿Siguiente proyecto?</p>
          <div>
            {detail.nextProjects.map((project) => (
              <a href={project.href} key={project.href}>
                {project.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="detail-footer">
          <img className="footer-rule" src={`${assets}/e99ea.svg`} alt="" />
          <div className="footer-row">
            <p>UMBRAL · Diseño Web · Desarrollo Web · SEO y Optimización</p>
            <a href="mailto:umbral@gmail.com">umbral@gmail.com</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const projectDetail = projectDetails.find((project) => `/proyectos/${project.slug}` === path);

  if (projectDetail) {
    return <ProjectDetailPage detail={projectDetail} />;
  }

  if (path === "/servicios") {
    return <ServicesPage />;
  }

  if (path === "/sobre-nosotros") {
    return <AboutPage />;
  }

  if (path === "/hablemos") {
    return <ContactPage />;
  }

  return path === "/proyectos" ? <ProjectsPage /> : <HomePage />;
}
