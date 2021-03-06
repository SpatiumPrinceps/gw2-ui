import React from 'react';
import { number, boolean, object, select } from '@storybook/addon-knobs';
import {
  Item,
  itemTypeNames as ITEM_TYPE_NAMES,
  itemStatNames as ITEM_STAT_NAMES,
  itemArmorWeights as ITEM_ARMOR_WEIGHTS,
} from 'gw2-ui';

import categories from '../categories';
import readme from './Item.readme.md';
import docs from './Item.docs.md';

export default {
  category: categories.CORE,
  name: 'Item',
  readme,
  docs: `${docs}

## Custom items

Custom items (without an id) can be generated by specifying the appropriate item type, stat and (optional) armor weight.
Currently, only level 80 ascended equipment items are supported.

### Supported types

${Object.values(ITEM_TYPE_NAMES)
    .map(typeName => `- \`${typeName}\`\n`)
    .join('')}

### Supported stats

${Object.values(ITEM_STAT_NAMES)
    .map(statName => `- \`${statName}\`\n`)
    .join('')}

### Supported armor weights

${Object.values(ITEM_ARMOR_WEIGHTS)
    .map(weight => `- \`${weight}\`\n`)
    .join('')}`,
  story: () => (
    <Item
      id={number('id', 48073)}
      count={number('count', null)}
      upgrades={object('upgrades', [37131, [24836, 4]])}
      type={select('type', [null, ...Object.values(ITEM_TYPE_NAMES)], null)}
      stat={select('stat', [null, ...Object.values(ITEM_STAT_NAMES)], null)}
      weight={select(
        'weight',
        [null, ...Object.values(ITEM_ARMOR_WEIGHTS)],
        null,
      )}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
  related: [
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Coin' },
    { category: categories.HELPERS, name: 'Spinner' },
    { category: categories.HELPERS, name: 'Progress' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
