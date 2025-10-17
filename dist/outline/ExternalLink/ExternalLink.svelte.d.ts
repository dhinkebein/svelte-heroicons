/** @typedef {typeof __propDef.props}  ExternalLinkProps */
/** @typedef {typeof __propDef.events}  ExternalLinkEvents */
/** @typedef {typeof __propDef.slots}  ExternalLinkSlots */
export default class ExternalLink extends SvelteComponent<{
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
export type ExternalLinkProps = typeof __propDef.props;
export type ExternalLinkEvents = typeof __propDef.events;
export type ExternalLinkSlots = typeof __propDef.slots;
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
