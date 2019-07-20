import React from "react";
import {Card, CardContent, CardActions, Button, Avatar, SvgIcon, Typography} from "@material-ui/core";
import * as MaterialIcons from "@material-ui/icons";

import classes from "*.module.sass";

export const StaticItem : React.FC = (name) => {
return (
    <Card>
        <CardContent>
            <Avatar>{name.children}</Avatar>
            <Typography>{name.children}</Typography>
            <MaterialIcons.Star/>
            <MaterialIcons.ArrowForward/>
        </CardContent>
    </Card>);
}