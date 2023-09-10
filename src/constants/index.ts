import song1 from '../assets/audio/Have You Ever Seen The Rain.mp3';
import song2 from '../assets/audio/BADBADNOTGOOD - Confessions feat. Leland Whitty.mp3';
import song3 from "../assets/audio/Journey - Don't Stop Believin'.mp3"
import song4 from '../assets/audio/Diamonds & Wood.mp3'
import song5 from '../assets/audio/A Horse with No Name (2001 Remaster).mp3'
import song6 from '../assets/audio/Survivor - Burning Heart (Audio).mp3'

import pic1 from '../assets/album-covers/have you ever seen the rain.jpg'
import pic2 from '../assets/album-covers/confessions.jpg'
import pic3 from '../assets/album-covers/dont stop believin.jpg'
import pic4 from '../assets/album-covers/diamonds and wood.jpg'
import pic5 from '../assets/album-covers/horse with no name.jpg'
import pic6 from '../assets/album-covers/Burning_heart.jpg'

import { songInfo } from '../helpers/types';

export const songsArr:songInfo[] = [
    {songId: 0, songSource: song1, pictureSource: pic1, songName: 'Have You Ever Seen The Rain', artistName: 'Creedence clearwater revival'},
    {songId: 1, songSource: song2, pictureSource: pic2, songName: 'Confessions feat. Leland Whitty', artistName: 'BADBADNOTGOOD'},
    {songId: 2, songSource: song3, pictureSource: pic3, songName: "Don't Stop Believin", artistName: 'Journey'},
    {songId: 3, songSource: song4, pictureSource: pic4, songName: 'Diamonds & Wood', artistName: 'UGK'},
    {songId: 4, songSource: song5, pictureSource: pic5, songName: 'A Horse with No Name', artistName: 'America'},
    {songId: 5, songSource: song6, pictureSource: pic6, songName: 'Burning Heart', artistName: 'Survivor'},
]