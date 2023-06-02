import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./styles/register.css"
import "./styles/login.css"
import "./styles/about.css"
import "./styles/workout.css"
import "./styles/tracker.css"
import "./styles/Calendar.css";
import "./styles/nutrition.css";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
