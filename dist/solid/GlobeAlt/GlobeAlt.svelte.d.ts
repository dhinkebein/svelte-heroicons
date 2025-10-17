/** @typedef {typeof __propDef.props}  GlobeAltProps */
/** @typedef {typeof __propDef.events}  GlobeAltEvents */
/** @typedef {typeof __propDef.slots}  GlobeAltSlots */
export default class GlobeAlt extends SvelteComponent<{
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
export type GlobeAltProps = typeof __propDef.props;
export type GlobeAltEvents = typeof __propDef.events;
export type GlobeAltSlots = typeof __propDef.slots;
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
