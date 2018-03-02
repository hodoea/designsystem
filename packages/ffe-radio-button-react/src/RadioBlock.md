Radioblokker er noe vi bruker når vi ber brukeren om å ta valg som krever endel 
informasjon.

```js
const { RadioButtonGroup } = require('.');
initialState = { selected: 'you' };

<RadioButtonGroup 
    description="Hvem eier bilen du skal forsikre?"
    name="owner"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <React.Fragment>
            <RadioBlock
                {...inputProps}
                title="Du"
                value="you"
            />
            <RadioBlock
                {...inputProps}
                title="Ektefelle, samboer eller registrert partner"
                value="partner"
            >
                Da må ektefelle, samboer eller registrert partner skrive inn 
                detaljene sine under.
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                title="Leasingselskap"
                value="leasing-company"
            >
                Da må leasingselskapet gi deg noen detaljer som du må skrive
                inn under.
            </RadioBlock>
        </React.Fragment>
    )}
</RadioButtonGroup>
```
