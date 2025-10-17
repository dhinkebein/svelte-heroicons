/** @typedef {typeof __propDef.props}  DotsHorizontalProps */
/** @typedef {typeof __propDef.events}  DotsHorizontalEvents */
/** @typedef {typeof __propDef.slots}  DotsHorizontalSlots */
export default class DotsHorizontal extends SvelteComponent<{
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
export type DotsHorizontalProps = typeof __propDef.props;
export type DotsHorizontalEvents = typeof __propDef.events;
export type DotsHorizontalSlots = typeof __propDef.slots;
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
