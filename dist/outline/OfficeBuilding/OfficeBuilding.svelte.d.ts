/** @typedef {typeof __propDef.props}  OfficeBuildingProps */
/** @typedef {typeof __propDef.events}  OfficeBuildingEvents */
/** @typedef {typeof __propDef.slots}  OfficeBuildingSlots */
export default class OfficeBuilding extends SvelteComponent<{
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
export type OfficeBuildingProps = typeof __propDef.props;
export type OfficeBuildingEvents = typeof __propDef.events;
export type OfficeBuildingSlots = typeof __propDef.slots;
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
