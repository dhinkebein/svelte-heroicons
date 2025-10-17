/** @typedef {typeof __propDef.props}  FolderDownloadProps */
/** @typedef {typeof __propDef.events}  FolderDownloadEvents */
/** @typedef {typeof __propDef.slots}  FolderDownloadSlots */
export default class FolderDownload extends SvelteComponent<{
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
export type FolderDownloadProps = typeof __propDef.props;
export type FolderDownloadEvents = typeof __propDef.events;
export type FolderDownloadSlots = typeof __propDef.slots;
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
