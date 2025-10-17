/** @typedef {typeof __propDef.props}  ChevronDoubleRightProps */
/** @typedef {typeof __propDef.events}  ChevronDoubleRightEvents */
/** @typedef {typeof __propDef.slots}  ChevronDoubleRightSlots */
export default class ChevronDoubleRight extends SvelteComponent<{
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
export type ChevronDoubleRightProps = typeof __propDef.props;
export type ChevronDoubleRightEvents = typeof __propDef.events;
export type ChevronDoubleRightSlots = typeof __propDef.slots;
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
