import React from "react";
import classes from './Technologies.module.css';

const Technologies = () => {
    const technologiesArr = [
        {
            technology: 'React',
        },
        {
            technology: 'React-Native',
        },
        {
            technology: 'MongoDB',
        },
        {
            technology: 'Django',
        },
        {
            technology: 'Python',
        },
        {
            technology: 'React',
        },
        {
            technology: 'React-Native',
        },
        {
            technology: 'MongoDB',
        },
        {
            technology: 'Django',
        },
        {
            technology: 'Python',
        },
    ]

    const techButtons = technologiesArr.map((item, pos) => {
        return(
            <div className={classes.ButtonContainer} key={pos}>
                <a href="/" className={classes.ButtonText}>{item.technology}</a>
            </div>
        );
    })

    return(
        <div className={classes.Container}>
            <p className={classes.Title}>Technologies I've worked with:</p>
            {techButtons}
        </div>
    );
}

export default Technologies;