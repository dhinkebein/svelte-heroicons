/** @typedef {typeof __propDef.props}  ArrowsExpandProps */
/** @typedef {typeof __propDef.events}  ArrowsExpandEvents */
/** @typedef {typeof __propDef.slots}  ArrowsExpandSlots */
export default class ArrowsExpand extends SvelteComponent<{
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
export type ArrowsExpandProps = typeof __propDef.props;
export type ArrowsExpandEvents = typeof __propDef.events;
export type ArrowsExpandSlots = typeof __propDef.slots;
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
