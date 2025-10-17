/** @typedef {typeof __propDef.props}  ClipboardCopyProps */
/** @typedef {typeof __propDef.events}  ClipboardCopyEvents */
/** @typedef {typeof __propDef.slots}  ClipboardCopySlots */
export default class ClipboardCopy extends SvelteComponent<{
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
export type ClipboardCopyProps = typeof __propDef.props;
export type ClipboardCopyEvents = typeof __propDef.events;
export type ClipboardCopySlots = typeof __propDef.slots;
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
