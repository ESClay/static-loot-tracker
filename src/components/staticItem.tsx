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
export const StaticItem : React.FC<{team: Static}> = ({team}) => {
    const classes = useStyles();
return (
    <Paper>
    <Card>
        <CardContent className={classes.cardContent}>
            <Avatar></Avatar>
            {/* {team.staticName}
            //*/}
            <Typography display="inline">{team.staticName}</Typography> 
            <MaterialIcons.Star/>
            <MaterialIcons.ArrowForward/>
        </CardContent>
    </Card>
    </Paper>);
}