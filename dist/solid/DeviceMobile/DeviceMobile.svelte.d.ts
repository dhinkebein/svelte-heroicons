/** @typedef {typeof __propDef.props}  DeviceMobileProps */
/** @typedef {typeof __propDef.events}  DeviceMobileEvents */
/** @typedef {typeof __propDef.slots}  DeviceMobileSlots */
export default class DeviceMobile extends SvelteComponent<{
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
export type DeviceMobileProps = typeof __propDef.props;
export type DeviceMobileEvents = typeof __propDef.events;
export type DeviceMobileSlots = typeof __propDef.slots;
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
