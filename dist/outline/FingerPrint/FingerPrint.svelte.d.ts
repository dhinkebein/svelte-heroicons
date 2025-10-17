/** @typedef {typeof __propDef.props}  FingerPrintProps */
/** @typedef {typeof __propDef.events}  FingerPrintEvents */
/** @typedef {typeof __propDef.slots}  FingerPrintSlots */
export default class FingerPrint extends SvelteComponent<{
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
export type FingerPrintProps = typeof __propDef.props;
export type FingerPrintEvents = typeof __propDef.events;
export type FingerPrintSlots = typeof __propDef.slots;
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
