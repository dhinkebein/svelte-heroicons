/** @typedef {typeof __propDef.props}  CurrencyPoundProps */
/** @typedef {typeof __propDef.events}  CurrencyPoundEvents */
/** @typedef {typeof __propDef.slots}  CurrencyPoundSlots */
export default class CurrencyPound extends SvelteComponent<{
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
export type CurrencyPoundProps = typeof __propDef.props;
export type CurrencyPoundEvents = typeof __propDef.events;
export type CurrencyPoundSlots = typeof __propDef.slots;
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
