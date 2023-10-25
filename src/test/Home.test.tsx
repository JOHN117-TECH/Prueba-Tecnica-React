import Home from '../pages/Home'; // Asegúrate de que la ruta al archivo Home sea correcta
import { mockContext, createRender } from 'vitest-vue';

const { render, screen } = createRender((context) => {
  mockContext(context);
  return {
    components: { Home },
  };
});

test('renders Home component', async () => {
  render(Home);

  // Verificar que los elementos esperados se rendericen
  expect(await screen.findByText('Cargue de facturas en dos pasos')).toBeTruthy();
  expect(await screen.findByText('Carga la informacion de las facturas de tu empresa')).toBeTruthy();

  // Simular un cambio en el input de archivo
  const fileInput = await screen.findByLabelText('Subir o arrastrar el archivo aquí Excel,CSV');
  await fileInput.trigger('change', {
    target: { files: [new File([''], 'test.csv', { type: 'text/csv' })],
  });

  // Verificar que la función setCsv fue llamada con los datos adecuados (debes ajustar esta parte según tus necesidades)
  // También puedes verificar otras interacciones según tu lógica
  expect(context.mocks.setCsv).toHaveBeenCalledWith(expect.any(Array), expect.any(Array));

  // Simular un clic en el botón "Continuar"
  const continueButton = await screen.findByText('Continuar');
  await continueButton.trigger('click');

  // Verificar que la función de navegación fue llamada
  expect(context.mocks.navigate).toHaveBeenCalledWith('/file');
});