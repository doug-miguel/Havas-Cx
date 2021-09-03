import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../style/ListPost.scss"

export default function ListPost() {
  const [apiData, setApiData] = useState([])
  
  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setApiData(data)
  }, [])

  return (
    <div className="container">
      <h1 className="headerListPost">Lista de post</h1>
      <ul>
        {apiData.map((item) => (
          <li key={item.id} className="post">
          <Link className="idPost" to={`/posts/${item.id}`}>
            <p><b>ID:</b>{item.id}</p>
            <p><b>UserId:</b> {item.userId}</p>
            <p><b>Titúlo:</b> {item.title}</p>
            <p><b>Texto:</b> {item.body}</p>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}