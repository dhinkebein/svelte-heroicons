/** @typedef {typeof __propDef.props}  ArrowNarrowUpProps */
/** @typedef {typeof __propDef.events}  ArrowNarrowUpEvents */
/** @typedef {typeof __propDef.slots}  ArrowNarrowUpSlots */
export default class ArrowNarrowUp extends SvelteComponent<{
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
export type ArrowNarrowUpProps = typeof __propDef.props;
export type ArrowNarrowUpEvents = typeof __propDef.events;
export type ArrowNarrowUpSlots = typeof __propDef.slots;
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
