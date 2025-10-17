/** @typedef {typeof __propDef.props}  ClipboardCheckProps */
/** @typedef {typeof __propDef.events}  ClipboardCheckEvents */
/** @typedef {typeof __propDef.slots}  ClipboardCheckSlots */
export default class ClipboardCheck extends SvelteComponent<{
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
export type ClipboardCheckProps = typeof __propDef.props;
export type ClipboardCheckEvents = typeof __propDef.events;
export type ClipboardCheckSlots = typeof __propDef.slots;
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
