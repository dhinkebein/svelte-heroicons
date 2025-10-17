/** @typedef {typeof __propDef.props}  CurrencyRupeeProps */
/** @typedef {typeof __propDef.events}  CurrencyRupeeEvents */
/** @typedef {typeof __propDef.slots}  CurrencyRupeeSlots */
export default class CurrencyRupee extends SvelteComponent<{
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
export type CurrencyRupeeProps = typeof __propDef.props;
export type CurrencyRupeeEvents = typeof __propDef.events;
export type CurrencyRupeeSlots = typeof __propDef.slots;
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
