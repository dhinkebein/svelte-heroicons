/** @typedef {typeof __propDef.props}  PhoneIncomingProps */
/** @typedef {typeof __propDef.events}  PhoneIncomingEvents */
/** @typedef {typeof __propDef.slots}  PhoneIncomingSlots */
export default class PhoneIncoming extends SvelteComponent<{
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
export type PhoneIncomingProps = typeof __propDef.props;
export type PhoneIncomingEvents = typeof __propDef.events;
export type PhoneIncomingSlots = typeof __propDef.slots;
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
