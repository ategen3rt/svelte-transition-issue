import { writable, type Writable } from 'svelte/store';

const favorites: Record<string, Writable<boolean>> = {};

export function getFavoriteStore(id: string) {
    let favorite = favorites[id];
    if (favorite === undefined) {
        favorite = writable(false);
        favorites[id] = favorite;
    }
    return favorite;
}