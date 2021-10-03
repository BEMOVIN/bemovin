<template>
  <div class="bmv-contacts" id="contacts">
    <div
      class="bmv-contacts-img-wrapper"
      :style="{ 'background-image': `url(${bgImage})` }"
    >
      <span class="bmv-title bmv-title-dark"
        >Присъедини се към<br />
        <span class="bmv-text-logo">
          <span class="bmv-text-logo-accent">BE</span
          ><span class="bmv-text-logo-normal">MOVIN</span>
        </span>
      </span>
    </div>
    <div class="container bmv-contacts-content">
      <div class="row justify-content-center">
        <div class="col">
          <iframe
            class="bmv-contacts-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.2310086169537!2d23.34818017757858!3d42.660324014143676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85d339d90285%3A0xf67792d212c90724!2sBemovin!5e0!3m2!1sen!2sbg!4v1543886990576"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col">
          <div class="bmv-contacts-info">
            <h3 class="bmv-contacts-info-title">Свържи се с нас</h3>
            <p class="bmv-contacts-info-text">
              Залата работи от 7:00 до 21:30 в делнични дни и от 10:00 до 16:00
              уикенда. Отговаряме на вашите обаждания в този диапазон.
            </p>
            <table>
              <tr>
                <td><i class="fas fa-phone"></i></td>
                <td><a href="tel:+359897274414">+359897274414</a></td>
              </tr>
              <tr>
                <td><i class="fas fa-envelope"></i></td>
                <td><a href="mailto:team@bemovin.bg">team@bemovin.bg</a></td>
              </tr>
              <tr>
                <td><i class="fas fa-map-marker-alt"></i></td>
                <td>
                  <a
                    href="https://www.google.com/maps/place/Bemovin/@42.660324,23.3481802,17.25z/data=!4m5!3m4!1s0x40aa85d339d90285:0xf67792d212c90724!8m2!3d42.6604985!4d23.3491606"
                    >бул. „Доктор Г. М. Димитров“ 62, София</a
                  >
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="bmv-contacts-social">
      <h6 class="bmv-contacts-social-title">Следвайте ни</h6>
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
  </div>
</template>

<script>
import bgImage from '../assets/images/meghan-holmes-1057329-unsplash.dark.jpg'

export default {
  name: 'Contacts',
  data() {
    return { bgImage }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.bmv-contacts {
  height: 100%;
  min-height: 52em;
  background-color: $c-dark;
  padding: 1em;

  & .bmv-title {
    &.bmv-title-dark {
      color: $text-light;
    }
  }

  & .bmv-contacts-img-wrapper {
    padding-top: 4em;
    height: 30em;
    background-color: $c-palette-sec-dark;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .bmv-contacts-content {
    background-color: $c-light;
    margin-top: -12em;

    & .col {
      padding: 0;
    }

    & .bmv-contacts-map {
      width: 100%;
      min-width: 20em;
      height: 100%;
      min-height: 18em;
    }

    & .bmv-contacts-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      padding: 3.4em;
      height: 100%;

      & td {
        padding: 0.4em 0;

        & a {
          color: $text-dark;
        }

        & i {
          text-align: center;
          font-size: 1.5em;
          margin-right: 0.5em;
        }

        &:nth-of-type(1) {
          text-align: center;
          color: $c-palette-primary;
        }
      }
    }
  }

  & .bmv-contacts-social {
    margin-top: 3.4em;
    text-align: center;

    & .bmv-contacts-social-title {
      text-transform: uppercase;
      color: $c-palette-accent-dark;
    }

    & .bmv-social-icons-pack {
      font-size: 1.8em;
    }
  }
}

@include media-breakpoint-down(sm) {
  .bmv-contacts {
    & .bmv-contacts-content {
      & .bmv-contacts-map {
        min-width: 16em;
      }

      & .bmv-contacts-info {
        padding: 2em 1em;
      }
    }
  }
}
</style>
