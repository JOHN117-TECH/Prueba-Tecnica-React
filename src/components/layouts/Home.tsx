import '../../style/Home.css';

const Home = () => {
  return (
    <>
      <div className="containerMain">
        <div className="containerInfo">
          <p>Último ingreso 05/10/2023 - 08:05 am</p>
          <p>Dirección IP:186.145.19.35</p>
        </div>
        <div className="containerFile">
          <h2 className="containerFile-title">
            Cargue de facturas en dos pasos
          </h2>
          <div className="containerLines">
            <hr className="style1"></hr>
            <hr className="style2"></hr>
          </div>
          <h1 className="containerFile-subTitle">
            Carga la informacion de las facturas de tu empresa
          </h1>
        </div>
        <div className="containerSubInfo">
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos .
          </p>
          <h3>Cargue de facturas</h3>
          <label>
            Subir o arrastrar el archivo aquí Excel,CSV
            <input type="file" accept=".csv" />
          </label>
          <p>
            El documento debe ser formato csv o excel y un tamaño maximo de 1MB.
          </p>
          <div className="containerButton">
            <button>Continuar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
