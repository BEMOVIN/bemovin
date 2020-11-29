<template>
  <nav class="navbar navbar-expand-xl">
    <a class="navbar-brand" href="#">
      <img src="./../assets/images/logo.png" alt="" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav justify-content-end text-uppercase">
        <li class="nav-item">
          <a
            class="nav-link bmv-nav-link-desktop"
            href="#"
            v-scroll-to="'#about'"
            >За нас</a
          >
          <a
            class="nav-link bmv-nav-link-mobile"
            href="#"
            v-scroll-to="'#about'"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            >За нас</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link bmv-nav-link-desktop"
            href="#"
            v-scroll-to="'#activities'"
            >Тренировки</a
          >
          <a
            class="nav-link bmv-nav-link-mobile"
            href="#"
            v-scroll-to="'#activities'"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            >Тренировки</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link bmv-nav-link-desktop"
            href="#"
            v-scroll-to="'#schedule'"
            >График</a
          >
          <a
            class="nav-link bmv-nav-link-mobile"
            href="#"
            v-scroll-to="'#schedule'"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            >График</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link bmv-nav-link-desktop"
            href="#"
            v-scroll-to="'#team'"
            >Екип</a
          >
          <a
            class="nav-link bmv-nav-link-mobile"
            href="#"
            v-scroll-to="'#team'"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            >Екип</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link bmv-nav-link-desktop"
            href="#"
            v-scroll-to="'#prices'"
            >Цени</a
          >
          <a
            class="nav-link bmv-nav-link-mobile"
            href="#"
            v-scroll-to="'#prices'"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            >Цени</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link bmv-nav-link-desktop"
            href="#"
            v-scroll-to="'#contacts'"
            >Контакти</a
          >
          <a
            class="nav-link bmv-nav-link-mobile"
            href="#"
            v-scroll-to="'#contacts'"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            >Контакти</a
          >
        </li>
        <li class="nav-item">
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
        </li>
      </ul>
    </div>
  </nav>
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

      & .bmv-social-icons-pack {
        align-self: flex-end;

        & .fab {
          font-size: 1.4em;
        }
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

          & .bmv-social-icons-pack {
            margin-top: 1em;
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
  }
}
</style>
