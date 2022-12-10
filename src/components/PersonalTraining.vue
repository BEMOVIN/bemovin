<template>
  <div class="bmv-activities" id="personal-training">
    <div class="bmv-title">Персонални Тренировки</div>
    <p class="bmv-activities-subsection-subtitle mb-4">
      <a href="#" v-scroll-to="'#contacts'" class="font-italic font-weight-bold"
        >Обади ни се</a
      >
      за да запазиш своята безплатна тренировка
    </p>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col bmv-activities-item">
          <i class="fas fa-running bmv-activities-icon"></i>
          <h5 class="bmv-activities-title">Функционални тренировки</h5>
          <p class="bmv-activities-description">
            Тези тренировки са подходящи за всеки, независимо от нивото на
            двигателна активност. Развиват цялостно тялото и ума ви, подобряват
            сила, контрол, баланс, издръжливост и добивате представа на какво е
            способно тялото ви.
          </p>
        </div>
        <div class="col bmv-activities-item">
          <i class="fas fa-medal bmv-activities-icon"></i>
          <h5 class="bmv-activities-title">
            Тренировки за професионални спортисти
          </h5>
          <p class="bmv-activities-description">
            Ако си спортист, който има конкретни цели, амбиции за спорт на
            високо ниво и хъс за развитие - ние ще ти помогнем със специфични
            наставления за твоя спорт, програма за цялостно развитие и насоки за
            правилно хранене и възстановяване, за да стигнеш мечтаните върхове.
          </p>
        </div>
        <div class="col bmv-activities-item">
          <i class="fas fa-female bmv-activities-icon"></i>
          <h5 class="bmv-activities-title">Тренировки за бременни</h5>
          <p class="bmv-activities-description">
            Бременността не означава, че трябва да се лишиш от движение.
            Напротив грижата за тялото в този период ще донесе многобройни ползи
            за теб и растящото в теб човече. Добрата кондиция и тонус спомагат
            за безпроблемното раждане. Ела да ти разкажем защо.
          </p>
        </div>
        <div class="col bmv-activities-item">
          <i class="fas fa-user-injured bmv-activities-icon"></i>
          <h5 class="bmv-activities-title">
            Рехабилитация и възстановяване след травми
          </h5>
          <p class="bmv-activities-description">
            При травма често сме обездвижени и с ограничени движения. Това се
            отразява неблагоприятно на физиката и психиката ни и често се
            наблюдават трайни последици от вече излекуваната травма. Ние можем
            да ти помогнем с прецизно подбран набор от движения специално за
            теб.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalTraining'
}
</script>

<style lang="scss" scoped>
@import './../mixins';

.bmv-activities {
  padding: 5em 2em 3em 2em;

  & .bmv-activities-subsection-title,
  & .bmv-activities-subsection-subtitle {
    text-align: center;
    text-transform: uppercase;
  }

  & .bmv-activities-subsection-title {
    color: $c-palette-accent-dark;
    font-weight: bolder;
  }

  & .bmv-activities-subsection-subtitle {
    font-size: 15px;
    & a {
      color: $c-palette-primary;
    }
  }

  & .bmv-activities-item {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    min-width: 14.5em;
    margin: 1em 1.5em;
    padding: 0;

    &:hover {
      & .bmv-activities-icon {
        transform: translateY(-0.3em);
      }
    }

    & .bmv-activities-icon {
      font-size: 4em;
      margin-bottom: 0.4em;
      color: $c-palette-dark;
      @include transition(0.6s);
      transform: translateY(0);
    }

    & .bmv-activities-title {
      height: 4em;
      font-size: 1em;
      color: $c-palette-primary;
      letter-spacing: $letter-spacing-xxs;
      text-transform: uppercase;
    }

    & .bmv-activities-description {
      color: $text-light-dark;
      font-size: 15px;
    }
  }
}

@include media-breakpoint-down(md) {
  .bmv-activities {
    padding: 4em 1em;

    & .bmv-activities-item {
      & .bmv-activities-title {
        height: 3em;
      }
    }
  }
}

@include media-breakpoint-down(xs) {
  .bmv-activities {
    & .bmv-activities-item {
      display: block;

      & .bmv-activities-title {
        height: auto;
      }
    }
  }
}
</style>
