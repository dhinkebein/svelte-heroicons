/** @typedef {typeof __propDef.props}  ViewBoardsProps */
/** @typedef {typeof __propDef.events}  ViewBoardsEvents */
/** @typedef {typeof __propDef.slots}  ViewBoardsSlots */
export default class ViewBoards extends SvelteComponent<{
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
export type ViewBoardsProps = typeof __propDef.props;
export type ViewBoardsEvents = typeof __propDef.events;
export type ViewBoardsSlots = typeof __propDef.slots;
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
