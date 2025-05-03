import { HealingPotion, ManaPotion, BuffPotion, PotionTypes } from "./postionType";

function isHealingPotion(x: unknown): x is HealingPotion {
    if (!x || typeof x !== 'object') return false;
    const maybe = x as Partial<HealingPotion>;

    return typeof maybe.expiry === 'string' && maybe.kind === 'heal' &&
    typeof maybe.hpRestore === 'number'; 
}
function isManaPotion   (x: unknown): x is ManaPotion {
    if (!x || typeof x !== 'object') return false;
    const maybe = x as Partial<ManaPotion>;

    return typeof maybe.mpRestore === 'number' && maybe.kind === 'mana' && 
    (typeof maybe.concentration === 'number' || maybe.concentration === undefined);
}
function isBuffPotion   (x: unknown): x is BuffPotion {
    if (!x || typeof x !== 'object') return false;
    const maybe = x as Partial<BuffPotion>
    return typeof maybe.duration === 'number' && maybe.kind === 'buff' &&
    Array.isArray( maybe.stats) && maybe.stats.every( item => typeof item === 'string')
}

// pretend this comes from an un-typed API ⇣
const rawPotions: unknown[] = [
    { id: 1, kind: 'heal',     hpRestore: 50,  expiry: '2025-05-01' },
    { id: 2, kind: 'mana',     mpRestore: 35,  concentration: 0.8 },
    { id: 3, kind: 'buff',     stats: ['str', 'dex'], duration: 120 },
    { id: 4, kind: 'heal',     hpRestore: 25 },                 // ✖ expiry missing
    { id: 5, kind: 'mana',     mpRestore: '50' },               // ✖ wrong type
  ];

  
function inspectPotion(x:unknown[]): any{
    for (let item of x){
        if (isHealingPotion(item))
            console.log('heal')
        else if (isBuffPotion(item))
            console.log('buff')
        else if (isManaPotion(item))
            console.log('mana')
        else
            console.log('ich weiss nicht!')
    }
}


inspectPotion(rawPotions)
