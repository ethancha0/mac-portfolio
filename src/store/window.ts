import { create } from 'zustand'
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '../constants';

export type WindowKey = keyof typeof WINDOW_CONFIG;
type WindowData = unknown;
type WindowInstance = {
    isOpen: boolean;
    zIndex: number;
    data: WindowData | null;
};

type WindowStore = {
    windows: Record<WindowKey, WindowInstance>;
    nextZIndex: number;
    openWindow: (windowKey: WindowKey, data?: WindowData | null) => void;
    closeWindow: (windowKey: WindowKey) => void;
    focusWindow: (windowKey: WindowKey) => void;
};

const useWindowStore = create<WindowStore>()(immer((set) => ({
    windows: WINDOW_CONFIG as Record<WindowKey, WindowInstance>, // finder, contact, resume, safari, etc
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) =>{
        if (!(windowKey in WINDOW_CONFIG) || !state.windows[windowKey]) {
            throw new Error(`openWindow: invalid window key "${windowKey}"`);
        }
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    closeWindow: (windowKey) => set((state) =>{
        if (!(windowKey in WINDOW_CONFIG) || !state.windows[windowKey]) {
            throw new Error(`closeWindow: invalid window key "${windowKey}"`);
        }
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    focusWindow: (windowKey) => set((state) =>{
        if (!(windowKey in WINDOW_CONFIG) || !state.windows[windowKey]) {
            throw new Error(`focusWindow: invalid window key "${windowKey}"`);
        }
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
    }),


})));

export default useWindowStore;