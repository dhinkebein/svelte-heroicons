/** @typedef {typeof __propDef.props}  DotsCircleHorizontalProps */
/** @typedef {typeof __propDef.events}  DotsCircleHorizontalEvents */
/** @typedef {typeof __propDef.slots}  DotsCircleHorizontalSlots */
export default class DotsCircleHorizontal extends SvelteComponent<{
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
export type DotsCircleHorizontalProps = typeof __propDef.props;
export type DotsCircleHorizontalEvents = typeof __propDef.events;
export type DotsCircleHorizontalSlots = typeof __propDef.slots;
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
