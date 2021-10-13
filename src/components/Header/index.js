import React from 'react';
import { Menu,Image,Button, Icon } from 'semantic-ui-react';
import logo from '../../assects/images/logo.svg';

const Header = () => {
    return (
        <Menu secondary pointing>
            <Image src={ logo } width={60}/>
            <Menu.Item style={{ fontSize:24 }}>TrulyContacts</Menu.Item>
            <Menu.Item position='right'>Create Contacts</Menu.Item>
            <Menu.Item >Logout</Menu.Item>

            <Button icon>
                <Icon name='add'></Icon>
                Create Contact
            </Button>


        </Menu>
    );
};

export default Header;
