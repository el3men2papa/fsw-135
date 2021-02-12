import React, { useContext } from "react"
import CommentForm from "./CommentForm"
import comments from "./Comment"
import {UserContext} from "../context/UserProvider"
import CommentList from "./CommentList"

export default function Profile(){
  const { user: { username}, addComment } = useContext( UserContext )

  return (
    <div className = "profile">
      <h1>Welcom @{ username }!</h1>
      <h3>Add A Comment</h3>
      <CommentForm addComment = {addComment} />
      <h3> Your Commets</h3>
      <CommentList comments = { comments } />
    </div>
  )
}