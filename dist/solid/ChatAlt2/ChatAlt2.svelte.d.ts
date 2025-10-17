/** @typedef {typeof __propDef.props}  ChatAlt2Props */
/** @typedef {typeof __propDef.events}  ChatAlt2Events */
/** @typedef {typeof __propDef.slots}  ChatAlt2Slots */
export default class ChatAlt2 extends SvelteComponent<{
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
export type ChatAlt2Props = typeof __propDef.props;
export type ChatAlt2Events = typeof __propDef.events;
export type ChatAlt2Slots = typeof __propDef.slots;
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
