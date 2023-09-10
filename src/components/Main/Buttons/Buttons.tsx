import React from 'react'
import prevButton from '../../../assets/images/prevButton.svg'
import nextButton from '../../../assets/images/nextButton.svg'
import playButton from '../../../assets/images/playButton.svg'
import stopButton from '../../../assets/images/stopButton.svg'


interface ButtonsProps {
    isPlaying: boolean,
    toggleIsPlaying: () => void,
    onNextSong: () => void,
    onPrevSong: () => void,

}

const Buttons = ({ isPlaying, toggleIsPlaying, onNextSong, onPrevSong }: ButtonsProps) => {
  return (
    <div className='mt-24 mb-6 h-12 w-[60%] ml-[50%] translate-x-[-50%] flex justify-between items-center font-[Poppins] text-[25px]'>
        <button onClick={onPrevSong} className='ControlButton'>
          <img width={40} height={40} src={prevButton} alt="" />
        </button>
        {isPlaying
        ? <button onClick={toggleIsPlaying} className='ControlButton'><img width={50} height={50} src={stopButton} alt="" /></button>
        : <button onClick={toggleIsPlaying} className='ControlButton'><img width={50} height={50} src={playButton} alt="" /></button>}
        <button onClick={onNextSong} className='ControlButton'><img width={40} height={40} src={nextButton} alt="" /></button>
    </div>
  )
}

export default Buttons