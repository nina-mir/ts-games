interface Monster{
    name: string,
    health: number,
    attackPower: number
}

interface PoisonousMonster extends Monster{
    poisonDamage: number
}

interface FeuerMonster extends Monster{
    fireDamage: string
}

interface CloningMonster extends Monster{
    clones?: number
}

type EvolvingMonster = Monster | PoisonousMonster | FeuerMonster | CloningMonster

function monsterAttack(monster: EvolvingMonster){
    console.log(`monster ${monster.name} has ${monster.health} health!`)

    if ('fireDamage' in monster){
        console.log(`monster has ${monster.fireDamage} fire power!`)
    }

    if ('poisonDamage' in monster){
        console.log(`dad Gift der Staerke ${monster.poisonDamage} faellt mir auf!`)
    } else{
        console.log(`ich finde hier kein Gift!`)
    }

}

const monster: EvolvingMonster = {
    name: 'nina',
    health: 10,
    attackPower: 200,
    fireDamage: 'kaput!',
    poisonDamage: 69,
}

monsterAttack(monster)