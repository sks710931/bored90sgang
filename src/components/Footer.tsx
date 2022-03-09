/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';

import logo from '../assets/logo.png';
import overlay from '../assets/overlay.png';
import discord from '../assets/logo/discord.svg';
import twitter from '../assets/logo/twitter.svg';
import opensea from '../assets/logo/opensea.svg';
import { useNavigate } from 'react-router';

export const Footer = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div className={classes.wrapper}>
            <div className={classes.block}>
                <div className={classes.bg}></div>
                <div className={classes.container}>
                    <img onClick={() => navigate("/")} src={logo} className={classes.logo} alt="logo"/>
                    <ul className={classes.footerbtns}>
                        
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
            <div className={classes.terms}>
                <ul className={classes.copyright}>
                    <li className={`${classes.bottom} ${classes.left}`}>
                        Copyright © Bored 90s Gangs
                    </li>
                    <li className={`${classes.bottom} ${classes.center}`} style={{color:'#fff',}}>
                        Terms of Use
                    </li>
                    <li  className={`${classes.bottom} ${classes.right}`}>
                        All Rights Reserved
                    </li>
                </ul>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        left:{
            textAlign: "left!important" as any,
            ['@media (max-width:768px)']: {
                textAlign: "center!important" as any,
            },
        },
        center:{
            textAlign: "center!important" as any,
            ['@media (max-width:768px)']: {
                textAlign: "center!important" as any,
            },
        },
        right:{
            textAlign: "right!important" as any,
            ['@media (max-width:768px)']: {
                textAlign: "center!important" as any,
            },
        },
        wrapper: {
            position: 'relative',
            textAlign:'center',
            zIndex: 1,
            backgroundColor: 'black'
        },
        block: {
            padding: '19px 0',
            position:'relative',
            zIndex:20,
        },
        bg:{
            background: `url(${overlay})`,
            opacity: '0.19',
            position:'absolute',
            top:0,
            right:0,
            left:0,
            bottom:0,
            width: '100%',
            height: '100%',
            zIndex: '-1'
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            maxWidth: '1170px',
            margin: '0 auto',
            padding: '0 20px',
            ['@media (max-width:768px)']: {
                maxWidth: '200px',
                justifyContent: 'center'
            },
        },
        logo: {
            width: '59px',
            height: 'auto',
            cursor: "pointer"
        },
        footerbtns: {
            flex:1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            listStyle: 'none',
            ['@media (max-width:768px)']: {
                paddingInlineStart: '0px'
            },
        },
        btns: {
            minWidth: '170px',
            fontSize: '13px',
            display: 'flex',
            color: '#fff',
            marginRight: '10px',
            marginBottom: '10px',
            textTransform: 'uppercase',
            fontWeight: '400',
            border: '1px solid #5579fe',
            padding: '9px 8px',
            position: 'relative',
            letterSpacing: '0.9px',
            borderRadius: '36px',
            justifyContent:'center',
        },
        sociallist: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '-10px',
            ['@media (max-width:768px)']: {
                paddingInlineStart: '0px'
            },
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
        },
        terms: {
            textAlign: 'center',
            maxWidth: '1170px',
            padding: '20px 0px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            ['@media (max-width:768px)']: {
                width: '150px',
                flexDirection: 'column',
            },
        },
        copyright: {
            // display: 'flex',
            // flexWrap: 'wrap',
            fontSize: '12px',
            color: '#888',
            fontWeight: '500',
            lineHeight: '1.444',
            listStyle: 'none',
            paddingLeft:'0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100%",
            flexDirection: 'row',
            ['@media (max-width:768px)']: {
                flexDirection: 'column',
            },
            '& li':{
                cursor: "pointer",
            }
        },
        bottom: {
            textAlign:'left',width:'33.33%',
            ['@media (max-width:768px)']: {
                width: '100%',
                textAlign: 'center',
                marginBottom: '10px'
            },
        }
    }))