import React from 'react'
import memesData from '../data/memesData'

const Meme = () => {
  const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)
  const [meme, setMeme] = React.useState({
    topText: 'Top text',
    bottomText: 'Bottom text',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  })

  const getMeme = () => {
    const numOfMemes =
      allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url

    setMeme((prev) => ({
      ...prev,
      randomImage: numOfMemes,
    }))
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
        <button className="meme-button" type="submit" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <p>{meme.topText}</p>
      <img src={meme.randomImage} alt="newImage" className="meme-img" />
      <p>{meme.bottomText}</p>
    </main>
  )
}

export default Meme
