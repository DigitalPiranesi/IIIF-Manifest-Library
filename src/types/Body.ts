import IJSONAble from "./interfaces/IJSONAble";


export default class Body implements IJSONAble {

    constructor() {

    }

    /**
    * @return
    */
    toJSONString(): string {
        return JSON.stringify(this);
    }
}