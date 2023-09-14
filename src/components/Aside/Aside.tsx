import React from 'react'
import { songsArr } from '../../constants';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { RootState } from '../../redux/store';
import { setCurrentSong } from '../../redux/slices';

const Aside = () => {
  const currentSong = useSelector<RootState, number>(state => state.main.currentSong);
  const dispatch = useDispatch();

  return (
    <div className='font-[Poppins] font-thin text-[22px] text-center opacity-75 px-8'>
        {songsArr.map(song => (
            <div key={song.songId} className='leading-10 mb-7 hover:cursor-pointer duration-200 md:hover:translate-x-[4px]' onClick={() => dispatch(setCurrentSong(song.songId))}>
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