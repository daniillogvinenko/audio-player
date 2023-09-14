import { createSlice } from '@reduxjs/toolkit/dist'
import { AppState, timeFormat } from '../helpers/types'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState:AppState = {
    currentSong: 0,
    isPlaying: false,
    timeInput: 0,
    volume: 40,
    timeFormat: 'left',
    isMuted: false,
    lastVolume: 0,
}

const toolkitSlice = createSlice({
    name: 'mainSlice',
    initialState: initialState,
    reducers: {
        setCurrentSong(state, action: PayloadAction<number>){
            state.currentSong = action.payload;
        },
        setIsPlaying(state, action: PayloadAction<boolean>){
            state.isPlaying = action.payload;
        },
        setTimeInput(state, action: PayloadAction<number>){
            state.timeInput = action.payload;
        },
        setVolume(state, action: PayloadAction<number>){
            state.volume = action.payload;
        },
        setTimeFormat(state, action: PayloadAction<timeFormat>){
            state.timeFormat = action.payload;
        },
        setIsMuted(state, action: PayloadAction<boolean>){
            state.isMuted = action.payload;
        },
        setLastVolume(state, action: PayloadAction<number>){
            state.lastVolume = action.payload;
        }
    }
})

export default toolkitSlice.reducer;
export const { setCurrentSong, setIsMuted, setIsPlaying, setLastVolume, setTimeFormat, setTimeInput, setVolume } = toolkitSlice.actions;