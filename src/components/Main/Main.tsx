import React, { useRef, useState } from 'react';
import { secondsToTime } from '../../helpers';
import Buttons from './Buttons/Buttons';
import { songsArr } from '../../constants';
import volumeIcon from '../../assets/images/volume.svg'
import volumeOffIcon from '../../assets/images/volumeOff.svg'
import { MainProps, timeFormat } from '../../helpers/types';



const Main = ({ currentSong, setCurrentSong}:MainProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeInput, setTimeInput] = useState<number>(0)
  const [volume, setVolume] = useState<number>(40)
  const [timeFormat, setTimeFormat] = useState<timeFormat>('left') // left | total
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleIsPlaying = () => {
    if(isPlaying){
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  const onVolumeInputChange = (newValue: string) => { // поменять громкость через инпут
    audioRef.current!.volume = +newValue / 100;
    setVolume(+newValue);
    if(+newValue) //если изменить громкость когда в муте, выйти из мута
    {
      setIsMuted(false);
    } 
    else //если сделать громкость на ноль, то замутить
    {
      setIsMuted(true);
    }
  }

  const onTimeInputChange = (inputValue: string) => { // при изменении инпута, меняем время в аудио теге
    audioRef.current!.currentTime = +inputValue / 100 * audioRef.current!.duration;
  }

  const onTimeChange = (newValue: number) => { // когда время в аудио изменяется меняем стейт
    setTimeInput(newValue * 100 / audioRef.current!.duration)
  }

  const onNextSong = () => {
    if(currentSong < songsArr.length - 1)
      setCurrentSong(currentSong + 1);
    audioRef.current!.currentTime = 0;
    setTimeInput(0);
  }

  const onPrevSong = () => {
    if(currentSong >= 1)
      setCurrentSong(currentSong - 1);
    audioRef.current!.currentTime = 0;
    setTimeInput(0);
  }

  const onMute = () => {
    setIsMuted(true);
    audioRef.current!.volume = 0;
    setVolume(0);
  }

  const onUnmute = () => {
    setIsMuted(false);
    audioRef.current!.volume = 50 / 100;
    setVolume(50);
  }

  return (
    <div className='Main'>
      <div className='AlbumCover'>
        <img src={songsArr[currentSong].pictureSource} alt="album cover" />
      </div>
      <div className='SongName'>{songsArr[currentSong].songName}</div>
      <div className='ArtistName'>{songsArr[currentSong].artistName}</div>


      <audio 
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
          ? <span className='hover:cursor-pointer' onClick={() => setTimeFormat('total')}>-{secondsToTime(audioRef.current?.duration - audioRef.current?.currentTime)}</span>
          : <span className='hover:cursor-pointer' onClick={() => setTimeFormat('left')}>{secondsToTime(audioRef.current?.duration)}</span>
        : <span>-{secondsToTime(audioRef.current?.duration)}</span>
        }
      </div>
      <input type="range" className='range' value={timeInput} onChange={e => onTimeInputChange(e.target.value)}/>

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
  )
}

export default Main