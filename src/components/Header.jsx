import React from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';

function Header() {
    return <header>
        <h1><EventNoteIcon className="eventNoteIcon"/>Keeper App</h1>
    </header>
}

export default Header;