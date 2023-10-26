import styled from 'styled-components';

const ContainerInput = styled.div`
  display: flex;
  margin-left: 5rem;
  margin-top: 2rem;
  padding-bottom: 1rem;

  input {
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #00B5E2;
  }

  @media (max-width: 425px) {
    margin-left: 1rem;
  }
`;

const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 0rem 1rem 0rem 5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  &.true th {
    background-color: #111111;
    font-weight: bold;
    color: #ccc;
  }

  &.true tbody tr td:nth-child(even) {
    background-color: #2c2c2c;
  }

  &.true tbody tr td {
    background-color: #474747;
    color: #ccc;
  }

  tbody tr td.truePendiente {
    color: black;
    background-color: rgb(253, 218, 37);
    padding: 0.5rem;
    text-align: center;
  }

  tbody tr td.trueEnProgreso {
    color: white;
    background-color: rgb(0, 181, 226);
    padding: 0.5rem;
    text-align: center;
  }

  tbody tr td.truePagado {
    color: white;
    background-color: rgb(92, 166, 82);
    padding: 0.5rem;
    text-align: center;
  }

  tbody tr td.trueRechazada {
    color: white;
    background-color: rgb(216, 52, 95);
    padding: 0.5rem;
    text-align: center;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 1rem 0rem;

  li {
    margin: 0 5px;

    a {
      display: block;
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }

      &.active {
        background-color: #0056b3;
      }

      &.disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export { ContainerInput, ContainerTable, Table, Pagination };