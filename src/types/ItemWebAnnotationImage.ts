/*
 * Copyright 2023 The University of South Carolina
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lib = require("../lib");
import ItemWebAnnotation from "./ItemWebAnnotation";
import EnumWebAnnotationMotivation from "./enums/EnumWebAnnotationMotivation";
import ItemCanvas from "./ItemCanvas";

/**
 * This is an implemention of the W3 Web Annotation specification for displaying
 * an image as an annotation on a `Canvas`.
 *
 * @author Clio Lang, Walter Pach
 * @since 0.1
 */
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
   * Provides a helper function for decoding the MIME from a file extension.
   *
   * @see https://iiif.io/api/image/3.0/#45-format
   * @param url A string of indeterminate length ending with a file extension.
   * @returns The MIME string for this extension or null if there is none.
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

  /**
   * Create a new instance of `ItemWebAnnotationImage`
   *
   * @param id The unique ID of this annotation
   * @param motivation The motivation for this annotation
   * @param canvas The canvas object (or its `id`) to which this will be bound.
   * @param imageURL The URL of the image (must be referencable)
   * @param width The width of the image to display in pixels (does not have to match actual file)
   * @param height The height of the image to display in pixels (does not have to match actual file)
   */
  constructor(id: string, motivation: EnumWebAnnotationMotivation, canvas: ItemCanvas | string, imageURL: string, width: number, height: number){
    super(id, motivation, (typeof canvas === "string" ? canvas : canvas.id));

    if(WebAnnotationImage.getMIMEFromURL(imageURL) == null){
      throw Error("Provided URL for image does not reference to an image format.");
    }

    this.reformatBody(imageURL, width, height);
  }


  /**
   * Reformat the body object of this annotation.
   *
   * @param id The new `id` of the annotation
   * @param width The new width
   * @param height The new height
   */
  reformatBody(id: string, width: number, height: number){
    this.body.id = id;
    this.body.format = WebAnnotationImage.getMIMEFromURL(id) || "";
    this.body.width = width;
    this.body.height = height;
  }
}
