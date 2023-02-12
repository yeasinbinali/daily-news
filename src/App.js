import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { routes } from '../src/routes/ProviderRoute/ProviderRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router = {routes}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
