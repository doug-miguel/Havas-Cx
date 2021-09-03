import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Post from "./Post"
import ListPost from "./ListPost"

export default function App() {
    return ( 
        <>
        <Router>
            <Switch>
                <Route exact path="/">
                    <ListPost />
                </Route>
                <Route path="/posts/:id">
                    <Post />
                </Route>
            </Switch>
        </Router>
        </>
    )
}