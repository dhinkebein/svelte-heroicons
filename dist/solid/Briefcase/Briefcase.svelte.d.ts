/** @typedef {typeof __propDef.props}  BriefcaseProps */
/** @typedef {typeof __propDef.events}  BriefcaseEvents */
/** @typedef {typeof __propDef.slots}  BriefcaseSlots */
export default class Briefcase extends SvelteComponent<{
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
export type BriefcaseProps = typeof __propDef.props;
export type BriefcaseEvents = typeof __propDef.events;
export type BriefcaseSlots = typeof __propDef.slots;
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
