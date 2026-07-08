import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;

export type FinderItem = {
    id: number;
    name: string;
    icon: string;
    kind: string;
    position?: string;
    desktopPosition?: string;
    fileType?: string;
    href?: string;
    imageUrl?: string;
    pageType?: string;
    children?: FinderItem[];
};

export type FinderLocation = (FinderItem & { children: FinderItem[] }) | null;

type LocationStore = {
    activeLocation: FinderLocation;
    setActiveLocation: (location?: FinderLocation) => void;
    resetActiveLocation: () => void;
};

const useLocationStore = create(immer<LocationStore>((set) =>({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => 
        set((state) =>{
            state.activeLocation = location;
        }),

        resetActiveLocation: () => set((state) => {
            state.activeLocation = DEFAULT_LOCATION;
        })
        
  

}))
);

export default useLocationStore
