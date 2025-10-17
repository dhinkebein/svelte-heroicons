/** @typedef {typeof __propDef.props}  ArrowSmRightProps */
/** @typedef {typeof __propDef.events}  ArrowSmRightEvents */
/** @typedef {typeof __propDef.slots}  ArrowSmRightSlots */
export default class ArrowSmRight extends SvelteComponent<{
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
export type ArrowSmRightProps = typeof __propDef.props;
export type ArrowSmRightEvents = typeof __propDef.events;
export type ArrowSmRightSlots = typeof __propDef.slots;
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
