import { writable } from "svelte/store";

const game = writable({ id: null, name: null, cards: [], users: {} });

export { game };
