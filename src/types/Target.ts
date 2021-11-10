import IJSONAble from "./interfaces/IJSONAble";

export default class Target implements IJSONAble {
    readonly baseURL: string;

    /**
     * 
     * @param baseURL 
     */
    constructor() {
        this.baseURL = "https://piranesi-test.reclaim.hosting/";
    }

    /**
     * 
     * @param pathExtension 
     */
    addExtension(pathExtension: string): string {
        var URL = this.baseURL.concat(pathExtension);
        return URL;
    }


    /**
     * @return
     */
    toJSONString(): string {
        return JSON.stringify(this);
      }
}