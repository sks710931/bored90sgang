/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';

import rare from "../assets/rare.png";
import rareghost from "../assets/rareghost.png";

export const Rarity = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.outer}>
                        <div className={classes.inner}>
                            <img src={rare} className={classes.bg} alt=""/>
                            <div className={classes.rarity}>
                                <div className={classes.txtbox}>
                                    <img src={rareghost} className={classes.ghost} alt=""/>
                                </div>
                                <div className={classes.txtbox} style={{alignSelf:'center'}}>
                                    <span className={classes.title}>An apparition from preschool!</span>
                                    <h1 className={classes.heading}>RARITY</h1>
                                    <p className={classes.p}>Find your kindred spirit among 10 000 of possible Baby Ghost combinations! Each Baby Ghost is unique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            padding: '94px 0',
            position: 'relative',
            zIndex: 1,
            minHeight: '600px',
            maxHeight: '100000px',
        },
        container: {
            maxWidth: '1170px',
            padding: '0 20px',
            margin: '0 auto'
        },
        outer: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            background:'linear-gradient(0deg,black 0%,rgba(0,0,0,0) 92%)'
        },
        inner: {
            width: '100%',
            paddingTop: '19px',
            paddingLeft: '10px',
        },
        bg: {
            position: 'absolute',
            left:'0',
            right: '0',
            top: '40',
            width: '100%',
            height: 'auto'
        },
        ghost: {
            width: '360px',
            height: 'auto',
            paddingLeft: '40px',
            ['@media (max-width:900px)']: {
                width: '280px',
                margin: '0 auto',
                paddingLeft: '0px',
            }
        },
        rarity: {
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: '30px',
            ['@media (max-width:768px)']: {
                paddingLeft: '0px',
            }
        },
        txtbox: {
            width: '50%',
            textAlign: 'left',
            paddingTop: '45px',
            justifyContent: 'flex-start',
            ['@media (max-width:900px)']: {
                width: '100%',
                textAlign: 'center',
            }
        },
        title: {
            color: '#ffbc42',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '2.4px',
        },
        heading: {
            fontFamily: 'Holiday',
            fontSize: '74px',
            marginBottom: '-10px',
            verticalAlign: 'top',
            marginTop: '20px',
            color: '#fff',
            textTransform: 'uppercase',
            ['@media (max-width:900px)']: {
                fontSize: '50px',
                marginTop: '10px',
            }
        },
        p: {
            maxWidth: '360px',
            ['@media (max-width:900px)']: {
                margin: '0 auto',
            }
        }
    })
)