import React from 'react'
import memesData from '../data/memesData'

const Meme = () => {
  const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  })

  const getMeme = (e) => {
    const numOfMemes =
      allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url
    const { name, value, type } = e.target

    setMeme((prev) => ({
      ...prev,
      randomImage: type === 'submit' ? numOfMemes : prev.randomImage,
      [name]: value,
    }))
  }
console.log(meme)
  const submitHandle = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <form onSubmit={submitHandle} className="meme-form">
        <input
          className="meme-input"
          type="text"
          name="topText"
          placeholder="Top Text"
          value={meme.topText}
          onChange={getMeme}
        />
        <input
          className="meme-input"
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={getMeme}
        />
        <button className="meme-button" type="submit" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </form>
      <p>{meme.topText}</p>
      <img src={meme.randomImage} alt="newImage" className="meme-img" />
      <p>{meme.bottomText}</p>
    </main>
  )
}

export default Meme
