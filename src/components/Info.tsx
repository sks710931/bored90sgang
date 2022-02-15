import { createStyles, makeStyles } from '@mui/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ghost1 from "../assets/ghost1.png";
import ghost2 from "../assets/ghost2.png";
import ghost3 from "../assets/ghost3.png";

export const Info = () => {
    const classes = useStyles();
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        swipeToSlide: false,
        cssEase: "linear"
    }
    const scroll1 = {
        ...settings,
    };
    const scroll2 = {
        ...settings,
        rtl: true,
    };
    return (
        <>
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span className={classes.title}>
                        No sorcery may exorcise them!
                    </span>
                    <h1 className={classes.maintxt}>Baby Ghosts</h1>
                    <span>
                        <p className={classes.pdesc}>
                            When a wraith daddy and a banshee mommy love each other very much, something magical happens. Out of the cabbage patch next to the graveyard rises a brand new generation of revenants! At pre-K, Baby Ghosts make friends and discover the world, until one day, the whole daycare is exorcised and all Baby Ghosts are released!
                        </p>
                        <p className={classes.pdesc}>Now lost spirits and spread to the wind, Baby Ghosts are free to haunt throughout the Earth.</p>
                    </span>
                </div>
            </div>
        </div>
        <div>
        <Slider {...scroll1}>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
        </Slider>
        <Slider {...scroll2}>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
        </Slider>
        <Slider {...scroll1}>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost1} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost2} style={{width:'360px', height:'auto'}} alt=""/>
          <img src={ghost3} style={{width:'360px', height:'auto'}} alt=""/>
        </Slider>
      </div>
      </>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            position: 'relative',
            zIndex: 11,
            paddingTop: '52px',
            marginBottom: '98px'
        },
        container: {
            padding: '0 20px',
            margin: '0 auto',
            maxWidth: '1350px'
        },
        heading: {
            marginBottom: '79px',
            textAlign: 'center',
            color: '#fff'
        },
        title: {
            color: '#ff764b',
            marginBottom :'12px',
            fontSize: '12px',
            textTransform:'uppercase',
            fontWeight:'700',
            letterSpacing:'2.4px'
        },
        maintxt: {
            fontSize: '90px',
            marginBottom: '11px',
            verticalAlign: 'top',
            marginTop: '0px',
            textTransform: 'uppercase'
        },
        pdesc: {
            maxWidth:'579px',
            margin:'0 auto',
            marginBottom: '27px',
            fontSize: '16px',
            lineHeight: '1.688'
        }
    })
)