/** @typedef {typeof __propDef.props}  ArrowNarrowLeftProps */
/** @typedef {typeof __propDef.events}  ArrowNarrowLeftEvents */
/** @typedef {typeof __propDef.slots}  ArrowNarrowLeftSlots */
export default class ArrowNarrowLeft extends SvelteComponent<{
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
export type ArrowNarrowLeftProps = typeof __propDef.props;
export type ArrowNarrowLeftEvents = typeof __propDef.events;
export type ArrowNarrowLeftSlots = typeof __propDef.slots;
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
