export type timeFormat = 'total' | 'left';

export type songInfo = {
    songSource: any,
    songName: string,
    artistName: string,
    songId: number,
    pictureSource: any,
}

export type AsideProps = {
    currentSong: number,
    setCurrentSong: (newCurrentSong: number) => void;
}

export type MainProps = {
    currentSong: number,
    setCurrentSong: (newCurrentSong: number) => void;
}

export type AppState = {
    currentSong: number,
    isPlaying: boolean,
    timeInput: number,
    volume: number,
    timeFormat: 'left' | 'total',
    isMuted: boolean,
    lastVolume: number,
}