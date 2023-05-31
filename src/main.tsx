import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./styles/register.css"
import "./styles/login.css"
import "./styles/about.css"
import "./styles/workout.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
