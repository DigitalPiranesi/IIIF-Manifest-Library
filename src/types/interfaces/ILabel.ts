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
import IJSONAble from "./IJSONAble";

/**
 * The ILabel interface provides the architecture for
 * the "label" property in the manifest.
 *
 * According to IIIF v3, a label can have a value of the
 * localisation code for the language and an array of strings
 * as the value.
 */
export default interface ILabel extends IJSONAble {
  values: string[];
}
