import './App.css'
import Sidebar from './components/Sidebar'
import Formulario from './components/Formulario'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Formulario />
      </main>
    </div>
  )
}
