import { writable } from 'svelte/store';

export const do_cards_need_update = writable(false);
export const did_last_save_card_return_ok = writable(false);


