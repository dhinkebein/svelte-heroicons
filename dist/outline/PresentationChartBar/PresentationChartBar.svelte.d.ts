/** @typedef {typeof __propDef.props}  PresentationChartBarProps */
/** @typedef {typeof __propDef.events}  PresentationChartBarEvents */
/** @typedef {typeof __propDef.slots}  PresentationChartBarSlots */
export default class PresentationChartBar extends SvelteComponent<{
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
export type PresentationChartBarProps = typeof __propDef.props;
export type PresentationChartBarEvents = typeof __propDef.events;
export type PresentationChartBarSlots = typeof __propDef.slots;
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
