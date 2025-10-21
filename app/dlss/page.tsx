export default function DLSS() {
  return (
    <main className="container-fluid mt-5 p-0">
      <section>
        <article className="container text-white text-center d-flex flex-column gap-3">
          <h5>NVIDIA DLSS 4</h5>
          <h3>Velocidad suprema. Gráficos superiores. Potenciado por IA.</h3>
          <p>
            DLSS es un conjunto revolucionario de tecnologías de renderizado
            neuronal que utiliza IA para aumentar los FPS, reducir la latencia y
            mejorar la calidad de imagen. ‌El último avance, DLSS 4, ofrece una
            nueva prestación de generación de fotogramas múltiples y
            superresolución mejorada, con tecnología de GPU GeForce RTX™ serie
            50 y núcleos Tensor de quinta generación. La combinación de DLSS y
            GeForce RTX ofrece la mejor forma de jugar, respaldada por un
            superordenador de IA NVIDIA en la nube que mejora constantemente las
            capacidades de juego de tu PC.
          </p>
        </article>
      </section>
      <section id="godOfWar" className="py-5">
        <article className="container text-white text-center ">
          <h3>Superresolución DLSS</h3>
          <p>
            Aumenta el rendimiento mediante el uso de IA para generar fotogramas
            de mayor resolución desde una entrada de resolución más baja. DLSS
            muestra varias imágenes de menor resolución y utiliza datos de
            movimiento y comentarios de fotogramas anteriores para construir
            imágenes de alta calidad.
          </p>
        </article>
        <article className="container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/K8DddlREHEE?si=24wgv7nraX1Jnkn_"
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
