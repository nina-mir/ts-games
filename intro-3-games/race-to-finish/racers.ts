import { Racer, DriverInfo, BikerInfo, RunnerInfo } from './racerType'

// define a union type for all possible “otherInfo” shapes
type AnyRacerInfo = DriverInfo | BikerInfo | RunnerInfo

// use generic to build different racers
const runner: Racer<RunnerInfo> = {
    name: 'tamzin',
    speed: 1,
    otherInfo: {
        shoeBrand: 'hoka',
        stamina: 100
    }
}

const bicyclist: Racer<BikerInfo> = {
    name: 'nina',
    speed: 10,
    otherInfo: {
        isSingleSpeed: true,
        isFixie: false,
        brand: 'Wabi',
        isGear: false,
    }
}

const driver: Racer<DriverInfo> = {
    name: 'khosrow',
    speed: 1000,
    otherInfo: {
        carMake: 'Pugeot',
        hasNitro: false,
    }
}



// create a type guard function to ensure RunnerInfo 
function isRunnerInfo(info: unknown): info is RunnerInfo{
    return typeof (info as RunnerInfo).shoeBrand == 'string';
}
function isBikerInfo(info: unknown): info is BikerInfo{
    return typeof (info as BikerInfo).isSingleSpeed == 'boolean'
}
function isDriverInfo(info: unknown): info is DriverInfo{
    return typeof (info as DriverInfo).carMake == 'string'
}

// create a race function
function race<T>(racer: Racer<AnyRacerInfo>){
    console.log(`racer ${racer.name} is at speed ${racer.speed}`)
    if (isRunnerInfo(racer.otherInfo)){
        console.log(`oh oh oh we have a 🏃🏽‍♀️ who wears ${racer.otherInfo.shoeBrand} 👟`)
    } else if (isBikerInfo(racer.otherInfo)){
        console.log(`jawohl! wir haben eine Radfahrerin ${racer.name}!`)
        if (racer.otherInfo.isSingleSpeed){
            console.log('Und sie fährt ein Singlespeed-Fahrrad')
        }
    } else if (isDriverInfo(racer.otherInfo)){
        console.log(`Ugh! Wir haben einen beschissenen Autofahrer, ${racer.name},
        der es liebt ${racer.otherInfo.carMake} zu fahren!`)
    }
}

const all = [runner, bicyclist, driver]

for (const item of all){
    race(item)
    console.log('🌌☄️🚀🛰️')
}

