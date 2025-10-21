export default function RTX() {
  return (
    <main className="container-fluid px-0">
      <section
        id="portadaRtx"
        className="container mt-5 text-white BoxShadow d-flex align-items-center px-3"
      >
        <div className="d-flex flex-column gap-3">
          <h1>RTX. It’s On.</h1>
          <h4>Lo último en trazado de rayos e IA</h4>
          <p>
            RTX™ es la plataforma más avanzada para el trazado de rayos y las
            tecnologías de renderizado neuronal que están revolucionando las
            formas en que jugamos y creamos. Más de 800 de los mejores juegos y
            aplicaciones utilizan RTX para ofrecer gráficos realistas con un
            rendimiento increíblemente rápido o características de IA de
            vanguardia como la generación de fotogramas múltiples de DLSS.
          </p>
        </div>
      </section>

      <section
        id="videoRtx"
        className=" mt-5 d-flex flex-column align-items-center justify-content-center"
      >
        <article className="container text-center text-white">
          <h2>Comprueba el rendimiento de RTX en los mejores juegos de hoy.</h2>
        </article>
        <article className="container text-center">
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/M3fglmDxD2U?si=Z6HqQ-90-zDjCXTP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </article>
      </section>
    </main>
  );
}
