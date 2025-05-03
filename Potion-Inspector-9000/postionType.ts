// HealingPotion — needs kind: 'heal', hpRestore: number, expiry: string

// ManaPotion — kind: 'mana', mpRestore: number, optional concentration?: number

// BuffPotion — kind: 'buff', array stats: string[], duration: number

interface HealingPotion{
    kind: 'heal';
    hpRestore: number;
    expiry: string;
}

interface ManaPotion{
    kind: 'mana';
    mpRestore: number;
    concentration?: number;
}

interface BuffPotion{
    kind: 'buff';
    stats: string[];
    duration: number;
}

