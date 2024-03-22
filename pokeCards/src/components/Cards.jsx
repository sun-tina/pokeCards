import { useEffect, useState } from 'react'

export default function Cards() {

  const [img, setImg] = useState(null)

  useEffect(() => {
    fetchImg()
  }, [])

  async function fetchImg() {
    const url = new URL('https://pokeapi.co/api/v2/pokemon?limit=151')
    console.log(url.toString())
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setImg(data)
  }

  return !!img && <img src={data.url.forms.url.sprites.front_default} className='poke-img' />
}
