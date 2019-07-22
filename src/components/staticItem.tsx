import React from "react";
import {Card, CardContent, CardActions, Button, Avatar, SvgIcon, Typography, Paper, makeStyles, createStyles} from "@material-ui/core";
import * as MaterialIcons from "@material-ui/icons";


import { Static } from "../models/Static";

const useStyles = makeStyles(
     createStyles({
         cardContent: {
             display: 'inline',
         }
     })
)
export const StaticItem : React.FC<Static> = ({staticName, staticId}) => {
    const classes = useStyles();
return (
    <Paper>
    <Card>
        <CardContent className={classes.cardContent}>
            <Avatar></Avatar>
            <Typography display="inline">{staticName}</Typography>
            <MaterialIcons.Star/>
            <MaterialIcons.ArrowForward/>
        </CardContent>
    </Card>
    </Paper>);
}