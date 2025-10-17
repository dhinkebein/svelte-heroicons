/** @typedef {typeof __propDef.props}  ShieldExclamationProps */
/** @typedef {typeof __propDef.events}  ShieldExclamationEvents */
/** @typedef {typeof __propDef.slots}  ShieldExclamationSlots */
export default class ShieldExclamation extends SvelteComponent<{
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
export type ShieldExclamationProps = typeof __propDef.props;
export type ShieldExclamationEvents = typeof __propDef.events;
export type ShieldExclamationSlots = typeof __propDef.slots;
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
