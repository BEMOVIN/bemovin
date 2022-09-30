<template>
  <div class="bmv-activities" id="activities">
    <div class="bmv-title">Тренировки</div>
    <h3 class="bmv-activities-subsection-title">Персонални</h3>
    <p class="bmv-activities-subsection-subtitle mb-4">
      <a href="#" v-scroll-to="'#contacts'" class="font-italic font-weight-bold"
        >Обади ни се</a
      >
      за да запазиш своята безплатна тренировка
    </p>
    <div class="container">
      <div class="row justify-content-between">
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
    <h3 class="bmv-activities-subsection-title pt-4" id="activities-groups">
      Групови
    </h3>
    <p class="bmv-activities-subsection-subtitle mb-4">
      Първата тренировка е безплатна. Oчакваме те!
    </p>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col bmv-activities-item">
          <i class="fas fa-dumbbell bmv-activities-icon"></i>
          <h5 class="bmv-activities-title">Strength & Skill Class</h5>
          <p class="bmv-activities-description">
            Този клас е подходящ за всеки. Начинаещите ще се запознаят с
            основните упражнения и коректното им изпълнение. Хората с опит ще се
            запознаят с нови техники или вариации на движенията, които ние
            смятаме за важни. Крайната цел е да изградим сила, експлозивност,
            координация и да опознаем по-добре тялото си.
          </p>
        </div>
        <div class="col bmv-activities-item">
          <i class="fas fa-heartbeat bmv-activities-icon"></i>
          <h5 class="bmv-activities-title">Conditioning Class</h5>
          <p class="bmv-activities-description">
            Тренировка с висока плътност и нисък интензитет с игрови и
            състезателен характер. Двигателните задачи са структурирани така, че
            да ни помогнат да повишим своята кардио и силова издръжливост.
          </p>
        </div>
        <div class="col bmv-activities-item">
          <svg
            class="bmv-activities-icon mx-auto"
            width="1em"
            height="1em"
            viewBox="0 0 454 454"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <g fill="#22727c">
              <path
                d="m 278.63827,294.92047 -1.4219,-0.47266 -3.7891,-88.559 c -0.47266,-8.0508 0,-15.629 1.4219,-23.68 l 27.941,-150.600002 c 2.3711,-11.84 -4.2617,-24.6289997 -16.574,-28.4179997 -13.734,-4.2617 -27.941,4.7344 -30.309,18.4689997 l -28.887,155.810002 c -0.47266,2.8398 -4.2617,2.8398 -4.7344,0 l -28.891,-155.800002 c -1.8945,-11.367 -11.84,-19.4179997 -23.68,-19.4179997 -1.4219,0 -2.8398,0 -4.2617,0.47266 -12.785,2.3672 -21.785,15.1559997 -19.418,27.9409997 l 27.941,151.550002 c 1.4219,7.5781 1.8945,15.629 1.8945,23.68 l -3.7891,89.035 -1.4219,0.47266 c -68.668,26.992 -76.718999,130.71 -76.718999,135.44 -0.94531,10.891 7.578099,20.836 18.468999,21.312 10.891,0.94531 20.836,-7.5781 21.312,-18.469 0,-0.94531 8.0508,-104.66 71.984,-104.66 h 37.414 c 63.461,0 71.512,100.4 71.984,104.66 0.94531,10.891 10.418,18.941 21.312,18.469 10.891,-0.94531 19.418,-10.418 18.469,-21.312 0.47266,-4.7344 -7.5781,-108.45 -76.25,-135.92 z"
              />
              <path
                d="m 224.64827,342.28047 c -25.102,0 -45.465,20.363 -45.465,45.465 0,25.102 20.363,45.465 45.465,45.465 25.102,0 45.465,-20.363 45.465,-45.465 0,-25.102 -20.363,-45.465 -45.465,-45.465 z"
              />
            </g>
          </svg>

          <h5 class="bmv-activities-title">Handstand practice</h5>
          <p class="bmv-activities-description">
            Най-често срещани позиции по време на часовете са стойка на две
            изпънати ръце над глава. В този клас може да получите помощ в
            систематизиране на процеса към желана от вас цел. Едно често срещано
            мнение е, че възрастните хора не могат да се научат на такова умение
            като балансиране с главата надолу. Е, ние сме сигурни, че може!
            Часовете ни са подходящи както за начинаещи, така и за хора с вече
            изградена практика, която има нужда от финни настройки
          </p>
        </div>
        <div class="col bmv-activities-item">
          <svg
            class="bmv-activities-icon mx-auto"
            version="1.1"
            width="1.3em"
            height="1em"
            viewBox="0 0 85.442495 55.407559"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <g fill="#22727c" transform="translate(-109.07138,-17.103947)">
              <path
                style="stroke:none;stroke-width:0.32"
                d="m 194.51137,33.135628 c 0.1392,-4.473312 -5.56512,-7.192992 -8.96,-9.378528 -10.77056,-6.933856 -24.58944,-9.046592 -36.48,-3.456768 -8.57952,4.03328 -13.5808,14.556896 -9.1616,23.395296 2.38912,4.77792 10.04128,12.71776 16.2016,10.4752 2.14752,-0.78176 6.01664,-5.54304 3.73824,-7.75552 -1.09536,-1.06368 -3.03168,-1.47008 -4.37824,-2.16256 -4.02208,-2.06816 -9.08352,-6.46848 -6.59904,-11.43712 6.4832,-12.966272 26.98176,-6.2408 36.99904,-2.57696 2.80768,1.02688 5.66464,2.4944 8.64,2.89696 m -85.44,-5.44 v 0.64 c 5.13222,3.39616 10.81984,6.38112 15.36,10.5888 6.4784,6.00384 9.92896,14.14816 11.648,22.691201 0.96032,4.77408 0.19232,11.90912 6.912,10.77568 7.69504,-1.2976 1.23936,-13.519681 -0.33696,-17.815681 -4.03936,-11.00736 -11.83616,-18.77152 -22.38304,-23.75008 -2.9471,-1.391168 -7.91648,-3.832288 -11.2,-3.12992 m 12.48,15.52576 c -7.68893,1.64224 -9.61661,15.35104 0,13.26912 3.14307,-0.68064 6.05184,-3.4816 6.61472,-6.71488 0.71904,-4.1296 -2.49856,-7.4336 -6.61472,-6.55424 z"
              />
            </g>
          </svg>
          <h5 class="bmv-activities-title">Body in motion</h5>
          <div class="bmv-activities-description">
            <p>
              Класът е разделен на две основни части.
              <br />
              В първата част наблягаме на работа за гръбначния стълб, изолации и
              цялостна мобилизация на тялото, за да можем да го подготвим за
              работа.
              <br />
              Втората част е насочена главно към работа с пода - локомоторни
              движения, баланс, координация и някой по динамични упражнения като
              материала се изменя в зависимост от темата на часовете и
              възможностите на участниците.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityTypes'
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
    margin: 1em;
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
