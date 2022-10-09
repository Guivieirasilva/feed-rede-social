import '../src/styles/App.css'
import '../src/styles/Feed.css'

import UserIcon from "./images/user.svg"
import PaperPlaneIcon from "./images/paper-plane.svg"
import clockIcon from "./images/clock.svg"
import emptyFolderIcon from "./images/empty-folder.svg"

import './styles/PostForm.css'

function App() {

  const posts = [
    {
      id:Math.random(),
      content: "Conteúdo do post",
      userName: 'Guilherme',
      publishedAt: new Date(),
    },
    {
      id:Math.random(),
      content: "Conteúdo do post 2",
      userName: 'Mateus',
      publishedAt: new Date(),
    },
  ]

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
      <main>

        {posts.length === 0 && (
          <div className='feed-status'>
            <img src={emptyFolderIcon} alt='Ícone de pasta vazia' />
            <h1>Não encontramos nada</h1>
            <h2>
              Parece que você e seus amigos não postaram nada. 
              Comece a escrever uma nova história!
            </h2>
          </div>)
        }

        {
          posts.length > 0 && (
            <>
              <header>
                <h1>Seu Feed</h1>
                <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
              </header> 
              <section className='feed'>
                {posts.map( (post) => (
                  <article key={post.id}>
                  <p>{post.content}</p>
                  <footer>
                    <div className='user-details'>
                      <img src={UserIcon} alt="Ícone de usuário" />
                      <strong>{post.userName}</strong>
                    </div>
                    <div className='time'>
                      <img src={clockIcon} alt='Ícone de Relógio' />
                      <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
                    </div>
                  </footer>
                  </article>
                ))}
              </section>
            </>
          )
        }

        
      </main>
    </div>
  )
}

export default App
