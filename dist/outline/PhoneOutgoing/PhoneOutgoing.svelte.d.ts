/** @typedef {typeof __propDef.props}  PhoneOutgoingProps */
/** @typedef {typeof __propDef.events}  PhoneOutgoingEvents */
/** @typedef {typeof __propDef.slots}  PhoneOutgoingSlots */
export default class PhoneOutgoing extends SvelteComponent<{
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
export type PhoneOutgoingProps = typeof __propDef.props;
export type PhoneOutgoingEvents = typeof __propDef.events;
export type PhoneOutgoingSlots = typeof __propDef.slots;
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
