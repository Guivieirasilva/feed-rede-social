import '../src/styles/App.css'

import { useState } from 'react'

import Feed from './components/Feed'
import PostForm from './components/PostForm'

function App() {

  const [posts, setPosts] = useState([])

  function handleSubmit({history, userName}){
    setPosts([
      ...posts,
      {
      id:Math.random(),
      content: history,
      userName,
      publishedAt: new Date(),
      },
    ])
      
  }

  return (
    <div className="wrapper">

      <PostForm onSubmit={handleSubmit} />
      
      <main>

        <Feed posts={posts}/>

      </main>

    </div>
  )
}

export default App
