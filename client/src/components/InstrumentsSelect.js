import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
    { key: 'accordion', text: 'Accordion', value: 'accordion' },
    { key: 'acoustic-guitar', text: 'Acoustic Guitar', value: 'acoustic-guitar' },
    { key: 'bagpipes', text: 'Bagpipes', value: 'bagpipes' },
    { key: 'banjo', text: 'Banjo', value: 'banjo' },
    { key: 'bass-guitar', text: 'Bass Guitar', value: 'bass-guitar' },
    { key: 'bassoon', text: 'Bassoon', value: 'bassoon' },
    { key: 'bongos', text: 'Bongos', value: 'bongos' },
    { key: 'cello', text: 'Cello', value: 'cello' },
    { key: 'clarinet', text: 'Clarinet', value: 'clarinet' },
    { key: 'drums', text: 'Drums', value: 'drums' },
    { key: 'electric-guitar', text: 'Electric Guitar', value: 'electric-guitar' },
    { key: 'euphonium', text: 'Euphonium', value: 'euphonium' },
    { key: 'flute', text: 'Flute', value: 'flute' },
    { key: 'french-horn', text: 'French Horn', value: 'french-horn' },
    { key: 'harmonica', text: 'Harmonica', value: 'harmonica' },
    { key: 'harp', text: 'Harp', value: 'harp' },
    { key: 'mandolin', text: 'Mandolin', value: 'mandolin' },
    { key: 'marimba', text: 'Marimba', value: 'marimba' },
    { key: 'percussion-misc', text: 'Percussion (Misc)', value: 'percussion-misc' },
    { key: 'oboe', text: 'Oboe', value: 'oboe' },
    { key: 'orchestral-percussion', text: 'Orchestral Percussion', value: 'orchestral-percussion' },
    { key: 'organ', text: 'Organ', value: 'organ' },
    { key: 'piano', text: 'Piano', value: 'piano' },
    { key: 'piccolo', text: 'Piccolo', value: 'piccolo' },
    { key: 'Recorder', text: 'Recorder', value: 'recorder' },
    { key: 'saxophone', text: 'Saxophone', value: 'saxophone' },
    { key: 'synthesizer', text: 'Synthesizer', value: 'synthesizer' },
    { key: 'trombone', text: 'Trombone', value: 'trombone' },
    { key: 'trumpet', text: 'Trumpet', value: 'trumpet' },
    { key: 'tuba', text: 'Tuba', value: 'tuba' },
    { key: 'ukulele', text: 'Ukulele', value: 'ukulele' },
    { key: 'upright-bass', text: 'Upright Bass', value: 'upright-bass' },
    { key: 'viola', text: 'Viola', value: 'viola' },
    { key: 'violin', text: 'Violin', value: 'violin' },
    { key: 'vocals-singer', text: 'Vocals/Singer', value: 'vocals-singer' },
    { key: 'xylophone', text: 'Xylophone', value: 'xylophone' },
]

const InstrumentsSelect = (props) => (
    <Dropdown onChange={props.onChange} placeholder='Instruments' fluid multiple selection options={options} />
)

export default InstrumentsSelect;