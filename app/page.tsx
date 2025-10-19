import Li from "./components/Li";
import ButtonScroll from "./components/ButtonScroll";

export default function Home() {
  return (
    <main className="container my-5 position-relative">
      <section className="py-5 BorderSeparador" id="portada">
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
            <h3 className="fw-bold TextShadow">RTX 5090 FOUNDERS EDITIONS</h3>
          </article>
        </div>
      </section>

      <section
        id="gaming"
        className="MarginTop d-flex flex-column align-items-center"
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
              className="w-100 object-fit-container"
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

      <section id="especificacion" className="MarginTop BorderSeparador">
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
