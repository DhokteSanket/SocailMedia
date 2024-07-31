import React from 'react'
import "./topbar.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">socialMedia</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className='searchIcon'/>
          <input placeholder='search for the post' className="searchInput" />

        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItems">
            <PersonIcon />
            <span className="topbarIconBadge">
              1
            </span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItems">
            <ChatIcon />
            <span className="topbarIconBadge">
              2
            </span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItems">
            <NotificationsActiveIcon />
            <span className="topbarIconBadge">
              1
            </span>
          </div>

        </div>
        <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar
