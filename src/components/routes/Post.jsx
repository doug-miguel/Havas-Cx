import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../style/ListPost.scss"

export default function Post() {
  const [postData, setPostData] = useState('')
  const id = window.location.pathname.split('/')[2];
  const url = parseInt(id)
  useEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${url}`);
    const data = await response.json();
    setPostData(data)
  }, [{Link}])

  return (
    <div className="container">
      <div className="backContainer">
        <Link to={"/"} className="back">Voltar</Link>
        <h1 className="headerPost">Post</h1>
      </div>
      <ul>
        <li className="post">
          <p><b>ID:</b> {postData.id}</p>
          <p><b>UserId:</b> {postData.userId}</p>
          <p><b>Titúlo:</b> {postData.title}</p>
          <p><b>Texto:</b> {postData.body}</p>
        </li>
      </ul>
      { (url <= 97) ?
      <div className="containerLeiaMais">
        <span><Link to={`/posts/${url+1}`}>Leia o Artigo: {postData.id+1}</Link></span>
        <span><Link to={`/posts/${url+2}`}>Leia o Artigo: {postData.id+2}</Link></span>
        <span><Link to={`/posts/${url+3}`}>Leia o Artigo: {postData.id+3}</Link></span>
      </div> : null } :
      { (url === 98) ? 
      <div className="containerLeiaMais">
        <span><Link to={`/posts/${url+1}`}>Leia o Artigo: {postData.id+1}</Link></span>
        <span><Link to={`/posts/${url+2}`}>Leia o Artigo: {postData.id+2}</Link></span>
      </div> : null }
       { (url === 99) ? 
      <div className="containerLeiaMais">
        <span><Link to={`/posts/${url+1}`}>Leia o Artigo: {postData.id+1}</Link></span>
      </div> : null }
    </div>
  );
}