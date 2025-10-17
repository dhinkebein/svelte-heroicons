/** @typedef {typeof __propDef.props}  MenuAlt1Props */
/** @typedef {typeof __propDef.events}  MenuAlt1Events */
/** @typedef {typeof __propDef.slots}  MenuAlt1Slots */
export default class MenuAlt1 extends SvelteComponent<{
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
export type MenuAlt1Props = typeof __propDef.props;
export type MenuAlt1Events = typeof __propDef.events;
export type MenuAlt1Slots = typeof __propDef.slots;
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
