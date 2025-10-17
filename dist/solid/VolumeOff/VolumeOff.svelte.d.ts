/** @typedef {typeof __propDef.props}  VolumeOffProps */
/** @typedef {typeof __propDef.events}  VolumeOffEvents */
/** @typedef {typeof __propDef.slots}  VolumeOffSlots */
export default class VolumeOff extends SvelteComponent<{
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
export type VolumeOffProps = typeof __propDef.props;
export type VolumeOffEvents = typeof __propDef.events;
export type VolumeOffSlots = typeof __propDef.slots;
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
