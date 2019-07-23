import React from "react"
import {Paper} from "@material-ui/core"
import { Static } from "../models/Static";
import { StaticItem } from "./staticItem";

export const StaticList : React.FC<{statics: Static[]}> = ({statics}) => {  
    console.log(statics);
    
    
    return ( 
        <Paper>
           {statics.map((value: Static) => {
                return <StaticItem team={value} key={value.staticId}></StaticItem>
            })
            }
            
        </Paper>
    )
}