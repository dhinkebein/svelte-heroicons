/** @typedef {typeof __propDef.props}  CurrencyEuroProps */
/** @typedef {typeof __propDef.events}  CurrencyEuroEvents */
/** @typedef {typeof __propDef.slots}  CurrencyEuroSlots */
export default class CurrencyEuro extends SvelteComponent<{
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
export type CurrencyEuroProps = typeof __propDef.props;
export type CurrencyEuroEvents = typeof __propDef.events;
export type CurrencyEuroSlots = typeof __propDef.slots;
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
