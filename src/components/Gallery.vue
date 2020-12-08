<template>
  <div class="bmv-gallery">
    <b-carousel
      class="bmv-gallery-carousel"
      v-model="slide"
      :interval="0"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="(slideImages, slideIdx) in thumbnails"
        :key="slideIdx"
      >
        <template #img>
          <div
            class="d-flex flex-wrap justify-content-center bmv-gallery-imgs p-5"
          >
            <div
              class="bmv-gallery-img"
              v-for="thmb in slideImages"
              :key="thmb.src"
            >
              <img
                :src="thmb.src"
                alt="gallery image"
                class="image-responsive"
                @click="lightboxIndex = thmb.lightboxIndex"
              />
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>

    <CoolLightBox
      :items="images"
      :index="lightboxIndex"
      @close="lightboxIndex = null"
      effect="fade"
    >
    </CoolLightBox>
  </div>
</template>

<script>
export default {
  // check https://vue-cool-lightbox.lucaspulliese.com/
  name: 'Gallery',
  data() {
    return {
      slide: 0,
      images: [],
      thumbnails: [],
      lightboxIndex: null
    }
  },

  mounted() {
    this.importAllImages(
      require.context('../assets/images/gallery/', true, /\.jpg$/)
    )
  },

  methods: {
    importAllImages(r) {
      // NOTE: The image collection relies on the natural sorting and naming convention of the filenames.
      let thumbnailIdx = 0
      const imageMap = {}
      for (const key of r.keys()) {
        const imagePath = r(key)
        const fileId = key.substring(key.indexOf('/') + 1, key.indexOf('/') + 5)
        if (imagePath.indexOf('thmb') === -1) {
          if (!imageMap[fileId]) {
            imageMap[fileId] = { src: imagePath }
          } else {
            imageMap[fileId]['src'] = imagePath
          }
        } else if (imagePath.indexOf('thmb.xs') !== -1) {
          if (!imageMap[fileId]) {
            imageMap[fileId] = { thumb: imagePath }
          } else {
            imageMap[fileId]['thumb'] = imagePath
          }
        } else {
          const slideNumText = key.substring(
            key.indexOf('./') + 2,
            key.indexOf('.', 2)
          )
          const slideNum = parseInt(slideNumText)
          const slideIndex = slideNum - 1
          if (!this.thumbnails[slideIndex]) {
            this.thumbnails[slideIndex] = []
          }
          this.thumbnails[slideIndex].push({
            src: imagePath,
            lightboxIndex: thumbnailIdx
          })
          thumbnailIdx++
        }
      }

      this.images = Object.values(imageMap)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../custom';

.bmv-gallery {
  background-color: $c-dark;
  padding: 1em 1em;
  $height-img-min: 16em;
  $height-img-max: 20em;

  & .bmv-gallery-imgs {
    margin: 0 auto;
    max-width: 80em;
    min-width: 16em;
    width: 100%;
  }

  & .bmv-gallery-img {
    margin: 0.4em;
    min-height: $height-img-min;
    max-height: $height-img-max;
    min-width: 10em;
    overflow: hidden;
  }
  & img {
    min-height: $height-img-min;
    max-height: $height-img-max;
    transition: transform 2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
