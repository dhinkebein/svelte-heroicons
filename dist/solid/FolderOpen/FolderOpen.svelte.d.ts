/** @typedef {typeof __propDef.props}  FolderOpenProps */
/** @typedef {typeof __propDef.events}  FolderOpenEvents */
/** @typedef {typeof __propDef.slots}  FolderOpenSlots */
export default class FolderOpen extends SvelteComponent<{
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
export type FolderOpenProps = typeof __propDef.props;
export type FolderOpenEvents = typeof __propDef.events;
export type FolderOpenSlots = typeof __propDef.slots;
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
