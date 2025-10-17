/** @typedef {typeof __propDef.props}  CurrencyYenProps */
/** @typedef {typeof __propDef.events}  CurrencyYenEvents */
/** @typedef {typeof __propDef.slots}  CurrencyYenSlots */
export default class CurrencyYen extends SvelteComponent<{
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
export type CurrencyYenProps = typeof __propDef.props;
export type CurrencyYenEvents = typeof __propDef.events;
export type CurrencyYenSlots = typeof __propDef.slots;
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
