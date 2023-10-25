import { useNavigate } from 'react-router-dom';
import { useCsv } from '../context/context';
import '../style/Home.css';
import Papa, { ParseResult } from 'papaparse';

type CSVRow = { [key: string]: string };
const Home = () => {
  const { setCsv, setLoading, theme } = useCsv();

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLoading(true);
    setTimeout(() => {
      if (file) {
        Papa.parse<CSVRow>(file, {
          complete: (result: ParseResult<CSVRow>) => {
            setCsv(result.data, Object.keys(result.data[0]));
            setLoading(false);
          },
          header: true,
        });
      }
    }, 4000);
  };

  const handleNavigate = () => {
    navigate('/file');
  };

  return (
    <>
      <div className={`containerMain ${theme}`}>
        <div className={`containerInfo ${theme}`}>
          <p>Último ingreso 05/10/2023 - 08:05 am</p>
          <p>Dirección IP:186.145.19.35</p>
        </div>
        <div className="containerFile">
          <h2 className={`containerFile-title ${theme}`}>
            Cargue de facturas en dos pasos
          </h2>
          <div className="containerLines">
            <hr className="style1"></hr>
            <hr className="style2"></hr>
          </div>
          <h1 className={`containerFile-subTitle ${theme}`}>
            Carga la informacion de las facturas de tu empresa
          </h1>
        </div>
        <div className={`containerSubInfo ${theme}`}>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos .
          </p>
          <h3>Cargue de facturas</h3>
          <label>
            Subir o arrastrar el archivo aquí Excel,CSV
            <input type="file" onChange={handleFileChange} accept=".csv" />
          </label>
          <p>
            El documento debe ser formato csv o excel y un tamaño maximo de 1MB.
          </p>
          <div className="containerButton">
            <button onClick={handleNavigate}>Continuar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
