/** @typedef {typeof __propDef.props}  EmojiSadProps */
/** @typedef {typeof __propDef.events}  EmojiSadEvents */
/** @typedef {typeof __propDef.slots}  EmojiSadSlots */
export default class EmojiSad extends SvelteComponent<{
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
export type EmojiSadProps = typeof __propDef.props;
export type EmojiSadEvents = typeof __propDef.events;
export type EmojiSadSlots = typeof __propDef.slots;
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
