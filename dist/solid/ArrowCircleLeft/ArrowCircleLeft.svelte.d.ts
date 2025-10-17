/** @typedef {typeof __propDef.props}  ArrowCircleLeftProps */
/** @typedef {typeof __propDef.events}  ArrowCircleLeftEvents */
/** @typedef {typeof __propDef.slots}  ArrowCircleLeftSlots */
export default class ArrowCircleLeft extends SvelteComponent<{
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
export type ArrowCircleLeftProps = typeof __propDef.props;
export type ArrowCircleLeftEvents = typeof __propDef.events;
export type ArrowCircleLeftSlots = typeof __propDef.slots;
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
