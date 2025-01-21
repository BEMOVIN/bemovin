<template>
  <b-carousel
    id="bmv-carousel"
    class="bmv-carousel"
    v-model="slide"
    :interval="5000"
    controls
    indicators
  >
    <b-carousel-slide :img-src="slide1">
      <template #img>
        <div
          class="bmv-carousel-content"
          :style="{
            'background-image': `url(${slide1})`
          }"
        >
          <span class="bmv-carousel-title-sm"
            >Персонални функционални тренировки</span
          >
          <span class="bmv-carousel-title-lg">Дефинирай своята цел</span>
          <a
            href="#"
            v-scroll-to="'#activities'"
            class="btn btn-success bmv-carousel-btn"
            role="button"
            >Повече</a
          >
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <div
          class="bmv-carousel-content"
          :style="{
            'background-image': `url(${slide2})`
          }"
        >
          <span class="bmv-carousel-title-sm"
            >Запознай се с нашите класове</span
          >
          <span class="bmv-carousel-title-lg">Групови тренировки</span>
          <a
            href="#"
            v-scroll-to="'#activities-groups'"
            class="btn btn-success bmv-carousel-btn"
            role="button"
            >Повече</a
          >
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <div
          class="bmv-carousel-content"
          :style="{
            'background-image': `url(${slide3})`
          }"
        >
          <span class="bmv-carousel-title-sm"
            >Придай смисъл на своите тренировки</span
          >
          <span class="bmv-carousel-title-lg">Присъедини се към групата</span>
          <div class="bmv-social-icons-pack">
            <a href="https://www.facebook.com/bemovinsport"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="https://www.instagram.com/bemovinsport"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.youtube.com/channel/UCchRJiyYsgQl5oGdagyqk9w/featured"
              ><i class="fab fa-youtube"></i
            ></a>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import slide1 from '../assets/images/slides/1.webp'
import slide2 from '../assets/images/slides/2.webp'
import slide3 from '../assets/images/slides/3.webp'

export default {
  name: 'Carousel',
  data() {
    return { slide: 0, slide1, slide2, slide3 }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.bmv-carousel {
  $carousel-height: 100vh;
  height: $carousel-height;

  & .bmv-carousel-content {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding-top: 10em;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;

    & .bmv-carousel-title-sm,
    & .bmv-carousel-title-lg {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1em;
      letter-spacing: $letter-spacing-xs;
    }

    & .bmv-carousel-title-sm {
      font-size: 1.6em;
      color: $c-palette-accent-dark;
      @include animation-slide-in-right(0.4s);
    }

    & .bmv-carousel-title-lg {
      font-size: 2.6em;
      color: $text-light;
      @include animation-slide-in-left(0.6s);
    }

    & .bmv-carousel-btn {
      width: 14em;
      padding: 1em 2.6em;
      border-radius: 30px;
      margin: 2em auto 1em auto;
      text-transform: uppercase;
      @include animation-slide-in-right(0.8s);
    }

    & .bmv-social-icons-pack {
      @include animation-slide-in-right(0.8s);
      & .fab {
        font-size: 2.2em;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .carousel {
    & .bmv-carousel-content {
      padding: 8em 2em 1em 2em;
      & .bmv-carousel-title-sm {
        font-size: 1.4em;
      }

      & .bmv-carousel-title-lg {
        font-size: 2.4em;
      }

      & .bmv-social-icons-pack {
        & .fab {
          font-size: 2em;
        }
      }

      & .bmv-carousel-btn {
        margin-top: 1em;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .carousel {
    & .bmv-carousel-content {
      & .bmv-carousel-title-sm {
        font-size: 1em;
      }

      & .bmv-carousel-title-lg {
        font-size: 2em;
      }

      & .bmv-social-icons-pack {
        & .fab {
          font-size: 1.6em;
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
}
</style>
