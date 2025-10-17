/** @typedef {typeof __propDef.props}  ArrowNarrowRightProps */
/** @typedef {typeof __propDef.events}  ArrowNarrowRightEvents */
/** @typedef {typeof __propDef.slots}  ArrowNarrowRightSlots */
export default class ArrowNarrowRight extends SvelteComponent<{
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
export type ArrowNarrowRightProps = typeof __propDef.props;
export type ArrowNarrowRightEvents = typeof __propDef.events;
export type ArrowNarrowRightSlots = typeof __propDef.slots;
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
