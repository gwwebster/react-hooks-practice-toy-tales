import React from "react";

function ToyCard({ toy, onDelete, onLike }) {

  const {id, name, image, likes} = toy;

  function handleClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(r => r.json())
    .then(updatedToy => onLike(id, updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} {likes === 1 || likes === -1 ? "Like" : "Likes"}</p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
