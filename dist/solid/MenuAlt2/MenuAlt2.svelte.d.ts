/** @typedef {typeof __propDef.props}  MenuAlt2Props */
/** @typedef {typeof __propDef.events}  MenuAlt2Events */
/** @typedef {typeof __propDef.slots}  MenuAlt2Slots */
export default class MenuAlt2 extends SvelteComponent<{
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
export type MenuAlt2Props = typeof __propDef.props;
export type MenuAlt2Events = typeof __propDef.events;
export type MenuAlt2Slots = typeof __propDef.slots;
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
