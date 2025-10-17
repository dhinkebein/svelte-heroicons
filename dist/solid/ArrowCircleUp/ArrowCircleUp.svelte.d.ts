/** @typedef {typeof __propDef.props}  ArrowCircleUpProps */
/** @typedef {typeof __propDef.events}  ArrowCircleUpEvents */
/** @typedef {typeof __propDef.slots}  ArrowCircleUpSlots */
export default class ArrowCircleUp extends SvelteComponent<{
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
export type ArrowCircleUpProps = typeof __propDef.props;
export type ArrowCircleUpEvents = typeof __propDef.events;
export type ArrowCircleUpSlots = typeof __propDef.slots;
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
