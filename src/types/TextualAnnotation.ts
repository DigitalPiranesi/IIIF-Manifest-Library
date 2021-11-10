import IJSONAble from "./interfaces/IJSONAble";
import Annotation from "./Annotation";
import EnumAnnotationMotivation from "./enums/EnumAnnotationMotivation";

export default class TextualAnnotation extends Annotation {
  body: {
    type: string,
    value: string,
    language: string,
    format: string
  } = {
    type: "TextualAnnotation",
    value: "",
    language: "",
    format: "text/html"
  };

  constructor(id: string, motivation: EnumAnnotationMotivation, value: string, language: string, target?: string){
    super(id, motivation, target);

    this.body.value = value;
    this.body.language = language;
  }

  getBody(){
    return this.body;
  }
}
