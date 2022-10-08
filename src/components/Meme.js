import React from 'react'

const Meme = () => {
  return (
    <main>
      <form className="meme-form">
          <input
            className="meme-input"
            type="text"
            name="top-text"
            placeholder="Top Text"
            required
          />
          <input
            className="meme-input"
            type="text"
            name="bottom-text"
            placeholder="Bottom Text"
            required
          />
        <button className="meme-button" type="submit">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  )
}

export default Meme
