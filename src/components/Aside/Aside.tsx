import React from 'react'
import { songsArr } from '../../constants';
import { AsideProps } from '../../helpers/types';

const Aside = ({ currentSong, setCurrentSong }: AsideProps) => {
  return (
    <div className='font-[Poppins] font-thin text-[22px] opacity-75 ml-7'>
        {songsArr.map(song => (
            <div className='mb-7 hover:cursor-pointer hover:translate-x-[15px] duration-200' onClick={() => setCurrentSong(song.songId)}>
                {
                    song.songId === currentSong
                    ? <span className='font-normal'><span>{song.songName}</span><span > - </span><span>{song.artistName}</span></span>
                    : <><span>{song.songName}</span><span> - </span><span>{song.artistName}</span></>
                }          
            </div>
        ))}
    </div>
  )
}

export default Aside;