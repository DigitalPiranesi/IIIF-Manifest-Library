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
/**
 * The W3 Annotation Model describes:
 *
 * "In many cases it is important to understand the reasons why the Annotation
 * was created, or why the Textual Body was included in the Annotation, not just
 * the times and agents involved. These reasons are provided by declaring the
 * motivation for the Annotation's creation or the purpose for the inclusion of
 * the Textual Body in the Annotation; the "why" rather than the "who" and
 * "when" described in the previous sections."
 *
 * @since 1.0.0
 * @see <a href="https://www.w3.org/TR/annotation-model/#motivation-and-purpose">https://www.w3.org/TR/annotation-model/#motivation-and-purpose</a>
 */
enum EnumAnnotationMotivation {
  PAINTING = "painting",
  COMMENTING = "commenting",
  SUGGESTING = "suggesting"
};

export default EnumAnnotationMotivation;
