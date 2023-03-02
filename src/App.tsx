import { AuthProvider } from './context';
import { AppRouter } from './router/AppRouter';

import './styles/App.css';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
