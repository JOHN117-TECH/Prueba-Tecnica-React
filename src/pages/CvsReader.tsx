import { useEffect, useState } from 'react';
import { useCsv } from '../context/context';
import ReactPaginate from 'react-paginate';
import {
  ContainerFile,
  ContainerFileSubTitle,
  ContainerFileTitle,
  ContainerInfo,
  ContainerLines,
  ContainerMain,
} from '../style/Home';
import { ContainerInput, ContainerTable, Table } from '../style/CvsReader';
import '../style/CvsReader.css';
type CSVRow = { [key: string]: string };

const CvsReader = () => {
  const { csvData, csvHeaders, theme } = useCsv();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<CSVRow[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(searchResults.length / itemsPerPage);
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  function handleSearch() {
    const filteredResults = csvData.filter((row) => {
      return Object.values(row).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
    setCurrentPage(0);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, csvData]);

  return (
    <>
      {csvData.length > 0 && (
        <ContainerMain className={`${theme}`}>
          <ContainerInfo className={`${theme}`}>
            <p>Último ingreso 05/10/2023 - 08:05 am</p>
            <p>Dirección IP:186.145.19.35</p>
          </ContainerInfo>
          <ContainerFile className={`${theme}`}>
            <ContainerFileTitle className={`${theme}`}>
              Cargue de facturas en dos pasos
            </ContainerFileTitle>
            <ContainerLines>
              <hr className="style3"></hr>
              <hr className="style4"></hr>
            </ContainerLines>
            <ContainerFileSubTitle className={`${theme}`}>
              Carga la informacion de las facturas de tu empresa
            </ContainerFileSubTitle>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum es simplemente el texto de relleno
              de las imprentas y archivos .
            </p>
          </ContainerFile>
          <ContainerInput className={`${theme}`}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              id="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </ContainerInput>
          <ContainerTable>
            <Table className={`${theme}`}>
              <thead>
                <tr>
                  {csvHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {searchResults
                  .slice(
                    currentPage * itemsPerPage,
                    (currentPage + 1) * itemsPerPage
                  )
                  .map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {csvHeaders.map((header) => (
                        <td
                          key={header}
                          className={
                            row[header] === 'Pendiente'
                              ? 'truePendiente'
                              : row[header] === 'En progreso'
                              ? 'trueEnProgreso'
                              : row[header] === 'Pagado'
                              ? 'truePagado'
                              : row[header] === 'Rechazada'
                              ? 'trueRechazada'
                              : ''
                          }
                        >
                          {row[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </Table>

            <ReactPaginate
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </ContainerTable>
        </ContainerMain>
      )}
    </>
  );
};

export default CvsReader;
