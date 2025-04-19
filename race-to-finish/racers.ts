import { Racer, DriverInfo, BikerInfo, RunnerInfo } from './racerType'


// use generic to build different racers

const runner: Racer<RunnerInfo> = {
    name: 'nina',
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
        isSingleSpeed: true;
        isFixie: false;
        brand: 'Wabi';
        isGear: false;
    }
}