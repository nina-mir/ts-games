export interface Racer<T>{
    name: string;
    speed: number;
    otherInfo: T;
}

export interface RunnerInfo{
    shoeBrand: string;
    stamina: number;
}

export interface BikerInfo{
    isSingleSpeed: boolean;
    isFixie: boolean;
    brand: string;
    isGear: boolean;
}

export interface DriverInfo{
    carMake: String;
    hasNitro: boolean;
}

