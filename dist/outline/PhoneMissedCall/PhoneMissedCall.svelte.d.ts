/** @typedef {typeof __propDef.props}  PhoneMissedCallProps */
/** @typedef {typeof __propDef.events}  PhoneMissedCallEvents */
/** @typedef {typeof __propDef.slots}  PhoneMissedCallSlots */
export default class PhoneMissedCall extends SvelteComponent<{
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
export type PhoneMissedCallProps = typeof __propDef.props;
export type PhoneMissedCallEvents = typeof __propDef.events;
export type PhoneMissedCallSlots = typeof __propDef.slots;
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
