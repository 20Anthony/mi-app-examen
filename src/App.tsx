const App = () => {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">Informate Ecuador</h1>
      <p className="text-center">
        Donde la información se convierte en conocimiento
      </p>

      {/* === PRIMERA FILA DE 3 CARDS === */}
      <div className="row mt-4">

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">TECNOLOGIA</h5>
              <p className="card-text">La tecnología avanza a un ritmo cada vez más rápido, transformando la forma en que vivimos y trabajamos al introducir herramientas y sistemas superiores que reemplazan a los antiguos</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">NATURALEZA</h5>
              <p className="card-text">La naturaleza se refiere al conjunto de todos los seres vivos, los fenómenos físicos y las materias que existen en el universo, excluyendo la intervención humana físicos y químicos del planeta</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">COMIDA</h5>
              <p className="card-text">La comida es toda sustancia nutritiva que se consume para obtener energía, crecer y reparar el cuerpo. También se refiere a la mezcla de uno o más alimentos preparada a través de procesos físicos </p>
            </div>
          </div>
        </div>

      </div>

      {/* === SEGUNDA FILA DE 3 CARDS === */}
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">AUTOS</h5>
              <p className="card-text">Un auto, o automóvil, es un vehículo motorizado de ruedas diseñado para el transporte de personas y/o carga. Se caracteriza por moverse por sí mismo gracias a un motor y es una parte fundamental </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">PAISAJE</h5>
              <p className="card-text">Se llama paisaje al conjunto que podemos observar, compuesto por los elementos de la naturaleza: tierra, agua, plantas, montañas, etc. Y a las transformaciones hechas por el hombre</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">VIVIENDA</h5>
              <p className="card-text">La vivienda es un recinto estructuralmente separado e independiente construido para ser habitado, protegiendo a las personas  y sirviendo de refugio y centro de vida</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;
