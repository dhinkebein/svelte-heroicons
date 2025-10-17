/** @typedef {typeof __propDef.props}  ViewGridAddProps */
/** @typedef {typeof __propDef.events}  ViewGridAddEvents */
/** @typedef {typeof __propDef.slots}  ViewGridAddSlots */
export default class ViewGridAdd extends SvelteComponent<{
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
export type ViewGridAddProps = typeof __propDef.props;
export type ViewGridAddEvents = typeof __propDef.events;
export type ViewGridAddSlots = typeof __propDef.slots;
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
