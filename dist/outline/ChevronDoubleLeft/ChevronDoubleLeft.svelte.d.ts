/** @typedef {typeof __propDef.props}  ChevronDoubleLeftProps */
/** @typedef {typeof __propDef.events}  ChevronDoubleLeftEvents */
/** @typedef {typeof __propDef.slots}  ChevronDoubleLeftSlots */
export default class ChevronDoubleLeft extends SvelteComponent<{
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
export type ChevronDoubleLeftProps = typeof __propDef.props;
export type ChevronDoubleLeftEvents = typeof __propDef.events;
export type ChevronDoubleLeftSlots = typeof __propDef.slots;
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
