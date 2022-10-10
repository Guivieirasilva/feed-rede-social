import '../styles/PostForm.css'

import { useState } from 'react'

import UserIcon from "../images/user.svg"
import PaperPlaneIcon from "../images/paper-plane.svg"

export default function PostForm(props) {

   const [history, setHistory] = useState("")
   const [userName, setUserName] = useState("")

   function handleSubmit(event){
      event.preventDefault()

      props.onSubmit({history, userName})
      
      setHistory('')
      setUserName('')
   }

   return(
      <form onSubmit={handleSubmit} className='post-form'>
        <input 
          value={history}
          placeholder='Escreva um nova história...'
          onChange={(event) => setHistory(event.target.value) }
        />

        <div>
          <img src={UserIcon} alt='Ícone de usuário' />

          <input 
            value={userName}
            placeholder='Digite seu nome...'
            onChange={(event) => setUserName(event.target.value)}
          />

        <button type='submit'>
          <img src={PaperPlaneIcon} alt='Ícone de aviãozinho' />
          Publicar
        </button>
        </div>
      </form>
   )
}