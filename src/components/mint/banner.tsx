/* eslint-disable no-useless-computed-key */
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import p1 from "../../assets/ghost1.png";
import p2 from "../../assets/ghost2.png";
import p3 from "../../assets/ghost3.png";
export const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img className={clsx(classes.img, classes.p1)} src={p1} alt="" />
            <img className={clsx(classes.img, classes.p2)} src={p2} alt="" />
            <img className={classes.img} src={p3} alt="" />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    img:{
        width: 400,
        ['@media (max-width:768px)']: {
            width: '190px',
        }
    },
    p1:{
        marginRight: -210,
        ['@media (max-width:768px)']: {
            width: '190px',
            marginRight: -90,
        }
    },
    p2:{
        marginRight: -230,
        zIndex: 10,
        width: 500,
        marginBottom: 100,
        ['@media (max-width:768px)']: {
            marginRight: -110,
            marginBottom: 60,
            width: 250,
        }
    }
}));