/** @typedef {typeof __propDef.props}  ClipboardListProps */
/** @typedef {typeof __propDef.events}  ClipboardListEvents */
/** @typedef {typeof __propDef.slots}  ClipboardListSlots */
export default class ClipboardList extends SvelteComponent<{
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
export type ClipboardListProps = typeof __propDef.props;
export type ClipboardListEvents = typeof __propDef.events;
export type ClipboardListSlots = typeof __propDef.slots;
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
