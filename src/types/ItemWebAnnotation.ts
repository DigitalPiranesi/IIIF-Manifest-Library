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
import Item from "./Item";
import * as LIB from "../lib";
import EnumWebAnnotationMotivation from "./enums/EnumWebAnnotationMotivation";

/**
 *
 */
export default class ItemWebAnnotation extends Item {
  readonly type: string = "Annotation";
  motivation: EnumWebAnnotationMotivation;
  target: string;
  body?: any;

  /**
   * Create a new instance of a W3-compatible web annotation.
   *
   * @param id The id of this annotation
   * @param motivation The motivation of this annotation
   * @param target The target of this annotation (typically a canvas/annotation-page)
   * @param context (Optional) specification of additional contexts (includes W3 Web Annotation context by default).
   */
  constructor(id: string, motivation: EnumWebAnnotationMotivation, target: string, context?: string | string[]) {
    super(id, context);
    this.addContext("http://www.w3.org/ns/anno.jsonld");

    this.motivation = motivation;
    this.target = target;
  }

  /**
   * Set the target of this annotation
   *
   * @param target The ID of a target as a string.
   */
  setTarget(target: string){
    this.target = target;
  }

  /**
   * Set the body of the annotation forcefully.
   * NOTE: This should be done via implementation, but for simplicity can be done
   * programatically here.
   *
   * @param body The object to which to set the body equal.
   */
  setBody(body: any): void{
    this.body = body;
  }

  /**
   * Remove the body of the annotation.
   *
   * @return True if successful, false if it never existed to start with.
   */
  removeBody(): boolean{
    if(typeof this.body !== "undefined"){
      delete this.body;
      return true;
    }

    return false;
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
