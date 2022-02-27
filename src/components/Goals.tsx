/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from '@mui/styles';

import bg from "../assets/bg2.png";

export const Goals = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.wrapper}>
                <img src={bg} alt="bg" className={classes.bg} />
                <div className={classes.container}>
                    <div className={classes.heading}>
                        <span className={classes.title}>Mint Them All!</span>
                        <h1 className={classes.goals}>Goals</h1>
                        <div className={classes.headingwrap}>
                            Baby Ghosts are crossing over! Now's your chance to grab yours before they reach the sky. Bred in a loving haunted household and eternally newborn, 10 000 Baby Ghosts are looking for a forever home in your wallet.
                        </div>
                    </div>
                    <ul className={classes.goallist}>
                        <li className={classes.goalitem}>
                            <span className={classes.perc}>25%</span>
                            <p style={{padding: '0 40px', lineHeight: '24px'}}>We will giveaway 10 Baby Ghosts to our Discord members and 1 ETH to a random OG Baby Ghost owner from the pre-sale whitelist.</p>
                        </li>
                        <li className={classes.goalitem}>
                            <span className={classes.perc}>50%</span>
                            <p style={{padding: '0 40px', lineHeight: '24px'}}>We will be donating $30,000 to St. Jude Children's Research Hospital (Memphis, USA).</p>
                        </li>
                        <li className={classes.goalitem}>
                            <span className={classes.perc}>75%</span>
                            <p style={{padding: '0 40px', lineHeight: '24px'}}>We will be launching our Baby Ghosts merch online store. 100% of the sales will go directly to the community wallet.</p>
                        </li>
                        <li className={classes.goalitem}>
                            <span className={classes.perc}>100%</span>
                            <p style={{padding: '0 40px', lineHeight: '24px'}}>We will be launching a new Baby Ghosts theme NFTs collection with exclusive pre-sale access for Baby Ghosts owners. In addition to that, 10 ETH will be distributed among 10 Baby Ghosts owners.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            padding: '35px 0px',
            paddingBottom: '42px',
            position: 'relative',
            zIndex: 1,
            minHeight: '540px',
            maxHeight: '100000px',
        },
        bg: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxHeight: '740px',
            zIndex: 0,
            ['@media (max-width:768px)']: {
                width: 'auto',
                maxHeight: '1040px',
                objectFit: 'cover'
            }
        },
        container: {
            position: 'relative',
            top: '150px',
            minHeight: '640px',
            maxHeight: '10000px'
        },
        heading: {
            margin: '0 auto',
            marginBottom: '68px',
            textAlign:'center',
            color: '#fff',
        },
        title: {
            color: '#a3e869',
            marginBottom: '12px',
            fontSize: '12px',
            textTransform:'uppercase',
            letterSpacing:'2.4px',
            fontWeight: '700'
        },
        goals: {
            fontFamily:'Holiday',
            fontSize: '80px',
            marginBottom: '-10px',
            verticalAlign: 'top',
            marginTop: '30px',
            color: '#fff',
            textTransform: 'uppercase',
            ['@media (max-width:768px)']: {
                fontSize: '45px',
                marginTop: '15px',
            }
        },
        headingwrap: {
            maxWidth: '580px',
            margin: '0 auto',
            padding: '30px 0',
            lineHeight: '24px',
            ['@media (max-width:768px)']: {
                maxWidth: '480px',
            },
            ['@media (max-width:480px)']: {
                maxWidth: '360px',
            }
        },
        goallist: {
            maxWidth: '1200px',
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            color: '#fff',
            margin: '0 auto',
            paddingTop: '9px',
            listStyle: 'none',
            ['@media (max-width:768px)']: {
                maxWidth: '350px',
            }
        },
        goalitem: {
            width: '50%',
            marginBottom: '30px',
            position: 'relative',
            ['@media (max-width:768px)']: {
                width: '100%',
            }
        },
        perc: {
            fontSize: '54px',
            lineHeight: '1.093px',
            marginBottom: '12px'
        }
    })
)