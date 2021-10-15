/*
 * Provides the layout information for a IIIF v3 context.
 *
 * @author Walter P.
 * @date 10/6/2021
 */

/**
 * Context descriptions are divided into parts:
 *
 * 1. Header - General information regarding the manifest.
 * 2. Body   - Specific, content-related pieces.
 *
 * Context parsing works by iterating through the elements within the header
 * and body and assigning key-value pairs that are automatically set, then
 * prompts the user for any values that are null and property `prompt` is true.
 */
module.exports = {
  valid: false
};

obj = {
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "http://piranesi-test.reclaim.hosting/walts-test-book/media/manifest_generator.js",
  "type": "Manifest",

  "label": {
    "en": ["IIIF Manifest Implementation Test"]
  },

  "metadata": [
    {
      "label": {"en": ["Creator"]},
      "value": {"en": ["Piranesi"]}
    }
  ],

  "summary": {
    "en": ["This is a test image of the manifest."]
  },

  "items": [
    {
      "id": "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1",
      "type": "Canvas",
      "height": 1800,
      "width": 1200,
      "items": [
        {
          "id": "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/page/p1/1",
          "type": "AnnotationPage",
          "items": [
            {
              "id": "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/annotation/p0001-image",
              "type": "Annotation",
              "motivation": "painting",
              "body": {
                "id": "https://env-4072537.us.reclaim.cloud/iiif/2/tomjerry.jpeg/full/full/0/default.jpg",
                "type": "Image",
                "format": "image/jpeg",
                "height": 1800,
                "width": 1200
              },
              "target": "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1"
            }
          ]
        }
      ]
    }
  ]
}
}
