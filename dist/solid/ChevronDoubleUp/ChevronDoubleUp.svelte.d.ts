/** @typedef {typeof __propDef.props}  ChevronDoubleUpProps */
/** @typedef {typeof __propDef.events}  ChevronDoubleUpEvents */
/** @typedef {typeof __propDef.slots}  ChevronDoubleUpSlots */
export default class ChevronDoubleUp extends SvelteComponent<{
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
export type ChevronDoubleUpProps = typeof __propDef.props;
export type ChevronDoubleUpEvents = typeof __propDef.events;
export type ChevronDoubleUpSlots = typeof __propDef.slots;
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
