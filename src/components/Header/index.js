import React from 'react';
import { Menu,Image,Button, Icon } from 'semantic-ui-react';
import logo from '../../assects/images/logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Menu secondary pointing>
            <Image src={ logo } width={60}/>
            <Menu.Item style={{ fontSize:24 }} as={Link} to='/'>TrulyContacts</Menu.Item>
            <Menu.Item position='right'>
                <Button as={Link} to='/contacts/create' primary basic icon>
                    <Icon name='add'></Icon>
                    Create Contact
                </Button>
            </Menu.Item>
            <Menu.Item >
                <Button basic color='red' icon>
                    <Icon name='log out'></Icon>
                    Logout
                </Button>
            </Menu.Item>

            
        </Menu>
    );
};

export default Header;
