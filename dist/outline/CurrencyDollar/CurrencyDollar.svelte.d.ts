/** @typedef {typeof __propDef.props}  CurrencyDollarProps */
/** @typedef {typeof __propDef.events}  CurrencyDollarEvents */
/** @typedef {typeof __propDef.slots}  CurrencyDollarSlots */
export default class CurrencyDollar extends SvelteComponent<{
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
export type CurrencyDollarProps = typeof __propDef.props;
export type CurrencyDollarEvents = typeof __propDef.events;
export type CurrencyDollarSlots = typeof __propDef.slots;
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
