import { createStyles, makeStyles } from '@mui/styles';

import { Landing } from "../components/Landing";
import { Info } from '../components/Info';
import { Goals } from '../components/Goals';
import logo from '../assets/logo.png';
import discord from '../assets/logo/discord.svg';
import twitter from '../assets/logo/twitter.svg';
import opensea from '../assets/logo/opensea.svg';
import { Rarity } from '../components/Rarity';

export const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.navbar}>
                <div className={classes.container}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <div className={classes.nav}>
                        <ul className={classes.menulist}>
                            <li className={classes.menuitem}>Welcome</li>
                            <li className={classes.menuitem}>Goals</li>
                            <li className={classes.menuitem}>Rarity</li>
                            <li className={classes.menuitem}>Team</li>
                            <li className={classes.menuitem}>Faq</li>
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
                <Landing />
                <Info />
                <Goals />
                <Rarity />
            </div>
            {/* Main Page */}
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
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
            margin: '0 45px',
        },
        logo: {
            width: '67px',
            height: 'auto',
        },
        nav: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            width: 'calc(100% - 67px)'
        },
        menulist: {
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: '11px',
            fontWeight: '700',
            fontFamily: 'inter',
            paddingLeft: '38px',
            width: '80%',
            textTransform:'uppercase'
        },
        menuitem: {
            marginRight: '30px',
            listStyle: 'none',
            cursor: 'pointer',
            letterSpacing: '1.2px'
        },
        sociallist: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '-10px'
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