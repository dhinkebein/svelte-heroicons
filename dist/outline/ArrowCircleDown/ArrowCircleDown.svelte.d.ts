/** @typedef {typeof __propDef.props}  ArrowCircleDownProps */
/** @typedef {typeof __propDef.events}  ArrowCircleDownEvents */
/** @typedef {typeof __propDef.slots}  ArrowCircleDownSlots */
export default class ArrowCircleDown extends SvelteComponent<{
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
export type ArrowCircleDownProps = typeof __propDef.props;
export type ArrowCircleDownEvents = typeof __propDef.events;
export type ArrowCircleDownSlots = typeof __propDef.slots;
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
