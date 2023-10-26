import { useNavigate } from 'react-router-dom';
import { useCsv } from '../context/context';
import '../style/Home.css';
import styled from 'styled-components';
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

  const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;

    &.true {
      background: #242424;
      height: 90vh;
    }
  `;

  const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1rem;
    padding-right: 2rem;

    p {
      color: #cecece;
    }

    &:first-child {
      padding-bottom: 1rem;
    }
  `;

  const ContainerFile = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    margin-top: 2rem;

    &.true p {
      color: #cecece;
    }
  `;

  const ContainerLines = styled.div`
    display: flex;
    gap: 2rem;
  `;

  const ContainerFileTitle = styled.h2`
    margin-bottom: 1rem;

    &.true {
      color: #4ea3f3;
    }
  `;

  const ContainerFileSubTitle = styled.h1`
    margin-top: 5rem;
    color: #003c71;

    &.true {
      color: #4ea3f3;
    }
  `;

  const ContainerSubInfo = styled.div`
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #f6f6f6;

    &.true {
      background: #242424;

      p {
        color: #cecece;
      }
    }

    h3 {
      padding-top: 4rem;
      padding-left: 1rem;
      font-size: 1.5rem;
      color: #00b5e2;
    }

    input[type='file'] {
      display: none;
    }

    label {
      display: block;
      width: 355px;
      background-color: #00b5e2;
      color: #fff;
      padding: 10px 80px;
      margin-top: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      border-style: dashed;

      &:hover {
        background-color: #0056b3;
      }

      &:active {
        background-color: #003a75;
      }
    }

    p:last-child {
      padding-top: 1rem;
      padding-left: 1rem;
      color: #333f48;
    }
  `;

  const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Button = styled.button`
    background: #00b5e2;
    padding: 1rem 2rem;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  `;

  // Media query (max-width: 425px)
  const MobileStyles = styled.div`
    @media (max-width: 425px) {
      ${ContainerFile} {
        margin-left: 1rem;
      }

      ${ContainerSubInfo} {
        margin-left: 1rem;
        margin-right: 0rem;
      }
    }
  `;

  return (
    <>
      <ContainerMain className={theme}>
        <ContainerInfo className={theme}>
          <p>Último ingreso 05/10/2023 - 08:05 am</p>
          <p>Dirección IP:186.145.19.35</p>
        </ContainerInfo>
        <ContainerFile>
          <ContainerFileTitle className={theme}>
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
        <ContainerSubInfo className={theme}>
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
          <ContainerButton>
            <Button onClick={handleNavigate}>Continuar</Button>
          </ContainerButton>
        </ContainerSubInfo>
      </ContainerMain>
      <MobileStyles />
    </>
  );
};

export default Home;
