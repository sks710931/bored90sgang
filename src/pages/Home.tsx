/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';

import { Landing } from "../components/Landing";
import { Info } from '../components/Info';
import { Goals } from '../components/Goals';
import { Rarity } from '../components/Rarity';
import { Meet } from '../components/Meet';
import logo from '../assets/logo.png';
import discord from '../assets/logo/discord.svg';
import twitter from '../assets/logo/twitter.svg';
import opensea from '../assets/logo/opensea.svg';
import { Teams } from '../components/Teams';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';  

export const Home = () => {
    const classes = useStyles();
    const welcomeRef = React.useRef<HTMLDivElement>(null);
    const goalsRef = React.useRef<HTMLDivElement>(null);
    const rareRef = React.useRef<HTMLDivElement>(null);
    const teamRef = React.useRef<HTMLDivElement>(null);
    const faqRef = React.useRef<HTMLDivElement>(null);

    const executeScroll = (reff: React.RefObject<HTMLDivElement>) => {
        if (reff.current) {
            reff.current.scrollIntoView({
                behavior: "smooth",
              });
          }
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.navbar}>
                <div className={classes.container}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <div className={classes.nav}>
                        <ul className={classes.menulist}>
                            <li className={classes.menuitem} onClick={() => executeScroll(welcomeRef)}>Welcome</li>
                            <li className={classes.menuitem} onClick={() => executeScroll(goalsRef)}>Roadmap</li>
                            <li className={classes.menuitem} onClick={() => executeScroll(rareRef)}>Rarity</li>
                            <li className={classes.menuitem} onClick={() => executeScroll(teamRef)}>Team</li>
                            <li className={classes.menuitem} onClick={() => executeScroll(faqRef)}>Faq</li>
                        </ul>
                        <ul className={classes.sociallist}>
                            <li className={classes.socialitem}>
                                <img src={opensea} className={classes.socialicon} alt="opensea"/>
                            </li>
                            <li className={classes.socialitem}>
                                <img src={twitter} className={classes.socialicon} alt="twitter"/>
                            </li>
                            <li className={classes.socialitem}>
                                <img src={discord} className={classes.socialicon} alt="discord"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{display:'block'}}>
                <div ref={welcomeRef}>
                    <Landing />
                </div>
                <Info />
                <div ref={goalsRef}>
                    <Goals />
                </div>
                <div ref={rareRef}>
                    <Rarity />
                </div>
                <div ref={teamRef}>
                    <Meet />
                </div>
                <Teams />
                <div ref={faqRef}>
                    <Faq />
                </div>
            </div>
            <Footer />
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            minWidth: '380px',
            overflow: 'hidden',
            position: 'relative',
            maxHeight: '100000px',
            color: '#989898',
            backgroundColor:'#000',
        },
        navbar: {
            position: 'absolute',
            padding: '30px 0 30px 0',
            left: 0,
            right: 0,
            top: 0,
            width: '100%',
            zIndex: '999'
        },
        container:{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '0 30px 0 30px',
            maxWidth: '1350px',
            margin: '0 auto',
        },
        logo: {
            width: '67px',
            height: 'auto',
            cursor: "pointer"
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flex: 1,
            ['@media (max-width:768px)']: {
                justifyContent: 'end'
            }
        },
        menulist: {
            color: '#000',
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: '11px',
            fontWeight: '700',
            fontFamily: 'inter',
            paddingLeft: '38px',
            width: 'calc(80% - 38px)',
            ['@media (max-width:768px)']: {
                display: 'none'
            }
        },
        menuitem: {
            marginRight: '30px',
            listStyle: 'none',
            cursor: 'pointer',
            letterSpacing: '1.2px',
            fontFamily: "Holiday",
            fontSize: 20,
            color: "white"
        },
        sociallist: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '-10px',
        },
        socialitem: {
            marginRight: '10px',
            listStyle: 'none',
        },
        socialicon: {
            border: 'none',
            verticalAlign: 'top',
            maxWidth: '100%',
            height: 'auto'
        }
    })
)