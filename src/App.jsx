
import AppRouter from './router';
import { ThemeProvider } from './theme-context.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
