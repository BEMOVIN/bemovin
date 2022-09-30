<template>
  <div class="calendar-footer">
    <div class="calendar-footer-contact-us">
      <h5 class="mt-4 mb-2">
        Всичките на класове са с предварително записване. Пишете ни!
      </h5>
      <div>
        <a href="https://m.me/bemovinsport"
          ><i class="fab fa-facebook-messenger"></i
        ></a>
        <a v-if="isMobile" href="instagram://user?username=bemovinsport"
          ><i class="fab fa-instagram"></i
        ></a>
        <a v-else href="https://www.instagram.com/bemovinsport"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="viber://chat/?number=%2B359897274414"
          ><i class="fab fa-viber"></i
        ></a>
        <a href="https://wa.me/%2B359897274414"
          ><i class="fab fa-whatsapp"></i
        ></a>
        <a href="mailto:team@bemovin.bg"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
    <p class="text-sm mt-5">
      Карти <strong>Multisport</strong> могат да се изпалзват за STRENGTH &
      SKILL CLASS и CONDITIONING CLASS
    </p>
    <p class="text-sm mt-2">
      Карти <strong>Coolfit</strong> покриват изцяло достъпът до STRENGTH &
      SKILL CLASS и CONDITIONING CLASS и с доплащане 8лв за HANDSTAND PRACTICE и
      BODY IN MOTION
    </p>
  </div>
</template>

<script>
export default {
  name: 'CalendarFooter',
  computed: {
    isMobile: () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
  }
}
</script>

<style lang="scss" scoped>
@import '../../custom';
.calendar-footer {
  color: $text-light;
  text-align: center;
  & .calendar-footer-contact-us {
    & .fab,
    & .fas {
      text-align: center;
      text-decoration: none;
      color: $text-light;
      margin: 0 0.2em;

      font-size: 28px;
      $button-size: 1.6em;
      border-radius: 50%;
      width: $button-size;
      height: $button-size;
      line-height: $button-size;

      &.fa-facebook-messenger,
      &.fa-instagram,
      &.fa-viber,
      &.fa-whatsapp,
      &.fa-envelope {
        &:hover {
          filter: brightness(80%);
        }
      }

      &.fa-facebook-messenger {
        background: #00b2ff;
      }

      &.fa-instagram {
        background: #833ab4;
      }

      &.fa-viber {
        background: #665cac;
      }

      &.fa-whatsapp {
        background: #25d366;
      }

      &.fa-envelope {
        background: #34b7f1;
      }
    }
  }

  & .text-sm {
    font-size: 0.9em;
  }
}
</style>
