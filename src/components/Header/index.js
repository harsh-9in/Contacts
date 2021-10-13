import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return (
        <Menu secondary>
            <Menu.Item>TrulyContacts</Menu.Item>
            <Menu.Item>Create Contacts</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
        </Menu>
    );
};

export default Header;
