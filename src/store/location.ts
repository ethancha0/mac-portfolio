import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;

type Location = typeof DEFAULT_LOCATION | null;

type LocationStore = {
    activeLocation: Location;
    setActiveLocation: (location?: Location) => void;
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