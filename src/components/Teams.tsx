import { createStyles, makeStyles } from '@mui/styles';

import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import discord from "../assets/logo/discord.svg";
import twitter from "../assets/logo/twitter.svg";

export const Teams = () => {
    const classes = useStyles();

    const item = (
        image: string | undefined,
        title: {} | null | undefined,
        tcolor: string,
        name: {} | null | undefined,
        desc1: {} | null | undefined,
        desc2: {} | null | undefined) => {
        return (
            <div className={classes.item}>
                <div className={classes.slide}>
                    <img src={image} className={classes.img} alt=""/>
                    <div className={classes.title} style={{color: tcolor}}>{title}</div>
                    <div className={classes.heading}>{name}</div>
                    <div className={classes.desc}>{desc1} <br/> {desc2}</div>
                    <ul className={classes.social}>
                        <li>
                            <img src={discord} alt="" className={classes.discord}/>
                        </li>
                        <li>
                            <img src={twitter} className={classes.twitter} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.posts}>
                    {item(p1, "Boss", '#a3e869', 'Lokii', 'Co-founder and father', 'of the Baby Ghosts')}
                    {item(p2, "The crpto expert", "#ff705c", '0XBAGUETTE', 'Co-founder and father', 'of the Baby Ghosts')}
                    {item(p3, "THE ARTIST", "#41ada7", 'CHARLES', 'Creator and God',' of the Baby Ghosts')}
                    {item(p1, "Boss", '#a3e869', 'Lokii', 'Co-founder and father', 'of the Baby Ghosts')}
                    {item(p2, "The crpto expert", "#ff705c", '0XBAGUETTE', 'Co-founder and father', 'of the Baby Ghosts')}
                    {item(p3, "THE ARTIST", "#41ada7", 'CHARLES', 'Creator and God',' of the Baby Ghosts')}
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            paddingTop: '40px',
            paddingBottom:'70px',
            position:'relative',
            zIndex: '20',
            minHeight: '600px'
        },
        container: {
            maxWidth: '1375px',
            position: 'relative',
            zIndex: '4',
            padding: '0 20px',
            margin: '0 auto',
        },
        posts: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: 0,
            textAlign: 'center'
        },
        item: {
            marginBottom: '70px',
            padding: '0 15px',
            width: '30%'
        },
        slide: {
            maxWidth: '280px',
            margin: '0 auto',
            textAlign: 'center'
        },
        img:{
            width: '140px',
            marginBottom: '18px',
            minHeight: '220px',
            alignItems: 'center'
        },
        title: {
            marginBottom: '11px',
            fontSize: '12px',
            fontWeight: '700',
            textTransform:'uppercase',
            letterSpacing:'2.2px'
        },
        heading: {
            fontSize: '48px',
            marginBottom: '9px',
            color: '#fff',
            fontWeight: '400',
            textTransform:'uppercase',
            lineHeight:'1.088'
        },
        desc: {
            marginBottom: '14px',
            textAlign: 'center'
        },
        social: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems:'center',
            listStyle: 'none',
            paddingLeft: '0px'
        },
        discord:{cursor: 'pointer', paddingRight: '15px'},
        twitter: {cursor: 'pointer'}
    })
)