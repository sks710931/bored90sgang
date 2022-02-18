/* eslint-disable no-useless-computed-key */
import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import faqbg from '../assets/faqbg.jpeg';
import { Divider } from '@mui/material';

export const Faq = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const mdMatches = useMediaQuery('(max-width:768px)');
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.faqwrap}>
                    <img src={faqbg} alt="" className={classes.bg}/>
                    <div className={classes.heading}>
                        <div className={classes.title}>Haunt me more!</div>
                        {
                            mdMatches ? (
                                <div className={classes.faqs}>F.A.Q.</div>
                            ) : (
                                <div className={classes.faqs}>FREQUENTLY <br /> ASKED QUESTIONS</div>
                            )
                        }
                        <div className={classes.desc}>
                        Each Baby Ghost is unique and programmatically generated from over 140 possible traits, including backgrounds, skins, eyes, disguises, accessories...
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898', position:'relative'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel1'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>I.  </span>What is an NFT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    NFT stands for “Non-fungible token” and is a cool way of saying it’s a truly unique digital item that YOU can buy, own, and trade.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898', position:'relative'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel2'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>II.  </span>What is Metamask?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a Baby Ghost. Having a wallet gives you an Ethereum address (i.e. 0xSPOO….666), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io).
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel3'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>III.  </span>How to mint with Metamask on a mobile phone?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    If you are using a mobile phone to mint our lovely Baby Ghosts, you need to use the Metamask application built-in browser to mint our NFTs. Therefore, please launch the Metamask application, click the 3 lines on the top left menu in the application and select "Browser". It will open a web browser and you will be able to navigate back to babyghosts.com to do the minting.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel4'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>IV.  </span>How to mint with Metamask on a computer?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    If you are using a computer to mint our lovely Baby Ghosts, you just need to connect the Metamask plugin with our website, verify you have enough ETH to do the transaction, then you will be able to click on the Mint button to buy a few Baby Ghosts.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel5'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>V.  </span>Buying NFT for the first time?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button "MINT" on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel6'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>VI.  </span>Where does my NFT go after I purchase a Baby Ghost?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Your Baby Ghost NFT will appear in whatever address, or connected wallet you used to purchase the Baby Ghost. You can see your freshly minted NFT card directly on your Opensea.io account.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel7'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>VII.  </span>That sounds great, how do I get in?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Join our Discord (https://discord.gg/BabyGhosts) server or Twitter (https://twitter.com/BabyGhosts_NFT) account and jump in on the conversation & share your ideas!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel8'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>VIII.  </span>What can I do with my Baby Ghosts / How can I trade them?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    You are free to do anything with them under a non-exclusive license. Baby Ghosts adheres to the ERC-721 standard so you can trade them on platforms like OpenSea.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel9'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>IX.  </span>Are Baby Ghosts a good investment?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Well, yeah! At least we believe that Baby Ghosts have a long life of haunting ahead of them, and will keep growing as the project doesn’t end here! Hopefully Baby Ghosts go to the moon, but like anything in life, don’t spend money you can’t afford not to have.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel10'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>X.  </span>What about Tokenomics?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    We have reserved 100 Baby Ghosts to giveaway. Most of these will be given out after launch and will not occupy the early token ids. We will also use a % of mint sales to occasionally sweep the floor, do giveways, and create merch!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            paddingTop: '50px',
            paddingBottom:'100px',
            position:'relative',
            zIndex: '20',
            minHeight: '600px'
        },
        container: {
            maxWidth: '1180px',
            padding: '0 20px',
            margin: '0 auto',
        },
        faqwrap: {
            paddingTop: '60px',
        },
        bg: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: 'auto',
            zIndex: 0,
        },
        heading: {
            marginBottom: '80px',
            textAlign: 'right',
            padding: 0,
            color: '#fff',
            position: 'relative',
            ['@media (max-width:768px)']: {
                textAlign: 'center',
            }
        },
        title: {
            color: '#a88dff',
            marginBottom: '12px',
            textTransform:'uppercase',
            letterSpacing:'2.4px',
            fontWeight: '700'
        },
        faqs: {
            fontSize: '84px',
            lineHeight: '1.095',
            marginBottom: '11px',
            letterSpacing: '2.2px',
            ['@media (max-width:768px)']: {
                fontSize: '55px',
            },
            ['@media (max-width:1100px)']: {
                fontSize: '65px',
            },
        },
        desc:{
            maxWidth: '400px',
            margin: '0 0 0 auto',
            lineHeight: '1.5',
            ['@media (max-width:768px)']: {
                margin: '0 auto 0 auto',
            },
        },
        faqitem: {
            margin: '0px auto 0px auto',
            backgroundColor: 'transparent',
        },
        txt: {
            color: '#ffffff',
            fontSize: '30px',
            padding: '15px 15px 15px 15px',
        }
    })
)