import React from 'react'
import { songsArr } from '../../constants';
import { AsideProps } from '../../helpers/types';

const Aside = ({ currentSong, setCurrentSong }: AsideProps) => {
  return (
    <div className='font-[Poppins] font-thin text-[22px] text-center opacity-75 px-8'>
        {songsArr.map(song => (
            <div className='leading-10 mb-7 hover:cursor-pointer duration-200 md:hover:translate-x-[4px]' onClick={() => setCurrentSong(song.songId)}>
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