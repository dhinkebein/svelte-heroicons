/** @typedef {typeof __propDef.props}  ChevronDoubleDownProps */
/** @typedef {typeof __propDef.events}  ChevronDoubleDownEvents */
/** @typedef {typeof __propDef.slots}  ChevronDoubleDownSlots */
export default class ChevronDoubleDown extends SvelteComponent<{
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
export type ChevronDoubleDownProps = typeof __propDef.props;
export type ChevronDoubleDownEvents = typeof __propDef.events;
export type ChevronDoubleDownSlots = typeof __propDef.slots;
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
