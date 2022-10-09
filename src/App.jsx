import '../src/styles/App.css'

import UserIcon from "./images/user.svg"
import PaperPlaneIcon from "./images/paper-plane.svg"

import './styles/PostForm.css'

function App() {

  return (
    <div className="wrapper">
      <form onSubmit={() => alert('Formulário submetido')} className='post-form'>
        <input placeholder='Escreva um nova história...'/>

        <div>
          <img src={UserIcon} alt='Ícone de usuário' />

          <input placeholder='Digite seu nome...'/>

        <button type='submit'>
          <img src={PaperPlaneIcon} alt='Ícone de aviãozinho' />
          Publicar
        </button>

        </div>
      </form>
    </div>
  )
}

export default App
