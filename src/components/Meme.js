import React from 'react'
import memesData from '../data/memesData'

const Meme = () => {
  const [memeImage, setMemeImage] = React.useState('')
  const memesArray = memesData.data.memes

  const getNewImage = () => {
    const numOfMemes = () =>
      memesArray[Math.floor(Math.random() * memesArray.length)].url

    setMemeImage(numOfMemes)
  }

  
  return (
    <main>
      <div className="meme-form">
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
        <button className="meme-button" type="submit" onClick={getNewImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <img src={memeImage} alt="newImage" className="meme-img" />
    </main>
  )
}

export default Meme
