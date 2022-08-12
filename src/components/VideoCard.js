

function VideoCard ({title, views, createdAt}) {
  //console.log(props)
  return (
    <div>
    <h1>{title}</h1>
    <p>{views} Views | Uploaded {createdAt}</p>
    </div>
  );
}

export default VideoCard;