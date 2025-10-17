/** @typedef {typeof __propDef.props}  ArrowCircleRightProps */
/** @typedef {typeof __propDef.events}  ArrowCircleRightEvents */
/** @typedef {typeof __propDef.slots}  ArrowCircleRightSlots */
export default class ArrowCircleRight extends SvelteComponent<{
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
export type ArrowCircleRightProps = typeof __propDef.props;
export type ArrowCircleRightEvents = typeof __propDef.events;
export type ArrowCircleRightSlots = typeof __propDef.slots;
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
