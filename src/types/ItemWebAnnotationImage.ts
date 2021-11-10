var lib = require("../lib");
import ItemWebAnnotation from "./ItemWebAnnotation";
import EnumWebAnnotationMotivation from "./enums/EnumWebAnnotationMotivation";
import ItemCanvas from "./ItemCanvas";

export default class WebAnnotationImage extends ItemWebAnnotation {
  body: {
    id: string,
    type: string,
    format: string,
    height: number,
    width: number
  } = {
    id: "",
    type: "Image",
    format: "",
    height: -1,
    width: -1
  };

  /**
   * @see https://iiif.io/api/image/3.0/#45-format
   */
  static getMIMEFromURL(url: string): string | null{
    switch(lib.getURLExtension(url)){
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      case "tif":
        return "image/tiff";
      case "png":
        return "image/png";
      case "gif":
        return "image/gif";
      case "jp2":
        return "image/jp2";
      case "pdf":
        return "application/pdf";
      case "webp":
        return "image/webp";
      default:
        return null;
    }
  }

  constructor(id: string, motivation: EnumWebAnnotationMotivation, canvas: ItemCanvas, imageURL: string, width: number, height: number){
    super(id, motivation, canvas.id);

    if(WebAnnotationImage.getMIMEFromURL(imageURL) == null){
      throw Error("Provided URL for image does not reference to an image format.");
    }

    this.reformatBody(imageURL, width, height);
  }

  reformatBody(id: string, width: number, height: number){
    this.body.id = id;
    this.body.format = WebAnnotationImage.getMIMEFromURL(id) || "";
    this.body.width = width;
    this.body.height = height;
  }
}
