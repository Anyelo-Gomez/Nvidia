import Li from "./components/Li";
import ButtonScroll from "./components/ButtonScroll";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container-fluid my-5 position-relative px-0">
      <section className="container py-5 BorderSeparador" id="portada">
        <div className="row">
          <article className="col-12 d-flex justify-content-center">
            <img
              src="5090 founder edition frontal .png"
              alt=""
              className="w-100 object-fit-cover"
              style={{ maxWidth: "100vh" }}
            />
          </article>
          <article className="col-12  mt-3 d-flex justify-content-center text-light">
            <h3 className="fw-bold TextShadow">GEFORCE RTX 5090</h3>
          </article>
          <article className="mt-4">
            <Link
              href={"/products"}
              className="text-decoration-none text-light BackgroundNvidia p-2"
              role="button"
            >
              VER MAS OPCIONES
            </Link>
          </article>
        </div>
      </section>

      {/* GAMING */}
      <section
        id="gaming"
        className="container MarginTop d-flex flex-column align-items-center"
      >
        <h3 className="text-light text-center fw-bold TextShadow mb-5">
          VIVE LA MEJOR EXPERIENCIA EN GAMING
        </h3>
        <div className="row BoxShadow container px-0">
          <article
            className="col px-0"
            style={{ borderRight: "15px solid #76D900" }}
          >
            <img
              src="gaming.png"
              alt=""
              className="w-100 h-100 object-fit-container"
            />
          </article>
          <article className="col  text-light d-flex flex-column justify-content-center gap-3 text-center">
            <h5>CON LA MAYOR CALIDAD A LA MAYOR TASA DE REFRESCO</h5>
            <img
              src="geforce rxt logo.svg"
              alt="geforce rxt logo"
              style={{ height: "50px" }}
            />
          </article>
        </div>
      </section>

      {/* RTX */}
      <section
        id="rtx"
        className="container-fluid px-0 mt-5 d-flex flex-column align-items-center"
      >
        <article
          className="container-fluid text-light text-center d-flex justify-content-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="mt-5" style={{ width: "80vw" }}>
            <h5>RTX. It’s On.</h5>
            <h3>Lo último en trazado de rayos e IA</h3>
            <p>
              RTX es la plataforma más avanzada para el trazado de rayos y las
              tecnologías de renderizado neuronal que están revolucionando las
              formas en que jugamos y creamos. Más de 700 de los mejores juegos
              y aplicaciones utilizan RTX para ofrecer gráficos realistas con un
              rendimiento increíblemente rápido o características de IA de
              vanguardia como la generación de fotogramas múltiples de DLSS.
            </p>
            <Link href={`rtx`} className="nav-link">
              <h5 className="a">Echa un vistazo a los últimos juegos RTX</h5>
            </Link>
          </div>
        </article>

        <article className="">
          <img src="rtx portada.png" alt="" className="w-100" />
        </article>
      </section>

      {/* dlss */}

      <section id="dlss" className="pt-5">
        <div className="container pb-5 d-flex justify-content-center p-0">
          <div className="container row">
            <article className="col-12 col-lg-5">
              <div className=" d-flex flex-column text-light gap-3">
                <h5>NVIDIA DLSS 4</h5>
                <h3>
                  Velocidad suprema. Efectos visuales superiores. Con tecnología
                  de IA.
                </h3>
                <p>
                  DLSS es un conjunto revolucionario de tecnologías de
                  renderizado neuronal que utiliza IA para aumentar los FPS,
                  reducir la latencia y mejorar la calidad de imagen. ‌El último
                  avance, DLSS 4, ofrece una nueva prestación de generación de
                  fotogramas múltiples, reconstrucción de rayos y
                  superresolución mejorada, con tecnología de GPU GeForce RTX™
                  serie 50 y núcleos Tensor de quinta generación. La combinación
                  de DLSS y GeForce RTX ofrece la mejor forma de jugar,
                  respaldada por un superordenador de IA NVIDIA en la nube que
                  mejora constantemente las capacidades de juego de tu PC.{" "}
                </p>
                <Link
                  href={`dlss`}
                  className="nav-link pb-3 d-flex align-items-center"
                >
                  <h5>Descubre cómo mejora la IA el juego</h5>
                  <i className="bi bi-arrow-right-short a fs-1"></i>
                </Link>
              </div>
            </article>
            <article className="col-12 col-lg-7">
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/_YXbkGuw3O8?si=dE8q-vFyK2docCZc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-white" style={{ fontSize: "10px" }}>
                GeForce RTX 5090, 4K, RT Overdrive, Ajustes máximos, DLSS con
                generación de fotogramas múltiples (modo 4X), reconstrucción de
                rayos, superresolución (modo rendimiento)
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* especificacion */}
      <section id="especificacion" className="container MarginTop">
        <h3 className="mt-5 pt-5 text-light TextShadow">ESPECIFICACIONES</h3>

        <div className="row">
          <article className="col-12 col-lg-6 d-flex justify-content-start">
            <img
              src="5090 founder edition placa.png"
              alt=""
              className="w-100 object-fit-contain"
              style={{ maxWidth: "75vh" }}
            />
          </article>

          <article
            className="col-12 col-lg-6 d-flex  justify-content-end align-items-center text-light mt-0 pt-0"
            style={{ fontSize: "18px" }}
          >
            <ul>
              <Li title="Arquitectura" text="NVIDIA Blackwell" />
              <Li title="Núcleos CUDA" text="21,760" />
              <Li title="Memoria" text="32 GB GDDR7" />
              <Li title="Interfaz de memoria" text="512 bits" />
              <Li title="Ancho de banda de memoria" text="1792 GB/s" />
              <Li title="Núcleos Tensor" text="680 (5ª generación)" />
              <Li title="Núcleos RT" text="170 (4ª generación)" />
              <Li title="TGP (Potencia de Tarjeta Gráfica)" text="575w" />
            </ul>
          </article>
        </div>
      </section>
      <section
        className="btn-fixed position-fixed"
        style={{ top: "90%", left: "90%" }}
      >
        <ButtonScroll />
      </section>
    </main>
  );
}
