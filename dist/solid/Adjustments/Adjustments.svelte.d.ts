/** @typedef {typeof __propDef.props}  AdjustmentsProps */
/** @typedef {typeof __propDef.events}  AdjustmentsEvents */
/** @typedef {typeof __propDef.slots}  AdjustmentsSlots */
export default class Adjustments extends SvelteComponent<{
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
export type AdjustmentsProps = typeof __propDef.props;
export type AdjustmentsEvents = typeof __propDef.events;
export type AdjustmentsSlots = typeof __propDef.slots;
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
