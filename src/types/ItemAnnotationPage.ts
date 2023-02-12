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

/**
 * This is a container that satisfies the IIIF standard for an `AnnotationPage`
 * being included in a markup-annotation (see `ItemAnnotation` for more)
 * and allows for manipulation of multiple annotations.
 *
 * Documentation is the same as an `Item`, so none given.
 *
 * @author Walter Pach, Clio Lang
 */
export default class ItemAnnotationPage extends Item {
  readonly type: string = "AnnotationPage";

  constructor(id: string){
    super(id, undefined)
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
