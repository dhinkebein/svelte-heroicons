/** @typedef {typeof __propDef.props}  ArrowNarrowDownProps */
/** @typedef {typeof __propDef.events}  ArrowNarrowDownEvents */
/** @typedef {typeof __propDef.slots}  ArrowNarrowDownSlots */
export default class ArrowNarrowDown extends SvelteComponent<{
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
export type ArrowNarrowDownProps = typeof __propDef.props;
export type ArrowNarrowDownEvents = typeof __propDef.events;
export type ArrowNarrowDownSlots = typeof __propDef.slots;
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
