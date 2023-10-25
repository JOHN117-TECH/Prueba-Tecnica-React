import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootPage from './pages/RootPage';
import CvsReader from './pages/CvsReader';
import CsvProvider from './context/context';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/file',
          element: <CvsReader />,
        },
      ],
    },
  ]);

  return (
    <>
      <CsvProvider>
        <RouterProvider router={router} />
      </CsvProvider>
    </>
  );
}

export default App;
