import React from 'react'
import { createUseStyles } from 'react-jss';
import Progress_bar from './ProgressBar';
import fb from '../assets/facebook.png';
import tw from '../assets/twitter.png';
import ig from '../assets/instagram.png';
import lin from '../assets/linkedin.png'
// import { Link } from 'react-scroll'
const styles = createUseStyles({
    wrapContact: {
        backgroundColor: '#a8bcbc'
    },
    sosmed: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        padding: {
            top: 20,
            bottom: 20
        }
    },
    iconn: {
        height: 40,
        width: 40,
        margin: {
            left: 10,
            right: 10
        }
    },
    teksfoot: {
        color: 'white',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20

    }

});

function Contact() {
    const classes = styles();
    return (
        <div id="contact" className={classes.wrapContact}>
            <div className={classes.sosmed}>
                <a href=''>
                    <img className={classes.iconn} src={fb} />
                </a>
                <a href=''>
                    <img className={classes.iconn} src={tw} />
                </a >
                <a href=''>
                    <img className={classes.iconn} src={ig} />
                </a>
                <a href=''>
                    <img className={classes.iconn} src={lin} />
                </a>
            </div>
            <div className={classes.teksfoot}>Created by Frinaldo Sinaga 2022</div>
        </div>
    )
}

export default Contact