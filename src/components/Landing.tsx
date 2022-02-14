import { createStyles, makeStyles } from '@mui/styles';

import bg from '../assets/bg.png';
import ghost1 from '../assets/ghost1.png';
import ghost2 from '../assets/ghost2.png';
import ghost3 from '../assets/ghost3.png';

export const Landing = () => {
    const classes = useStyles();
    return (
        <section className={classes.banner}>
            <div className={classes.container}>
                <img src={bg} className={classes.bg} alt=""/>
                <div className={classes.grad}></div>
                <div className={classes.txt}>
                    <span className={classes.welcome}>Welcome to</span>
                    <h1 className={classes.title}>Baby Ghosts</h1>
                </div>
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
        },
        container: {
            padding: '0 20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1350px',
            minHeight: '640px',
            maxHeight: '10000px',
        },
        bg:{
            position: 'absolute',
            width: '100%',
            minHeight: '90vh',
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
        },
        grad: {
            position: 'absolute',
            top: 0,
            left:0,
            right:0,
            bottom: 0,
            zIndex: 1,
            height: '100%',
            background:'linear-gradient(180deg,rgba(0,0,0,0) 0%,black 70%)'
        },
        txt: {
            marginTop: '0px',
            width: '100%',
            position: 'absolute',
            zIndex: 2,
            textAlign: 'center'
        },
        welcome: {
            color: '#ff6265',
            fontSize: '12px',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '2.4px',
            fontWeight: '700',
            textAlign: 'center'
        },
        title: {
            fontSize: '90px',
            marginBottom: '-10px',
            verticalAlign: 'top',
            marginTop: '0px',
            color: '#fff',
            textTransform: 'uppercase'
        },
        ghosts: {
            marginBottom: '29px',
            transform:'none',
            display:'flex',
            flexWrap:'wrap',
            alignItems:'flex-end',
            justifyContent:'center',
            paddingTop: '50px',
        },
        ghost1: {
            opacity:1,
            animation:`$dance 4s ease-in-out infinite`,
            width: '390px',
            position:'relative',
            zIndex:3,
            transition:'opacity .5s ease-in-out,transform .5s ease-in-out,-webkit-transform .5s ease-in-out',
        },
        ghost2: {
            opacity:1,
            animation:`$dance 4s ease-in-out infinite`,
            width: '462px',
            position:'relative',
            zIndex:4,
            margin:'0 -294px 0 -274px',
            transition:'opacity .5s ease-in-out,transform .5s ease-in-out,-webkit-transform .5s ease-in-out',
        },
        "@keyframes dance": {
            "0%": {
              transform: "translatey(0px)"
            },
            "50%": {
                transform: "translatey(-20px)"
            },
            "100%": {
              transform: "translatey(0px)"
            }
        },
        form: {
            textAlign:'center',
            maxWidth: '360px',
            marginLeft: 'auto',
            marginRight: 'auto'
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
            fontWeight:'bold'
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