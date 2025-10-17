/** @typedef {typeof __propDef.props}  AcademicCapProps */
/** @typedef {typeof __propDef.events}  AcademicCapEvents */
/** @typedef {typeof __propDef.slots}  AcademicCapSlots */
export default class AcademicCap extends SvelteComponent<{
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
export type AcademicCapProps = typeof __propDef.props;
export type AcademicCapEvents = typeof __propDef.events;
export type AcademicCapSlots = typeof __propDef.slots;
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
