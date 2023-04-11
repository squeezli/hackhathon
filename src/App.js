import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouter } from './router';
import { Header } from './components/header/header';

function App() {
  const routes = useRouter()
  return (
    <div className="App">
      
      <main>
        <Router basename={process.env.PUBLIC_URL}>
          <Header/>
            {routes}
        </Router>
      </main>
    </div>
  )
}

export default App;
