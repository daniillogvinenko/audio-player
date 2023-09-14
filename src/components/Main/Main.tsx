import React, { useRef } from 'react';
import { secondsToTime } from '../../helpers';
import Buttons from './Buttons/Buttons';
import { songsArr } from '../../constants';
import volumeIcon from '../../assets/images/volume.svg'
import volumeOffIcon from '../../assets/images/volumeOff.svg'
import { timeFormat } from '../../helpers/types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { RootState } from '../../redux/store';
import { setCurrentSong, setIsMuted, setIsPlaying, setLastVolume, setTimeFormat, setTimeInput, setVolume } from '../../redux/slices';



const Main = () => {

  const currentSong = useSelector<RootState, number>(state => state.main.currentSong);
  const isPlaying = useSelector<RootState, boolean>(state => state.main.isPlaying);
  const timeInput = useSelector<RootState, number>(state => state.main.timeInput);
  const volume = useSelector<RootState, number>(state => state.main.volume);
  const timeFormat = useSelector<RootState, timeFormat>(state => state.main.timeFormat);
  const isMuted = useSelector<RootState, boolean>(state => state.main.isMuted);
  const lastVolume = useSelector<RootState, number>(state => state.main.lastVolume);
  const dispatch = useDispatch();


  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleIsPlaying = () => {
    if(isPlaying){
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    dispatch(setIsPlaying(!isPlaying));
  }

  const onVolumeInputChange = (newValue: string) => { // поменять громкость через инпут
    audioRef.current!.volume = +newValue / 100;
    dispatch(setVolume(+newValue));
    if(+newValue) //если изменить громкость когда в муте, выйти из мута
    {
      dispatch(setIsMuted(false));
    } 
    else //если сделать громкость на ноль, то замутить
    {
      dispatch(setIsMuted(true));
    }
  }

  const onTimeInputChange = (inputValue: string) => { // при изменении инпута, меняем время в аудио теге
    audioRef.current!.currentTime = +inputValue / 100 * audioRef.current!.duration;
  }

  const onTimeChange = (newValue: number) => { // когда время в аудио изменяется меняем стейт
    dispatch(setTimeInput(newValue * 100 / audioRef.current!.duration));
  }

  const onNextSong = () => {
    if(currentSong < songsArr.length - 1)
    dispatch(setCurrentSong(currentSong + 1));
    audioRef.current!.currentTime = 0;
    dispatch(setTimeInput(0));
  }

  const onPrevSong = () => {
    if(currentSong >= 1)
    dispatch(setCurrentSong(currentSong - 1));
    audioRef.current!.currentTime = 0;
    dispatch(setTimeInput(0));
  }

  const onMute = () => {
    dispatch(setLastVolume(volume));
    dispatch(setIsMuted(true));
    audioRef.current!.volume = 0;
    dispatch(setVolume(0));
  }

  const onUnmute = () => {
    dispatch(setIsMuted(false));
    audioRef.current!.volume = lastVolume / 100;
    dispatch(setVolume(lastVolume));
  }

  return (
    <div className='Main'>
      <div className='AlbumCover'>
        <img src={songsArr[currentSong].pictureSource} alt="album cover" />
      </div>
      <div className='SongName'>{songsArr[currentSong].songName}</div>
      <div className='ArtistName'>{songsArr[currentSong].artistName}</div>


      <audio 
        muted = {isMuted}
        controls = {false} 
        onTimeUpdate={e => onTimeChange(e.currentTarget.currentTime)} 
        ref={audioRef} 
        loop 
        src={songsArr[currentSong].songSource}
      />

      <div className='flex justify-between font-extralight mb-2'>
        <span>{secondsToTime(audioRef.current?.currentTime)}</span>
        {audioRef.current?.duration && audioRef.current.currentTime 
        ? timeFormat === 'left'
          ? <span className='hover:cursor-pointer' onClick={() => dispatch(setTimeFormat('total'))}>-{secondsToTime(audioRef.current?.duration - audioRef.current?.currentTime)}</span>
          : <span className='hover:cursor-pointer' onClick={() => dispatch(setTimeFormat('left'))}>{secondsToTime(audioRef.current?.duration)}</span>
        : <span>-{secondsToTime(audioRef.current?.duration)}</span>
        }
      </div>
      <input type="range" className='range' value={timeInput} onChange={e => onTimeInputChange(e.target.value)}/>

      <div className='items-center justify-between'>
        <div className='VolumeInput'>
          {isMuted
          ? <img onClick={onUnmute} width={20} height={20} className='mr-6 hover:cursor-pointer' src={volumeOffIcon} alt="unmute" />
          : <img onClick={onMute} width={20} height={20} className='mr-6 hover:cursor-pointer' src={volumeIcon} alt="mute" />
          }
          
          <input type="range" className='range' value={volume} onChange={e => onVolumeInputChange(e.target.value)}/>
        </div>
        <Buttons
          isPlaying = {isPlaying}
          toggleIsPlaying = {toggleIsPlaying}
          onNextSong = {onNextSong}
          onPrevSong = {onPrevSong}
        />
      </div>
    </div>
  )
}

export default Main