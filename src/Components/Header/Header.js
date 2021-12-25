import { Button, NavDropdown, navbar, Navbar, Nav, Container } from 'react-bootstrap';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';

function Header() {
    return (
        <div className="" style={{ display: 'flex', justifyContent: 'space-between', padding:5}}>
            <div><img src={require('../../Assets/logo.png')} style={{ height: 40, weight: 40 }} /></div>
            <div style={{padding:5, marginLeft:10, flexDirection: 'column' }}>
                <Badge badgeContent={4} color='error'>
                    <ChatBubbleOutlineRoundedIcon style={{marginLeft:15}} />
                </Badge>
                <Badge badgeContent={10} color='error'>
                    <NotificationsIcon style={{marginLeft:15}} />
                </Badge>
                <span style={{marginLeft:15,width:34,height:34,borderRadius:17,backgroundColor:'#CFCFCF', padding:5, fontSize:10}}>MR</span>
            </div>
        </div>
    );
}

export default Header;





