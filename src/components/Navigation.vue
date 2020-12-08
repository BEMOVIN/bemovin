<template>
  <b-navbar toggleable="xl" type="dark">
    <b-navbar-brand href="#">
      <img src="./../assets/images/logo.png" alt="" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template><i class="fas fa-bars"></i></template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text-uppercase d-flex justify-content-center">
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#about'"
          >За нас</b-nav-item
        >
        <b-nav-item
          class="mx-3 text-nowrap"
          href="#"
          v-scroll-to="'#activities'"
          >Тренировки</b-nav-item
        >
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#schedule'"
          >График</b-nav-item
        >
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#team'"
          >Екип</b-nav-item
        >
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#prices'"
          >Цени</b-nav-item
        >
        <b-nav-item class="mx-3 text-nowrap" href="#" v-scroll-to="'#contacts'"
          >Контакти</b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="bmv-social bmv-social-icons-pack">
        <b-nav-item href="https://www.facebook.com/bemovinsport"
          ><i class="fab fa-facebook-f"></i
        ></b-nav-item>
        <b-nav-item href="https://www.instagram.com/bemovinsport"
          ><i class="fab fa-instagram"></i
        ></b-nav-item>
        <b-nav-item
          href="https://www.youtube.com/channel/UCchRJiyYsgQl5oGdagyqk9w/featured"
          ><i class="fab fa-youtube"></i
        ></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
@import '../mixins';
$nav-item-margin: 1.5em;

.navbar {
  $logo-size: 12rem;

  z-index: 20;
  position: absolute;
  width: 100%;
  min-height: $navbar-size;
  font-size: 14px;
  font-weight: 700;
  padding: 1rem;

  & .navbar-brand {
    & img {
      width: $logo-size;
    }
  }

  & .navbar-toggler {
    color: $text-light;
    outline: none;

    & i {
      font-size: 1.8em;
    }
  }

  & .navbar-nav {
    width: 100%;
    margin-top: 2em;

    & .nav-item {
      margin: 0 $nav-item-margin;

      &:last-of-type,
      &:first-of-type {
        margin-left: auto;
      }

      & .nav-link {
        color: $text-light;
        letter-spacing: $letter-spacing-sm;

        &.bmv-nav-link-mobile {
          display: none;
        }
      }
    }

    &.bmv-social {
      & .nav-item {
        margin: 0 0.4em;
      }
      & a {
        padding: 0;
      }

      & .fab {
        font-size: 1.4em;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .navbar {
    & .navbar-collapse {
      background-color: $c-dark;
      min-height: 0;

      & .navbar-nav {
        padding: 3em;
        margin-top: 0;
        text-align: center;

        & .nav-item {
          font-size: 1.8em;
          margin: 0;

          &:last-of-type,
          &:first-of-type {
            margin-left: 0;
          }

          & .nav-link {
            &.bmv-nav-link-mobile {
              display: block;
            }
            &.bmv-nav-link-desktop {
              display: none;
            }
          }
        }
      }
    }

    .bmv-social {
      max-width: 100%;
      flex-flow: row nowrap;
      justify-content: center;
    }
  }
}
.bmv-social {
  justify-content: flex-end;
  $width: 13rem;
  min-width: $width;
  max-width: $width;
}
</style>
