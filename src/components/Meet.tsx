/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';

import teambg from "../assets/team.jpg";
// import team1 from '../assets/ghost1.png';
// import team2 from '../assets/ghost2.png';
// import team3 from '../assets/ghost3.png';

export const Meet = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.wrap}>
                    <img src={teambg} alt="" className={classes.bg}/>
                    <span className={classes.title}>Behind the scenes!</span>
                    <div className={classes.heading}>Meet The Team</div>
                    {/* <div className={classes.heading}>The Team</div> */}
                </div>
            </div>
            
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            ['@media (max-width:7680px)']: {
                
            }
        },
        container: {
            margin: '0 auto'
        },
        wrap: {
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
            letterSpacing:'2.2px',
            ['@media (max-width:768px)']: {
                fontSize: '30px',
            }
        },
        
    })
)