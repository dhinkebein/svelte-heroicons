/** @typedef {typeof __propDef.props}  ShieldCheckProps */
/** @typedef {typeof __propDef.events}  ShieldCheckEvents */
/** @typedef {typeof __propDef.slots}  ShieldCheckSlots */
export default class ShieldCheck extends SvelteComponent<{
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
export type ShieldCheckProps = typeof __propDef.props;
export type ShieldCheckEvents = typeof __propDef.events;
export type ShieldCheckSlots = typeof __propDef.slots;
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
