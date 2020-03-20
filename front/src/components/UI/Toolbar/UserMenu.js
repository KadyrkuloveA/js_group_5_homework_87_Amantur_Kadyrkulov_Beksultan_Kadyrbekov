import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
const UserMenu = ({user, logout, goToForm}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.username}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem onClick={goToForm}>
                    Add Post
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};
export default UserMenu;
