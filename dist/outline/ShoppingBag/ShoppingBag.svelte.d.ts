/** @typedef {typeof __propDef.props}  ShoppingBagProps */
/** @typedef {typeof __propDef.events}  ShoppingBagEvents */
/** @typedef {typeof __propDef.slots}  ShoppingBagSlots */
export default class ShoppingBag extends SvelteComponent<{
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
export type ShoppingBagProps = typeof __propDef.props;
export type ShoppingBagEvents = typeof __propDef.events;
export type ShoppingBagSlots = typeof __propDef.slots;
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
