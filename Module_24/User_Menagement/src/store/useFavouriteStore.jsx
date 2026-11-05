import { create } from "zustand";

const STORAGE_KEY = "favouriteUsers";
const loadFavourites = ()=>{
    try{
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved): [];
    }catch(error){
        return [];
    }
};

const saveFavourites= (favourites)=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
};

export const useFavouriteStore = create((set)=>({
    favourites: loadFavourites(),
    addFavourite: (user) => 
        set((state)=>{
            const update = [...state.favourites, user];
            saveFavourites(update);
            return {favourites: update}
        }),

        removeFavourite: (id)=>
    set((state)=>{
        const update = state.favourites.filter((u)=> u.id !== id);
        saveFavourites(update)
        return {favourites: update}
    })

}));


