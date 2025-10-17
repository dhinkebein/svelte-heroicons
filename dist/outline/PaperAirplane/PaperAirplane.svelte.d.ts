/** @typedef {typeof __propDef.props}  PaperAirplaneProps */
/** @typedef {typeof __propDef.events}  PaperAirplaneEvents */
/** @typedef {typeof __propDef.slots}  PaperAirplaneSlots */
export default class PaperAirplane extends SvelteComponent<{
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
export type PaperAirplaneProps = typeof __propDef.props;
export type PaperAirplaneEvents = typeof __propDef.events;
export type PaperAirplaneSlots = typeof __propDef.slots;
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
