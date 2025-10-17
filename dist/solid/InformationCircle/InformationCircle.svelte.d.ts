/** @typedef {typeof __propDef.props}  InformationCircleProps */
/** @typedef {typeof __propDef.events}  InformationCircleEvents */
/** @typedef {typeof __propDef.slots}  InformationCircleSlots */
export default class InformationCircle extends SvelteComponent<{
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
export type InformationCircleProps = typeof __propDef.props;
export type InformationCircleEvents = typeof __propDef.events;
export type InformationCircleSlots = typeof __propDef.slots;
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
