import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StaticItem } from "../components/staticItem"

//import { Button, Welcome } from '@storybook/react/demo';

storiesOf("Static List Item", module).add("Basic", () => <StaticItem />);