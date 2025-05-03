// HealingPotion — needs kind: 'heal', hpRestore: number, expiry: string

// ManaPotion — kind: 'mana', mpRestore: number, optional concentration?: number

// BuffPotion — kind: 'buff', array stats: string[], duration: number

export interface HealingPotion{
    kind: 'heal';
    hpRestore: number;
    expiry: string;
}

export interface ManaPotion{
    kind: 'mana';
    mpRestore: number;
    concentration?: number;
}

export interface BuffPotion{
    kind: 'buff';
    stats: string[];
    duration: number;
}

export type PotionTypes = HealingPotion | ManaPotion | BuffPotion