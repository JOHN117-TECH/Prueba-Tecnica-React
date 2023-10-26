import { useNavigate } from 'react-router-dom';
import { useCsv } from '../context/context';
import '../style/Home.css';
import Papa, { ParseResult } from 'papaparse';
import {
  Button,
  ContainerButton,
  ContainerFile,
  ContainerFileSubTitle,
  ContainerFileTitle,
  ContainerInfo,
  ContainerLines,
  ContainerMain,
  ContainerSubInfo,
  MobileStyles,
} from '../style/Home';

type CSVRow = { [key: string]: string };
const Home = () => {
  const { setCsv, setLoading, theme } = useCsv();

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];

    setLoading(true);
    setTimeout(() => {
      if (files) {
        Papa.parse<CSVRow>(files, {
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
      <ContainerMain className={`${theme}`}>
        <ContainerInfo className={`${theme}`}>
          <p>Último ingreso 05/10/2023 - 08:05 am</p>
          <p>Dirección IP:186.145.19.35</p>
        </ContainerInfo>
        <ContainerFile>
          <ContainerFileTitle className={`${theme}`}>
            Cargue de facturas en dos pasos
          </ContainerFileTitle>
          <ContainerLines>
            <hr className="style1"></hr>
            <hr className="style2"></hr>
          </ContainerLines>
          <ContainerFileSubTitle>
            Carga la informacion de las facturas de tu empresa
          </ContainerFileSubTitle>
        </ContainerFile>
        <ContainerSubInfo className={`${theme}`}>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos .
          </p>
          <h3>Cargue de facturas</h3>
          <label id="label">
            Subir o arrastrar el archivo aquí Excel,CSV
            <input type="file" onChange={handleFileChange} accept=".csv" />
          </label>
          <p>
            El documento debe ser formato csv o excel y un tamaño maximo de 1MB.
          </p>
          <ContainerButton>
            <Button onClick={handleNavigate}>
              Continuar
            </Button>
          </ContainerButton>
        </ContainerSubInfo>
      </ContainerMain>
      <MobileStyles />
    </>
  );
};

export default Home;
