import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
    { key: 'acapella', text: 'Acapella', value: 'acapella' },
    { key: 'adult contemporary', text: 'Adult Contemporary', value: 'adult contemporary' },
    { key: 'afro', text: 'Afro', value: 'afro' },
]

const InstrumentsSelect = (props) => (
    <Dropdown onChange={props.onChange} placeholder='Instrments' fluid multiple selection options={options} />
)

export default InstrumentsSelect;