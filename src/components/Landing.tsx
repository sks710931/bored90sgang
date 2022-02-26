/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';

import ghost1 from '../assets/ghost1.png';
import ghost2 from '../assets/ghost2.png';
import ghost3 from '../assets/ghost3.png';
import bgvideo from '../assets/bg.mp4';

export const Landing = () => {
    const classes = useStyles();
    return (
        <section className={classes.banner}>
            <div className={classes.container}>
                <video autoPlay muted loop className={classes.bg}>
                    <source src={bgvideo} type="video/mp4" />
                </video>
                <div className={classes.grad}></div>
                <div className={classes.ghosts}>
                    <div className={classes.ghost1}>
                        <img src={ghost1} style={{width:'100%', height:'auto'}} alt=""/>
                    </div>
                    <div className={classes.ghost2}>
                        <img src={ghost2} style={{width:'100%', height:'auto'}} alt=""/>
                    </div>
                    <div className={classes.ghost1}>
                        <img src={ghost3} style={{width:'100%', height:'auto'}} alt=""/>
                    </div>
                </div>
                <div className={classes.form}>
                    <div className={classes.button}>
                        <span>
                            SOLD OUT - BUY ON OPENSEA
                        </span>
                    </div>
                    <span className={classes.formtxt}>
                        <span style={{color:"rgb(255, 98, 101)"}}>10,000</span> / 10,000 Minted
                    </span>
                </div>
            </div>
        </section>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        banner: {
            position: 'relative',
            padding: '146px 0 57px',
            zIndex: 1,
            ['@media (max-width:768px)']: {
                paddingBottom: '0px'
            }
        },
        container: {
            padding: '0 20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1350px',
            minHeight: '640px',
            maxHeight: '10000px',
            ['@media (max-width:768px)']: {
                minHeight: '540px'
            }
        },
        bg:{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            maxHeight: '920px',
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            objectFit: 'fill',
            ['@media (max-width:768px)']: {
                maxHeight: '720px',
            }
        },
        grad: {
            position: 'absolute',
            top: 0,
            left:0,
            right:0,
            bottom: 0,
            zIndex: 1,
            height: '100%',
            background:'linear-gradient(180deg,rgba(0,0,0,0) 0%,black 60%)',
            ['@media (min-width:1800px)']: {
                background:'linear-gradient(180deg,rgba(0,0,0,0) 0%,black 80%)',
            }
        },
        ghosts: {
            marginTop: '8%',
            marginBottom: '29px',
            transform:'none',
            display:'flex',
            alignItems:'flex-end',
            justifyContent:'center',
            paddingTop: '50px',
        },
        ghost1: {
            opacity:1,
            width: '390px',
            position:'relative',
            zIndex:3,
            transition:'opacity .5s ease-in-out,transform .5s ease-in-out,-webkit-transform .5s ease-in-out',
            ['@media (max-width:768px)']: {
                width: '226px',
            }
        },
        ghost2: {
            opacity:1,
            width: '462px',
            position:'relative',
            zIndex:4,
            margin:'0 -294px 0 -274px',
            transition:'opacity .5s ease-in-out,transform .5s ease-in-out,-webkit-transform .5s ease-in-out',
            ['@media (max-width:768px)']: {
                width: '276px',
                margin:'0 -164px 0 -164px',
            }
        },
        form: {
            textAlign:'center',
            maxWidth: '360px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '60px'
        },
        button: {
            marginBottom: '22px',
            minWidth: '320px',
            display: 'inline-block',
            verticalAlign: 'top',
            position: 'relative',
            zIndex: 1,
            fontSize:'12px',
            letterSpacing: '1.2px',
            padding: '25px 20px',
            background: 'linear-gradient(0deg,#708eff 0%,#5579fe 100%)',
            color: '#ffffff',
            borderRadius:'36px',
            fontWeight:'bold',
            ['@media (max-width:390px)']: {
                padding: '25px 10px',
            }
        },
        formtxt:{
            color:'#fff',
            fontSize:'15px',
            fontWeight:'500',
            letterSpacing: '1px',
            position: 'relative',
            zIndex: 1,
        }
    })
)