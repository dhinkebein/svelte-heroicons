/** @typedef {typeof __propDef.props}  ExclamationCircleProps */
/** @typedef {typeof __propDef.events}  ExclamationCircleEvents */
/** @typedef {typeof __propDef.slots}  ExclamationCircleSlots */
export default class ExclamationCircle extends SvelteComponent<{
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
export type ExclamationCircleProps = typeof __propDef.props;
export type ExclamationCircleEvents = typeof __propDef.events;
export type ExclamationCircleSlots = typeof __propDef.slots;
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
