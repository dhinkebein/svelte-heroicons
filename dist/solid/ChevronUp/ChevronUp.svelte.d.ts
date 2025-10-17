/** @typedef {typeof __propDef.props}  ChevronUpProps */
/** @typedef {typeof __propDef.events}  ChevronUpEvents */
/** @typedef {typeof __propDef.slots}  ChevronUpSlots */
export default class ChevronUp extends SvelteComponent<{
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
export type ChevronUpProps = typeof __propDef.props;
export type ChevronUpEvents = typeof __propDef.events;
export type ChevronUpSlots = typeof __propDef.slots;
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
