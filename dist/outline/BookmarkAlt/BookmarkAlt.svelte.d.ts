/** @typedef {typeof __propDef.props}  BookmarkAltProps */
/** @typedef {typeof __propDef.events}  BookmarkAltEvents */
/** @typedef {typeof __propDef.slots}  BookmarkAltSlots */
export default class BookmarkAlt extends SvelteComponent<{
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
export type BookmarkAltProps = typeof __propDef.props;
export type BookmarkAltEvents = typeof __propDef.events;
export type BookmarkAltSlots = typeof __propDef.slots;
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
