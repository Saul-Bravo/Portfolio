import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <div className={classes.Header}>
            <div className={classes.Presentation}>
                <p className={classes.Title}>Hello There!</p>
                <p className={classes.Subtitle}>I'm Saúl Bravo<br/>Thank you for visiting my portfolio</p>
            </div>
            <div className={classes.HeaderButtons}>
                <a href='www.google.com' className={classes.HeaderButton}><p>Contact</p></a>
                <a href='www.google.com' className={classes.HeaderButton}><p>About Me</p></a>
            </div>
        </div>
    );
}

export default Header;