import video from "../data/video";
import VideoCard from "./VideoCard"
import Video from "./Video"
import LikeButton from "./LikeButton"
import CommentsContainer from "./CommentsContainer"
import { useState } from 'react'


function App() {
  //console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true)

  const handleChange = () => {
    setShowComments(!showComments)
  }

  return (
    <div className="App">
      <Video embedUrl = {video.embedUrl} title = {video.title}  />
      <VideoCard title = {video.title} views = {video.views} createdAt = {video.createdAt}/>
      <LikeButton upvotes = {video.upvotes} downvotes = {video.downvotes}/>
      <button onClick={handleChange}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <hr></hr>
      
      {showComments ? <CommentsContainer comments = {video.comments}/> : null }
      {/* showComments && <CommentsContainer comments = {video.comments}/> */}
      {/* can only use  && (means if...then) in ternary style so you don't have to put "null"
       otherwise it means "and and" like regular */}

    </div>
  );
}

export default App;
