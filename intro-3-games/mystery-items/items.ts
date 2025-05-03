import {GameItem} from './itemTypes'

// Let's say you have a file items.ts with the following given array ...
export const items : GameItem[] = [
    { name: 'Golden Key', rarity: 'rare' },
    { name: 'Health Potion', healing: 50 },
    { name: 'Spell Book', spells: ['fireball', 'teleport'] },
    { name: 'Ration', nutrition: 10 }
  ];
  
function useItem(item: GameItem) {
    switch(item.name){
        case 'Golden Key':
            console.log(`Golden Key found! Rarity is ${item.rarity}`)
        default:
            console.log(`this is default behavior, ${item.name}!`)
    }
}

for (const item of items){
    useItem(item)
}