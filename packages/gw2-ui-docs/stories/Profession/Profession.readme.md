## Usage

```js
import { Profession } from 'gw2-ui'; // or gw2-ui-components
```

## Properties

| Property              | Type     | Default | Required | Description                                                                             |
| --------------------- | -------- | ------- | -------- | --------------------------------------------------------------------------------------- |
| `name`                | `string` | -       | -        | The profession name (inferred automatically from `eliteSpecialization` if not provided) |
| `eliteSpecialization` | `string` | -       | -        | The profession elite specialization                                                     |
| `wikiLinkProps`       | `object` | -       | -        | The properties passed to the `<WikiLink/>` component                                    |
| `errorProps`          | `object` | -       | -        | The properties passed to the `<Error/>` component                                       |

The remaining props will be spread to the underlying `<IconWithText/>` component.
