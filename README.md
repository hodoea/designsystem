# ffe-tables-react
A flexible component for dealing with tables, FFE and React.

## Install

```
$ npm install --save ffe-core ffe-tables ffe-tables-react
```

`ffe-tables-react` has peer dependencies on `ffe-core` and `ffe-tables`.


## Usage

First you will need to import the table component from the default export of `ffe-tables-react`.
```javascript
import Table from 'ffe-tables-react';
```

### Required values and props

This is an example with only the required values and props present.

Columns should be an array of objects where each object represents properties for each column.
Each column must have a `key` and a `header`, each of which should be a string.
The `key` will correspond to the props of each object in the `data` array.
```javascript
const columns = [
    { key: 'name', header: 'Navn' },
    { key: 'email', header: 'E-post' }
];
```

Data should be an array of objects where each object represents a row.
Each row should have a property to correspond to each column object `key` (although it can support potentially undefined values).

Though not required, it's recommended that each row also have a property `id` which must be unique.
The `id` prop should not be a simple index count since this will have no impact on performance.
For more info: https://facebook.github.io/react/docs/reconciliation.html#keys
```javascript
const data = [
    {
        id: 'u123',
        name: 'Ola Normann',
        email: 'ola@normann.no'
    },
    {
        id: 'u463',
        name: 'Sivert Svenska',
        email: 'sivert@svenska.se'
    },
    {
        id: 'u9463',
        name: 'Daniel Dansk',
        email: 'daniel@dansk.dk'
    }
];
```

The table itself shouldn't need much explaining.
```javascript
<Table
    columns={columns}
    data={data}
/>
```

### Optionals

This is an example which includes all the options to tailor the table to your needs.

Each column can have any of these optional props:
- `footer` is a string or node which will be used as a table footer.
- `alignRight` is a boolean to align all cell content to the right (headers and footers included).
- `alignTop` is a boolean to align all cell content vertically to the top (footers included).
- `hideOnDesktop` hides columns responsively on desktop screen sizes.
- `hideOnTablet` hides columns responsively on tablet screen sizes.
- `hideOnSmallTablet` hides columns responsively on small tablet screen sizes.
- `hideOnMobile` hides columns responsively on mobile screen sizes.
- `compare` is to provide a custom compare function for the column.
If not provided, a basic compare function is applied.
- `notSortable` is a boolean to disable sorting on a specific column.
If your `header` is an empty string `''`, you do not need to provide this property,
as an empty header will also result in a column that's not sortable.

The latter two will only apply to a `sortable` table.
```javascript
const currencyCompare = (a, b) => {
    /* Perform some custom comparison of two networth values */
};

const columns = [
    { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
    { key: 'email', header: 'E-post', hideOnTablet: true, hideOnMobile: true },
    { key: 'age', header: 'Alder', footer: '37,67', alignRight: true, hideOnMobile: true },
    { key: 'networth', header: 'Formue', footer: '37,67', alignRight: true, compare: currencyCompare },
    { key: 'button', header: 'Poke', notSortable: true }
];
```

The data block is not very different in this example.
Note that values can easily be a component or node, as seen on `button`.
Also note that you can add more values than those which are found as column keys, as seen on `address`.
The purpose here is to supply values to the expandable row.
```javascript
const data = [
    {
        name: 'Ola Normann',
        email: 'ola@normann.no',
        address: 'Gateveien 2',
        age: 23,
        networth: '12 693 005,93',
        button: <button>poke</button>
    },
    {
        name: 'Sivert Svenska',
        email: 'sivert@svenska.se',
        age: 45,
        networth: '8 693 005,93',
        button: <button>poke</button>
    },
    {
        name: 'Daniel Dansk',
        email: 'daniel@dansk.dk',
        address: <button>legg til adresse</button>,
        age: 45,
        networth: '9 005,93',
        button: <button>poke</button>
    }
];
```

The table accepts any of these optional props:
- `sortable` is a boolean to make the table sortable.
  - Tables will not be `sortable` when collapsed to small screen layout (default < 768px `@breakpoint-md`)
  - `sortBy` (optional) is a string with the name of one of the columns. If set, the table will initially be sorted by this column.
  - `descending` (optional) is a boolean to specify if the `sortBy` column should be sorted ascending or descending (default).
- `caption` is a string or node to insert as table caption.
- `srOnlyCaption` is a boolean to hide the caption and make it available for screen readers.
- `expandedContentMapper` must be a reference to a function which takes a single value.
The output of this function will be the contents of the expanded area of an expandable row.
  - As you see in the example below, the output of this function will be `undefined` for Sivert Svenska,
  because he doesn't have an `address`. In this case the row will not be expandable.
  - The presence of this function also acts as a boolean to inform the table it has expandable rows.
- `condensed` adds the `--condensed`-modifier to the table for condensed row height.
- `limit` and `offset` limit the number of table rows rendered. Behaves like `LIMIT` and `OFFSET` in SQL-queries and works well with the `sortable`-flag. Useful for pagination.
- `smallHeader` adds the `--small-header`-modifier to the table for reduced header width
on tables when screen width < 768px (`@breakpoint-md`).
- `alignLeft` adds the `--text-left`-modifier to the table for skipping left padding on content in the first column
- `columnLayoutMobile` adds the `--columns-sm` modifier in order to switch from the standard vertical layout to two columns for table headers and cells on mobile screen sizes.
- `breakpoint` accepts either `sm` or `none` to add either `--breakpoint-sm` or `--breakpoint-none` modifier to the table.
  - `--breakpoint-sm` reduces the responsive collapse breakpoint from default `@breakpoint-md` to `@breakpoint-sm`.
  - `--breakpoint-none` disables the responsive collapse altogether.
```javascript
const expandedContentMapper = row => row.address && <span>Adresse: { row.address }</span>;

<Table
    columns={ columns }
    data={ data }
    expandedContentMapper={ expandedContentMapper }
    sortable={ true }
    condensed={ true }
    smallHeader={ true }
    columnLayoutMobile={ true }
    breakpoint={ 'none' }
    caption="For the strength of the pack is the wolf. And the strength of the wolf is the pack."
/>
```

## Examples

To view live example tables, run `npm start`
