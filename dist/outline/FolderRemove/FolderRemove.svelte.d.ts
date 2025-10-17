/** @typedef {typeof __propDef.props}  FolderRemoveProps */
/** @typedef {typeof __propDef.events}  FolderRemoveEvents */
/** @typedef {typeof __propDef.slots}  FolderRemoveSlots */
export default class FolderRemove extends SvelteComponent<{
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
export type FolderRemoveProps = typeof __propDef.props;
export type FolderRemoveEvents = typeof __propDef.events;
export type FolderRemoveSlots = typeof __propDef.slots;
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
