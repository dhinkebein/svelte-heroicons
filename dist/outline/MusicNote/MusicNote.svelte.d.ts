/** @typedef {typeof __propDef.props}  MusicNoteProps */
/** @typedef {typeof __propDef.events}  MusicNoteEvents */
/** @typedef {typeof __propDef.slots}  MusicNoteSlots */
export default class MusicNote extends SvelteComponent<{
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
export type MusicNoteProps = typeof __propDef.props;
export type MusicNoteEvents = typeof __propDef.events;
export type MusicNoteSlots = typeof __propDef.slots;
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
