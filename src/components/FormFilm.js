import './FormFilm.css'
import React, {useState} from 'react'

export default function FormFilm() {
  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState('')
  const [comment, setComment] = useState('')

  const submitForm = (e) =>  {
    e.preventDefault()
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, poster, comment}),
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";
    fetch(url,config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`The movie has add with success`);
        }
      })
      .catch(e => {
        console.log(e);
        alert('There was an error when adding the employee.');
      });
  }

  
  return (
    <div className="FormEmployee">
      <h1>Movie your hobby</h1>

      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Information</legend>
          <div className="form-data">
          <label htmlFor="title">Name of movie</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="form-data">
          <label htmlFor="poster">Link to the movie</label>
          <input
            type="text"
            id="poster"
            name="poster"
            onChange={(e) => setPoster(e.target.value)}
            value={poster}
            />
          </div>

          <div className="form-data">
            <label htmlFor="comment">Type your comment</label>
            <textarea
              type="comment"
              id="comment"
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
    </div>
  )}