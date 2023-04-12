import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouter } from './router';
import { Header } from './components/header/header';
import { AuthProvider } from 'react-auth-kit'

function App() {
  const routes = useRouter()
  return (
    <div className="App">
      <AuthProvider authTypes={'cookie'} authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}>
        <main>
          <Router basename={process.env.PUBLIC_URL}>
            <Header />
            {routes}
          </Router>
        </main>
      </AuthProvider>
    </div>
  )
}

export default App;
