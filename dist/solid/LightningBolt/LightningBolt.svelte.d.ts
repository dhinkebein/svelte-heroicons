/** @typedef {typeof __propDef.props}  LightningBoltProps */
/** @typedef {typeof __propDef.events}  LightningBoltEvents */
/** @typedef {typeof __propDef.slots}  LightningBoltSlots */
export default class LightningBolt extends SvelteComponent<{
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
export type LightningBoltProps = typeof __propDef.props;
export type LightningBoltEvents = typeof __propDef.events;
export type LightningBoltSlots = typeof __propDef.slots;
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
