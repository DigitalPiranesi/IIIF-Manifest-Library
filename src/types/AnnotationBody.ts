import IJSONAble from "./interfaces/IJSONAble";


export default class AnnotationBody implements IJSONAble {

    constructor() {

    }

    /**
    * @return
    */
    toJSONString(): string {
        return JSON.stringify(this);
    }
}
