/** @typedef {typeof __propDef.props}  EmojiHappyProps */
/** @typedef {typeof __propDef.events}  EmojiHappyEvents */
/** @typedef {typeof __propDef.slots}  EmojiHappySlots */
export default class EmojiHappy extends SvelteComponent<{
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
export type EmojiHappyProps = typeof __propDef.props;
export type EmojiHappyEvents = typeof __propDef.events;
export type EmojiHappySlots = typeof __propDef.slots;
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
