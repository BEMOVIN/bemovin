<template>
  <div class="container bmv-keycopy-gallery">
    <div class="row">
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        class="col bmv-text-letter-spacing-xs bmv-keycopy-gallery-text"
      >
        <h2 class="bmv-keycopy-gallery-title">Персонални тренировки</h2>
        <p class="bmv-keycopy-gallery-subtitle">В удобно за теб време</p>
        <a
          class="btn btn-success bmv-keycopy-gallery-subtitle"
          href="#"
          v-scroll-to="'#prices'"
          >Цени</a
        >
      </div>
      <div
        v-for="tile in tilesFirstRow"
        :key="tile.image"
        data-aos="fade-right"
        :data-aos-delay="tile.delay"
        class="col"
        :style="{ 'background-image': `url(${tile.image})` }"
      ></div>
    </div>
    <div class="row">
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        class="col"
        :style="{ 'background-image': `url(${img4})` }"
      ></div>
    </div>
    <div class="row">
      <div
        v-for="tile in tilesSecondRow"
        :key="tile.image"
        data-aos="fade-right"
        :data-aos-delay="tile.delay"
        class="col"
        :style="{ 'background-image': `url(${tile.image})` }"
      ></div>
      <div
        data-aos="fade-right"
        data-aos-delay="800"
        class="col bmv-text-letter-spacing-xs bmv-keycopy-gallery-text"
      >
        <h2 class="bmv-keycopy-gallery-title">Групови тренировки</h2>
        <p class="bmv-keycopy-gallery-subtitle">Заедно е весело</p>
        <a
          class="btn btn-success bmv-keycopy-gallery-subtitle"
          href="#"
          v-scroll-to="'#schedule'"
          >График</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/images/keycopy-gallery/1.webp'
import img2 from '../assets/images/keycopy-gallery/2.webp'
import img3 from '../assets/images/keycopy-gallery/3.webp'
import img4 from '../assets/images/keycopy-gallery/4.webp'
import img5 from '../assets/images/keycopy-gallery/5.webp'
import img6 from '../assets/images/keycopy-gallery/6.webp'

export default {
  name: 'KeycopyGallery',
  computed: {
    tilesFirstRow() {
      return [
        { image: img1, delay: 400 },
        { image: img2, delay: 600 },
        { image: img3, delay: 800 }
      ]
    },
    tilesSecondRow() {
      return [
        { image: img4, delay: 400 },
        { image: img5, delay: 600 },
        { image: img6, delay: 800 }
      ]
    },
    img4() {
      return img4
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.bmv-keycopy-gallery {
  min-height: 42em;
  max-width: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: $c-dark;

  $col-min-height: 20em;
  .row {
    flex: 1;

    & .col {
      flex: 1;
      background-size: cover;
      min-height: $col-min-height;
    }

    &:nth-of-type(2) {
      display: none;
      height: $col-min-height;
    }
  }

  & .bmv-keycopy-gallery-text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    color: $c-light;

    & .bmv-keycopy-gallery-title {
      font-weight: 500;
    }

    & .bmv-keycopy-gallery-subtitle {
      font-size: 0.8em;
      font-weight: 100;

      &.btn {
        border-radius: 30px;
        width: 16em;
        margin: 1em auto;
        padding: 1em;
        font-weight: 500;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .bmv-keycopy-gallery {
    & .row {
      &:nth-of-type(1) {
        & .col {
          &:nth-of-type(4) {
            display: none;
          }
        }
      }
      &:nth-of-type(3) {
        & .col {
          &:nth-of-type(1) {
            display: none;
          }
        }
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .bmv-keycopy-gallery {
    & .row {
      &:nth-of-type(1) {
        & .col {
          &:nth-of-type(2),
          &:nth-of-type(3) {
            display: none;
          }
        }
      }

      &:nth-of-type(2) {
        display: flex;
      }

      &:nth-of-type(3) {
        & .col {
          &:nth-of-type(2),
          &:nth-of-type(3) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
