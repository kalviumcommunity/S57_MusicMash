import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Nav = () => {
  return (
    <>
      <div className=' w-full h-[10%] flex justify-center'>
        <div className=' flex gap-x-6 p-3'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export const Music = () => {
  const [datas, setDatas] = useState(null)
  useEffect(() => {
    const datasas = async () => {
      const app = await axios.get('http://localhost:3000/songs')
      const { data } = app
      console.log(data)
      setDatas(data)
    }
    datasas()
  }, [])

  return (
    <>
      {datas && datas.map((data, index) => (
        <div className=' p-1 h-24 w-64  border rounded-xl flex  gap-x-3'>
          <img src={datas.image} className=' w-2/5 h-full border rounded-xl' />
          <div className=' flex flex-col gap-y-3 w-full flex-1 '>
            <p className=' text-[15px] font-bold'>{datas.song || 'yayuya'}</p>
            <div className=' flex flex-col gap-y-3'>
              <p className=' text-[12px] font-medium'>{datas.singer || 'jytjkg'}</p>
              <p className=' text-[12px]'>{datas.popularity || 'aidyiky'}</p>
            </div>

          </div>
        </div>
      ))}
    </>

  )
}
const Home = ({ props }: any) => {
  return (
    <div className=' w-full h-screen'>
      <Nav />
      <div className=' w-full h-[90%] flex flex-col gap-y-3'>
        <h2 className=' px-6 text-[24px] '>
          Hey , {props}
        </h2>
        <div className=' w-full h-full px-3 flex flex-wrap justify-evenly'>
          <Music />
        </div>
      </div>
    </div>
  )
}

export default Home