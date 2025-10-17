/** @typedef {typeof __propDef.props}  ChartSquareBarProps */
/** @typedef {typeof __propDef.events}  ChartSquareBarEvents */
/** @typedef {typeof __propDef.slots}  ChartSquareBarSlots */
export default class ChartSquareBar extends SvelteComponent<{
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
export type ChartSquareBarProps = typeof __propDef.props;
export type ChartSquareBarEvents = typeof __propDef.events;
export type ChartSquareBarSlots = typeof __propDef.slots;
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
