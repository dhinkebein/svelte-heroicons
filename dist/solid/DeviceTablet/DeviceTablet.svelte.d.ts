/** @typedef {typeof __propDef.props}  DeviceTabletProps */
/** @typedef {typeof __propDef.events}  DeviceTabletEvents */
/** @typedef {typeof __propDef.slots}  DeviceTabletSlots */
export default class DeviceTablet extends SvelteComponent<{
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
export type DeviceTabletProps = typeof __propDef.props;
export type DeviceTabletEvents = typeof __propDef.events;
export type DeviceTabletSlots = typeof __propDef.slots;
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
