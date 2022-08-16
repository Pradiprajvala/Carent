import React from 'react'
import '../styles/Header.css'
import CarentLogo from '../assets/CarentLogo.svg'
import { Avatar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

import av1 from '../assets/avatars/profil.png'
import av2 from '../assets/avatars/Profill-1.png'
import av3 from '../assets/avatars/Profill.png'

const Header = () => {
  return (
    <div className="header">
        <img className="header__logo" src={CarentLogo} />
        <div className='header__content'>
            <div className="header__middle">
                <div className="search__container">
                    <SearchIcon sx={{ fontSize: 24 }}/>
                    <input className='header__search' type="text" placeholder='Search something here'/>
                    <TuneIcon sx={{ fontSize: 24 }}/> 
                </div>
            </div>
            <div className='header__right'>
                <FavoriteIcon sx={{ fontSize: 24 }} className='header__feature' />
                <NotificationsIcon sx={{ fontSize: 24 }} className='header__feature'/>
                <SettingsIcon sx={{ fontSize: 24 }} className='header__feature'/>
                <img src={av1} className='header__avatar' />
            </div>  
        </div>  
    </div>
  )
}

export default Header