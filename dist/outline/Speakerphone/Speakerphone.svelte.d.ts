/** @typedef {typeof __propDef.props}  SpeakerphoneProps */
/** @typedef {typeof __propDef.events}  SpeakerphoneEvents */
/** @typedef {typeof __propDef.slots}  SpeakerphoneSlots */
export default class Speakerphone extends SvelteComponent<{
    [x: string]: any;
}, {
    click: PointerEvent;
    mouseover: MouseEvent;
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    keydown: KeyboardEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SpeakerphoneProps = typeof __propDef.props;
export type SpeakerphoneEvents = typeof __propDef.events;
export type SpeakerphoneSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        click: PointerEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
