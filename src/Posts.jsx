import './App.css';
import React, {useState, useEffect} from 'react'


const Posts = () => {

  //komponentin tilan määritys
const [posts, setPosts] = useState([])
const [näytäPosts, setNäytäPosts] = useState(false)


useEffect( () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) //muutetaan jsondata javascriptiksi
  .then(oliot => setPosts(oliot))
}
,
[]
)   
  return (
    <>
    <h2 onClick={(() => setNäytäPosts(!näytäPosts))}>Post from typicode</h2>
      {       
          näytäPosts && posts && posts.map(p =>             
          <div className='posts' key={p.id}>
          <p1><h3>{p.title}</h3></p1>
          <h5>User ID: {p.userId}</h5>
          <p2>{p.body}</p2>
          </div>                   
          )
      }
    </>
    
  );
}

export default Posts;