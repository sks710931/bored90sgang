/* eslint-disable no-useless-computed-key */
import { Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const Goals = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <span className={classes.title}>Mint Them All!</span>
            <h1 className={classes.goals}>Roadmap</h1>
            <div className={classes.headingwrap}>Phase 1</div>
            <Typography variant="h4">CREATION & LAUNCH</Typography>
          </div>
          <ul className={classes.goallist}>
            <li className={classes.goalitem}>
              <span className={classes.perc}>JANUARY 2022</span>

              <p className={classes.goalItems}>Launch of Social Media</p>

              <p className={classes.goalItems}> Art Reveal</p>
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>February 2022</span>

              <p className={classes.goalItems}> Launch of Discord</p>
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>March 2022</span>
              <p className={classes.goalItems}> Launch of Website</p>
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>Late March/April 2022</span>
              <p className={classes.goalItems}>
                Presale for Whitelist Members - 0.1ETH per nft
              </p>
              <p className={classes.goalItems}>
                Public Mint - 0.175 ETH per nft
              </p>
            </li>
          </ul>
          <div className={classes.heading}>
            <div className={classes.headingwrap}>Phase 2</div>
            <Typography variant="h4">NFT Release</Typography>
          </div>
          <ul className={classes.goallist}>
            <li className={classes.goalitem}>
              
                  <p className={classes.goalItems}>
                    {" "}
                    (Each Step of Phase 2 of the Roadmap will Include a $25,000
                    USD re-investment into the marketing for the project as well
                    as acquiring prizes for future giveaways and contests)
                  </p>
                
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>25%</span>
              
                  <p className={classes.goalItems}>
                    {" "}
                    First Charity Donation: 50,000 USD - Stand Up for Kids
                    (providing shelter and food for homeless and privileged
                    inner city kids and youths in the US)
                  </p>
               
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>50%</span>
              
                  <p className={classes.goalItems}>
                    {" "}
                    First ETH Giveaway - Prizes up to 1 ETH
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    First Movie Memorabilia Giveaway & Vintage Clothing Giveaway
                  </p>
                
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>75%</span>
              
                  <p className={classes.goalItems}>
                    {" "}
                    Second ETH Giveaway - Prizes up to 1 ETH
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    Second Movie Memorabilia Giveaway & Vintage Clothing
                    Giveaway
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    Bored 90s Gang Merch Launch - Free Pieces Start to be
                    Raffled off to Holders and continues throughout life-cycle
                    of the project
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    OGs will receive their OG-exclusive merch
                  </p>
                
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>100%</span>
              
                  <p className={classes.goalItems}>
                    {" "}
                    3D NFT Collection (FREE airdrop for holders)
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    HOLDERS Of the 8 Rare OGs will receive their 1 ETH gift
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    Creation of PRIVATE holders discord channels within Bored
                    90s Gang Server to streamline giveaways and distribution of
                    exclusive rewards whilst the project begins it's transition
                    into metaverse utility
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    Third ETH Giveaway - Prizes up to 1 ETH
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    Third Movie Memorabilia Giveaway & Vintage Clothing Giveaway
                  </p>
                
                  <p className={classes.goalItems}>
                    {" "}
                    Second Charity Donation: 50,000 USD: Stand Up for Kids
                  </p>
                
            </li>
          </ul>
          <div className={classes.heading}>
            <div className={classes.headingwrap}>Phase 3</div>
            <Typography variant="h4">
              BEGINNING OF METAVERSE INTEGRATION
            </Typography>
          </div>
          <ul className={classes.goallist}>
            <li className={classes.goalitem}>
              <p className={classes.goalItems}>
                Beginning of metaverse project integration and further utilities
                and rewards for holders. This will follow on from our 3d NFT
                airdrop to all holders at the end of phase 2
              </p>
              <p className={classes.goalItems}>
                Giveaways, Contests and Charity Donations remain ongoing with a
                portion of royalties liquidity post-100% completion of phase 2.
                The frequency of these giveaways will be dependent on trading
                volume post-completion of phase 2
              </p>
            </li>
            <li className={classes.goalitem}>
              <span className={classes.perc}>
                ENTREPRENEURIAL SUPPORT ROADMAP
              </span>
              <p className={classes.goalItems}>
                We also want to support our holders in their endeavours outside
                of the Bored 90s Gang NFT project. This will be expanded upon
                throughout the life-cycle of the project and beyond
              </p>
              <p className={classes.goalItems}>
                Royalties-Backed Support for our Entrepreneurial Holders: Part
                of the royalties stored in our community wallet will be
                allocated towards this specific part of our utility. The dev
                team will communicate with holders who have their own
                entrepreneurial ambitions and businesses, and give them the
                opportunity to gain more exposure. See discord server for
                details.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: "35px 0px",
      paddingBottom: "42px",
      position: "relative",
      zIndex: 1,
      minHeight: "540px",
      maxHeight: "100000px",
    },
    bg: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      maxHeight: "740px",
      zIndex: 0,
      ["@media (max-width:768px)"]: {
        width: "auto",
        maxHeight: "1040px",
        objectFit: "cover",
      },
    },
    container: {
      position: "relative",
      top: "150px",
      minHeight: "640px",
      maxHeight: "10000px",
    },
    heading: {
      margin: "0 auto",
      marginBottom: "20px",
      textAlign: "center",
      color: "#fff",
    },
    title: {
      color: "#a3e869",
      marginBottom: "12px",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "2.4px",
      fontWeight: "700",
    },
    goals: {
      fontFamily: "Holiday",
      fontSize: "80px",
      marginBottom: "-10px",
      verticalAlign: "top",
      marginTop: "30px",
      color: "#fff",
      ["@media (max-width:768px)"]: {
        fontSize: "45px",
        marginTop: "15px",
      },
    },
    headingwrap: {
      maxWidth: "580px",
      margin: "0 auto",
      marginTop: 20,
      fontSize: 60,
      fontFamily: "Holiday",
      ["@media (max-width:768px)"]: {
        maxWidth: "480px",
        fontSize: 30,
      },
      ["@media (max-width:480px)"]: {
        maxWidth: "360px",
      },
    },
    goallist: {
      maxWidth: "700px",
      display: "flex",
      flexWrap: "wrap",
      textAlign: "center",
      color: "#fff",
      margin: "0 auto",
      paddingTop: "9px",
      listStyle: "none",
      ["@media (max-width:768px)"]: {
        maxWidth: "350px",
      },
    },
    goalitem: {
      width: "100%",
      marginBottom: "30px",
      position: "relative",
      ["@media (max-width:768px)"]: {
        width: "100%",
      },
    },
    perc: {
      fontSize: "30px",
      lineHeight: "1.093px",
      marginBottom: "12px",
    },
    goalItems: {
      lineHeight: "24px",
      textTransform: "uppercase",
      textAlign: "left",
      fontSize: 20,
      width: "100%",
      color: "gray",
    },
  })
);
