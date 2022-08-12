function Comment({ comment: {user, comment} }) {
  return (
    <div>
      <h3>{user}</h3>
      <div>{comment}</div>
    </div>
  )
}

export default Comment; 