Radiobrytere brukes når brukeren skal gjøre et binært valg - typisk i formen 
"ja eller nei", eller "av eller på".

```js
const { RadioButtonGroup } = require('.');

initialState = { selected: undefined };

<RadioButtonGroup 
    description="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="under23"
    onChange={(e) => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <RadioSwitch 
            leftLabel="Ja"
            leftValue="true"
            rightLabel="Nei"
            rightValue="false"
            {...inputProps}
        />
    )}
</RadioButtonGroup>
```

