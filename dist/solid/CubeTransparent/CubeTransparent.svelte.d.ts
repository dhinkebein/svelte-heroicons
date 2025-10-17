/** @typedef {typeof __propDef.props}  CubeTransparentProps */
/** @typedef {typeof __propDef.events}  CubeTransparentEvents */
/** @typedef {typeof __propDef.slots}  CubeTransparentSlots */
export default class CubeTransparent extends SvelteComponent<{
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
export type CubeTransparentProps = typeof __propDef.props;
export type CubeTransparentEvents = typeof __propDef.events;
export type CubeTransparentSlots = typeof __propDef.slots;
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
