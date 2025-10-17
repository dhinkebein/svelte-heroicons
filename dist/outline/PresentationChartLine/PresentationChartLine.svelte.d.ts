/** @typedef {typeof __propDef.props}  PresentationChartLineProps */
/** @typedef {typeof __propDef.events}  PresentationChartLineEvents */
/** @typedef {typeof __propDef.slots}  PresentationChartLineSlots */
export default class PresentationChartLine extends SvelteComponent<{
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
export type PresentationChartLineProps = typeof __propDef.props;
export type PresentationChartLineEvents = typeof __propDef.events;
export type PresentationChartLineSlots = typeof __propDef.slots;
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
