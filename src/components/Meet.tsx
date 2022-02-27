/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';

import teambg from "../assets/teambg.png";
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';

export const Meet = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.wrap}>
                    <img src={teambg} alt="" className={classes.bg}/>
                    <span className={classes.title}>Behind the scenes!</span>
                    <div className={classes.heading}>MEET</div>
                    <div className={classes.heading}>THE TEAM</div>
                </div>
            </div>
            <div className={classes.ghosts}>
                <div className={classes.ghost1}>
                    <img src={team1} style={{width:'100%', height:'auto'}} alt=""/>
                </div>
                <div className={classes.ghost2}>
                    <img src={team2} style={{width:'100%', height:'auto'}} alt=""/>
                </div>
                <div className={classes.ghost1}>
                    <img src={team3} style={{width:'100%', height:'auto'}} alt=""/>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            paddingTop: '60px',
            paddingBottom: '70px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            minHeight: '740px',
            ['@media (max-width:7680px)']: {
                minHeight: '440px',
            }
        },
        container: {
            padding: '0 20px',
            margin: '0 auto'
        },
        wrap: {
            paddingTop: '60px'
        },
        bg: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-150px',
            zIndex: -1,
            width: '100%',
            height: 'auto',
            ['@media (max-width:800px)']: {
                top: '-110px',
                width: 'auto',
                objectFit: 'cover',
                maxHeight: '600px',
            }
        },
        title: {
            marginBottom: '21px',
            color:'#949494',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '2.4px',
            fontWeight: '700'
        },
        heading: {
            fontFamily: 'Holiday',
            marginTop: '10px',
            fontSize: '74px',
            color:'#fff',
            fontWeight: '400',
            textTransform:'uppercase',
            letterSpacing:'2.2px',
            ['@media (max-width:768px)']: {
                fontSize: '30px',
            }
        },
        ghosts: {
            marginTop: '-20px',
            marginBottom: '29px',
            transform:'none',
            display:'flex',
            flexWrap:'wrap',
            alignItems:'flex-end',
            justifyContent:'center',
        },
        ghost1: {
            opacity:1,
            animation:`$dance 4s ease-in-out infinite`,
            width: '300px',
            position:'relative',
            zIndex:3,
            transition:'opacity .5s ease-in-out,transform .5s ease-in-out,-webkit-transform .5s ease-in-out',
            ['@media (max-width:768px)']: {
                width: '168px',
            }
        },
        ghost2: {
            opacity:1,
            animation:`$dance 4s ease-in-out infinite`,
            width: '340px',
            position:'relative',
            zIndex:4,
            margin:'0 -104px 0 -104px',
            transition:'opacity .5s ease-in-out,transform .5s ease-in-out,-webkit-transform .5s ease-in-out',
            ['@media (max-width:768px)']: {
                width: '180px',
            }
        },
        "@keyframes dance": {
            "0%": {
              transform: "translatey(0px)"
            },
            "50%": {
                transform: "translatey(-40px)"
            },
            "100%": {
              transform: "translatey(0px)"
            }
        },
    })
)