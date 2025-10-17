/** @typedef {typeof __propDef.props}  DesktopComputerProps */
/** @typedef {typeof __propDef.events}  DesktopComputerEvents */
/** @typedef {typeof __propDef.slots}  DesktopComputerSlots */
export default class DesktopComputer extends SvelteComponent<{
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
export type DesktopComputerProps = typeof __propDef.props;
export type DesktopComputerEvents = typeof __propDef.events;
export type DesktopComputerSlots = typeof __propDef.slots;
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
