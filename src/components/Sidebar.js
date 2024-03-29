import React from 'react'
import "./Sidebar.css"
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {

  const dispatch = useDispatch();


  return (
    <div className='sidebar'>
      <Button 
        startIcon={<AddIcon font-size="large" />} 
        className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title='Starred' number={54} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
      <SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />
      <SidebarOption Icon={NearMeIcon} title='Sent' number={54} />
      <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

      <div className='sidebar__footer'>
        <IconButton>
          <PersonIcon/>
        </IconButton>
        <IconButton>
          <DuoIcon/>
        </IconButton>
        <IconButton>
          <LocalPhoneIcon/>
        </IconButton>
      </div>

    </div>
  )
}

export default Sidebar;