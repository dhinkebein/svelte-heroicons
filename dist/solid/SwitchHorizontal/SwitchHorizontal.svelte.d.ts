/** @typedef {typeof __propDef.props}  SwitchHorizontalProps */
/** @typedef {typeof __propDef.events}  SwitchHorizontalEvents */
/** @typedef {typeof __propDef.slots}  SwitchHorizontalSlots */
export default class SwitchHorizontal extends SvelteComponent<{
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
export type SwitchHorizontalProps = typeof __propDef.props;
export type SwitchHorizontalEvents = typeof __propDef.events;
export type SwitchHorizontalSlots = typeof __propDef.slots;
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
