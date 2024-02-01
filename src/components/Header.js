import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header__left' >
        <IconButton >
          <MenuIcon/>
        </IconButton>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67sSlt0mXyUSICtBiwidtvglgZV8q1pq8kXVCdPZ-0jRQfXXxwdkzgXmCEjRPtNAZtnw&usqp=CAU' alt='gmail logo'/>

      </div>

      <div className='header__middle'>
        <SearchIcon />
        <input placeholder='Search mail' type='text'/>
        <ArrowDropDownIcon className='header__inputCarpet' />

      </div>

      <div className='header__right'>
        <IconButton >
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />

      </div>
      

    </div>
  )
}

export default Header;