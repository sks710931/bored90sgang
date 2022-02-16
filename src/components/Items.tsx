import { createStyles, makeStyles } from '@mui/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg from "../assets/imgbg.png";
import bg2 from "../assets/imgbg2.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
}

export const Items = () => {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
      };
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                <Slider {...settings}>
                    <div className={classes.box}>
                        <div className={classes.imgdiv}>
                            <img src={bg} alt="" className={classes.bg}/>
                            <div>
                                <img src={img1} alt="" className={classes.item}/>
                            </div>
                        </div>
                        <div className={classes.txtbox}>
                            <span className={classes.heading}>66% chances drop</span>
                            <div className={classes.title}>Chilling</div>
                            <p className={classes.desc}>The most common tier of Baby Ghost, but there just aren't enough of them to go around! They won't pale in comparison.</p>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.imgdiv}>
                            <img src={bg2} alt="" className={classes.bg}/>
                            <div>
                                <img src={img2} alt="" className={classes.item}/>
                            </div>
                        </div>
                        <div className={classes.txtbox}>
                            <span className={classes.heading} style={{color:'#56d4fc'}}>12% chances drop</span>
                            <div className={classes.title}>Freaking</div>
                            <p className={classes.desc}>The most common tier of Baby Ghost, but there just aren't enough of them to go around! They won't pale in comparison.</p>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.imgdiv}>
                            <img src={bg} alt="" className={classes.bg}/>
                            <div>
                                <img src={img3} alt="" className={classes.item}/>
                            </div>
                        </div>
                        <div className={classes.txtbox}>
                            <span className={classes.heading} style={{color:'#a3e869'}}>20% chances drop</span>
                            <div className={classes.title}>ethereal</div>
                            <p className={classes.desc}>The most common tier of Baby Ghost, but there just aren't enough of them to go around! They won't pale in comparison.</p>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.imgdiv}>
                            <img src={bg2} alt="" className={classes.bg}/>
                            <div>
                                <img src={img2} alt="" className={classes.item}/>
                            </div>
                        </div>
                        <div className={classes.txtbox}>
                            <span className={classes.heading}>66% chances drop</span>
                            <div className={classes.title}>Chilling</div>
                            <p className={classes.desc}>The most common tier of Baby Ghost, but there just aren't enough of them to go around! They won't pale in comparison.</p>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            zIndex: 4,
            textAlign: 'center',
            position: 'relative',
            minHeight: '500px'
        },
        container: {
            maxWidth: '1260px',
            padding: '0 20px',
            margin: '0 auto',
        },
        box: {
            width: '320px'
        },
        imgdiv: {
            height: '332px',
            marginBottom: '11px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center'
        },
        bg: {
            position: 'absolute',
            zIndex: -1,
            top: 0, left: 0, right: 0, bottom: 0,
            width: '334px',
            height: '332px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        item:{
            width: '235px',
            height: 'auto',
            margin:'-12px 0 0px -11px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        txtbox: {
            maxWidth: '330px', marginLeft:'auto', marginRight: 'auto'
        },
        heading: {
            marginBottom:'9px',
            color: '#ff6265',
            fontSize: '12px',
            letterSpacing: '2.4px',
            textTransform: 'uppercase',
            fontWeight:'700'
        },
        title: {
            marginBottom: '9px',
            fontSize: '48px',
            textTransform: 'uppercase',
            fontWeight:'400',
            color: '#fff',
        },
        desc: {
            marginBottom: '27px',
            lineHeight: '24px'
        }
    })
)