/** @typedef {typeof __propDef.props}  SwitchVerticalProps */
/** @typedef {typeof __propDef.events}  SwitchVerticalEvents */
/** @typedef {typeof __propDef.slots}  SwitchVerticalSlots */
export default class SwitchVertical extends SvelteComponent<{
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
export type SwitchVerticalProps = typeof __propDef.props;
export type SwitchVerticalEvents = typeof __propDef.events;
export type SwitchVerticalSlots = typeof __propDef.slots;
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
