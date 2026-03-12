import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;

type TopLevelLocation = (typeof locations)[keyof typeof locations];
type SubFolderLocation = typeof locations.work.children[number];
export type FinderLocation = TopLevelLocation | SubFolderLocation | null;

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