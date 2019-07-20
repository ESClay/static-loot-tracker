import React from "react";
import {Card, CardContent, CardActions, Button, Avatar, SvgIcon} from "@material-ui/core";
import * as MaterialIcons from "@material-ui/icons";

import classes from "*.module.sass";

export const StaticItem : React.FC = () => {
return (
    <Card>
        <CardContent>
            <Avatar>T</Avatar>
            Some text here
            <MaterialIcons.Star/>
            <MaterialIcons.ArrowForward/>
        </CardContent>
    </Card>);
}