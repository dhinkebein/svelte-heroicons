/** @typedef {typeof __propDef.props}  DocumentDuplicateProps */
/** @typedef {typeof __propDef.events}  DocumentDuplicateEvents */
/** @typedef {typeof __propDef.slots}  DocumentDuplicateSlots */
export default class DocumentDuplicate extends SvelteComponent<{
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
export type DocumentDuplicateProps = typeof __propDef.props;
export type DocumentDuplicateEvents = typeof __propDef.events;
export type DocumentDuplicateSlots = typeof __propDef.slots;
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
