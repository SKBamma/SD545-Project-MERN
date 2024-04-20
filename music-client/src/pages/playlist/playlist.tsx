import Header from './Header/header';
import Musiclist from './Music-list/musiclist';
import FavoriteMusic from './Favorites-music/favorite.music';
import MusicPlayer from './Music-player/music.player';

import './playlist.css';

export default function Playlist() {

    return (
        <div className='border-line'>
            <Header />
            <br />
            <hr className='breakline' />
            <Musiclist />
            <br />
            <FavoriteMusic />
            <br />
            <MusicPlayer />
        </div >
    );
}




