export type Options = {
    regionSize?: number
    minRegionSize?: number
    maxIterations?: number
}

export default class SLIC {
    private regionSize: number
    private minRegionSize: number
    private maxIterations: number

    constructor(imageData: ImageData, options?: Options) {
        this.regionSize =  options?.regionSize !== undefined ? options.regionSize : 16;
        this.minRegionSize = options?.minRegionSize !== undefined ? options.minRegionSize :
                             Math.round(this.regionSize * 0.8);
        this.maxIterations = options?.maxIterations !== undefined ? options.maxIterations : 10;
    }
}