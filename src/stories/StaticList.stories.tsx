import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StaticItem } from "../components/staticItem"
import { StaticList } from '../components/StaticList';
import { Static } from '../models/Static';

const statics: Static[] = [ {
    staticName: "1 static",
    staticId: "23423lkjljk23423l4kjlkj",
},
{
    staticName: "2 static",
    staticId: "90234uyrwoekjrh023948ur923i4uhr",
}
]
storiesOf("Static List", module).add("Empty List", () => <StaticList {...Array<Static>()}></StaticList>);
storiesOf("Static List", module).add("Item in list", () => <StaticList {...statics}></StaticList>);