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

import faqbg from '../assets/faq.jpg';
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
                        {
                            mdMatches ? (
                                <div className={classes.faqs}>F.A.Q.</div>
                            ) : (
                                <div className={classes.faqs}>Frequently <br /> Asked Questions</div>
                            )
                        }
                        <div className={classes.desc}>
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHAT IS THE TOTAL SUPPLY OF BORED 90s GANG?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    There are a total of 8896 Bored 90s Gangster NFTs available to mint:
                                    <p>- 8888 Regular Bored 90s Gangsters</p>
                                    - 8 ultra-rare OGs, which come with added rewards and incredible rarity. You have approximately a 0.1% chance to mint an OG.
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WILL THERE BE A PRESALE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Yes, we will be holding a presale 1 day prior to the public sale launch for our whitelist members.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898', position:'relative'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel3'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHAT IS THE PRICE FOR ONE BORED 90s GANG NFT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    For the Whitelist presale the price will be set at 0.1 ETH + Gas
                                    <p>For the public sale the price will be set at 0.175 ETH + Gas.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898', position:'relative'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel4'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHAT IS AN NFT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    An NFT (non-fungible token) is a unique digital asset stored on the blockchain. This unique digital asset has verifiable uniqueness, rarity and proof-of-ownership. The Bored 90s Gang NFT tokens are Ethereum ERC-721 tokens.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898', position:'relative'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel5'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHAT DAY DOES BORED 90s GANG LAUNCH?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Bored 90s Gang will have its whitelist presale and public mint in March of 2022. The exact date is subject to change because we are firstly committed to maximizing the quality of the project and building the community first.
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}> </span>HOW CAN I GET ONE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    To mint a Bored 90s Gang NFT, you will need to obtain Ethereum tokens and transfer them into your crypto wallet (preferably metamask due to security and ease of use). Once you have done this, connect your metamask wallet to your internet browser and integrate it into our website and you will be able to mint your Bored 90s Gang NFT!
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHAT IS METAMASK?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a Bored 90s Gangster. Having a wallet gives you an Ethereum address (i.e. 0xSPOO….555), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io/)
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>CAN I MINT USING MY PHONE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    If you are using a mobile phone to mint a Bored 90s Gangster, you need to use the Metamask application built-in browser.
                                    <p>- Please launch the Metamask application, click the 3 lines on the top left menu in the application and select "Browser".</p>
                                    - It will open a web browser and you will be able to navigate back to WEBSITE LINK to do the minting.
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>HOW CAN I GET ONTO THE WHITELIST?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Please head to our "⚪how-to-whitelist" section in our Discord server to find out how to get onto the whitelist!
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}> </span>HOW MANY PEOPLE WILL BE ALLOWED IN THE WHITELIST SALE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    We have reserved 100 Baby Ghosts to giveaway. Most of these will be given out after launch and will not occupy the early token ids. We will also use a % of mint sales to occasionally sweep the floor, do giveways, and create merch!There will only be 1000 places available to be in our whitelist sale.
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
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>HOW MANY BORED 90s GANG NFTS CAN I MINT IN THE WHITELIST SALE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    There is a limit of 3 NFT per wallet if you are in the whitelist pre-sale.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel11'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>HOW MANY Bored 90s Gang NFTS CAN I MINT IN THE PUBLIC SALE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    There is a limit of 3 NFTs per wallet if you are in the public sale.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel12'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}> </span>WHAT HAPPENS IF I MISS THE WHITELIST AND PUBLIC SALE?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    If you miss the whitelist presale and public sale, you will still be able to purchase a Bored 90s Gang NFT on the secondary market by viewing the collection on Opensea: https://opensea.io/collection/bored90sgang
and either making an offer for the NFT or clicking to buy it now, depending on the preference set by the current owner of that NFT.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel13'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHERE CAN I VIEW MY BORED 90s GANG NFT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Once you have minted your Bored 90s Gang NFT, you will be able to view it when you connect your crypto wallet to OpenSea.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel14'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>WHAT CAN I DO WITH MY BORED 90S GANGSTER NFT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    You can use your Bored 90s Gang NFT as a profile picture online, and hold until we airdrop the 3D collection. Holding long-term is the way to get the most value out of your NFT, as well as the added utility that will come when we begin our metaverse integration project.
                                    <p>However, we understand that some in the NFT space aim to flip NFT’s by buying them and selling them for profit. This is entirely your right to do so, however if you are not holding a your Bored 90s Gangster NFT on 3D Airdrop day, you will not receive your 3D NFT.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel15'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>ARE THERE SECONDARY SALES ROYALTIES?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Yes, 10% of the secondary sales fees will be deducted as royalties. A portion of these will be re-invested into marketing to ensure the longevity and momentum of the project throughout the roadmap.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel16'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>DO I OWN THE NFT AFTER MINTING IT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Yes, you will own all the intellectual properties to your specific Bored 90s Gangster. This means you can use the image for commercial purposes as well as personal.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel17'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}>  </span>ARE THE BORED 90s GANG NFTS A GOOD INVESTMENT?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    We believe that Bored 90s Gang NFTs have the potential to be much more than a simple flip for investors, which is why we are advising people to hold their Bored 90s Gangster long-term. Not only will every holder be rewarded with their own FREE 3D NFT upon completion of the roadmap, they'll also gain access to the other rewards systems, exclusivity, features and community benefits we are aiming to develop throughout the course of this project.
                                    <p>Like any other investment, don't spend your money if you can't afford to lose it. This goes for any NFTs, cryptocurrencies, stocks, and any other investment influenced by market economics.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <Divider sx={{ml:'30px', mr:'30px', borderColor:'#989898'}}/>
                    <div className={classes.faqitem}>
                        <div className={classes.txt}>
                            <Accordion sx={{backgroundColor: "transparent"}} expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel18'?<RemoveIcon sx={{color: "#784dc8"}}/>:<AddIcon sx={{color: "#784dc8"}}/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography color="common.white" variant="body1">
                                        <span style={{color:'#784dc8', marginRight: '20px', fontWeight:'bold'}}> </span>WILL THERE BE FLOOR SWEEPS?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{maxWidth: '630px'}}>
                                    <Typography color="#989898" variant="body1">
                                    Yes. We will regularly use proceeds and royalties to perform floor sweeps, and use the NFTs collected in raffles or in combination with our other giveaways throughout the course of the roadmap and beyond.
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
            fontFamily:'Holiday',
            fontSize: '64px',
            marginBottom: '11px',
            marginTop: '4px',
            letterSpacing: '2.2px',
            ['@media (max-width:1100px)']: {
                fontSize: '45px',
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
        },
        
    })
)