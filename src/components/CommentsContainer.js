
import Comment from './Comment.js'

function CommentsContainer({ comments }) {


  return (
    <div>

      <div>
        <h2>{comments.length} Comments</h2>
        {comments.map(comment => 
          <Comment key = {comment.id} comment = {comment}  />)}
      </div>
    </div>
  );
}

export default CommentsContainer;