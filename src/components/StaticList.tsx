import React from "react"
import {Paper} from "@material-ui/core"
import { Static } from "../models/Static";
import { StaticItem } from "./staticItem";

export const StaticList : React.FC<Static[]> = (statics: Array<Static>) => {  
    console.log(statics);
    
    
    return ( 
        <Paper>
           {Object.values(statics).map((value: Static) => {
                return <StaticItem {...value}></StaticItem>
            })
            }
            
        </Paper>
    )
}