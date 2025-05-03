// itemTypes.ts
// Start by creating broad, descriptive interfaces or types for items.

export interface GoldenKey {
    name: 'Golden Key';
    rarity: string;
  }
  
  export interface HealthPotion {
    name: 'Health Potion';
    healing: number;
  }
  
  export interface SpellBook {
    name: 'Spell Book';
    spells: string[];
  }
  
  export interface Ration {
    name: 'Ration';
    nutrition: number;
  }
  
  // Then you can combine them into a union:
  export type GameItem = GoldenKey | HealthPotion | SpellBook | Ration;
  