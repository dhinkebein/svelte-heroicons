/** @typedef {typeof __propDef.props}  VolumeUpProps */
/** @typedef {typeof __propDef.events}  VolumeUpEvents */
/** @typedef {typeof __propDef.slots}  VolumeUpSlots */
export default class VolumeUp extends SvelteComponent<{
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
export type VolumeUpProps = typeof __propDef.props;
export type VolumeUpEvents = typeof __propDef.events;
export type VolumeUpSlots = typeof __propDef.slots;
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
