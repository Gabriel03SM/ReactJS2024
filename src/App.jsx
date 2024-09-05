import './App.css'
import Button from './components/button.jsx'

function exibirMensagem (){
  alert("Parabéns, agora você é corinthiano")
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button texto='Ver meu time' mensagem={exibirMensagem}/>
    </>
  )
}

export default App