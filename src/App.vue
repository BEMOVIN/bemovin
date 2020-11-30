<template>
  <div id="app">
    <navigation />
    <carousel />
    <keycopy />
    <keycopy-gallery />
    <activity-types />
    <calendar />
    <team />
    <prices />
    <contacts />
    <gallery />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Carousel from './components/Carousel.vue'
import Keycopy from './components/Keycopy.vue'
import KeycopyGallery from './components/KeycopyGallery.vue'
import ActivityTypes from './components/ActivityTypes.vue'
import Calendar from './components/calendar/Calendar.vue'
import Team from './components/Team.vue'
import Prices from './components/Prices.vue'
import Contacts from './components/Contacts.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Carousel,
    Keycopy,
    KeycopyGallery,
    ActivityTypes,
    Calendar,
    Team,
    Prices,
    Contacts,
    Gallery
  }
}
</script>

<style lang="scss">
@import './custom.scss';
@import './mixins.scss';
$theme-colors: (
  'primary': $c-palette-primary,
  'danger': $c-palette-sec-primary,
  'success': $c-palette-accent-dark
);
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
@import '~aos/src/sass/aos.scss';

body {
  font-family: $font-family-sans-serif;
  background-color: $c-light-dark;
}

a {
  &:hover {
    text-decoration: none;
  }
}

.bmv-title {
  display: block;
  color: $c-palette-primary;
  letter-spacing: $letter-spacing-xs;
  font-size: 2.2em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1em;

  &.bmv-title-dark {
    color: $c-palette-accent-dark;
  }
}

.bmv-subtitle {
  display: block;
  color: $c-palette-light;
  letter-spacing: $letter-spacing-xs;
  font-size: 1.4em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5em;
}

.bmv-message {
  display: block;
  font-size: 1.4em;
  text-align: center;
  letter-spacing: $letter-spacing-xxs;
}

.bmv-text-logo {
  font-style: italic;
  font-weight: 700;

  & .bmv-text-logo-accent {
    color: $c-palette-primary;
  }
}

.bmv-text-letter-spacing-xxs {
  letter-spacing: $letter-spacing-xs;
}

.bmv-text-letter-spacing-xs {
  letter-spacing: $letter-spacing-xs;
}

.bmv-text-letter-spacing-sm {
  letter-spacing: $letter-spacing-sm;
}

.fab {
  @include default-transition();
  text-align: center;
  text-decoration: none;
  color: $text-light;

  &.fa-facebook-f {
    &:hover {
      background: #3b5998;
    }
  }

  &.fa-youtube {
    &:hover {
      background: #bb0000;
    }
  }

  &.fa-instagram {
    &:hover {
      background: #833ab4;
    }
  }
}

.bmv-social-icons-pack {
  & .fab {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    line-height: 2em;
  }
}

/* Fonts */
@font-face {
  font-family: GothaPro;
  src: url('./assets/fonts/gotham_pro/GothaProMed.otf') format('opentype');
}

@font-face {
  font-family: GothaPro;
  font-weight: bold;
  src: url('./assets/fonts/gotham_pro/GothaProBol.otf') format('opentype');
}

@font-face {
  font-family: GothaPro;
  font-weight: italic;
  src: url('./assets/fonts/gotham_pro/GothaProIta.otf') format('opentype');
}
</style>
