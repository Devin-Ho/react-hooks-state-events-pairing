import {useState} from 'react'

function LikeButton ({upvotes, downvotes}) {
  const [like, setLike] = useState(upvotes)
  const [dislike, setDislike] = useState(downvotes)

//   const handleUpvote= () => {
//     setLike (like + 1)
//   }
//   const handleDislikevote= () => {
//     setDislike (dislike + 1)
//   }


//   return ( 
//     <div>
//     <button onClick = {handleUpvote}>{like}👍</button>
//     <button onClick = {handleDislikevote}>{dislike}👎</button>
//   </div>
//   )
// }

//CAN ALSO DO THIS WAY 

const changeNumber = (likeNumber = true) => {
  if (likeNumber) {
    setLike(like + 1) 
  } else {
    setDislike (dislike + 1)
  }
}
 return ( 
    <p>
    <button onClick = {() => changeNumber()}>{like}👍</button>
    <button onClick = {() => changeNumber(false)}>{dislike}👎</button>
  </p>
  )
}

export default LikeButton;