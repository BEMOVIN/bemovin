<template>
  <div class="bmv-team">
    <div class="bmv-team-title" id="team">
      <span class="bmv-subtitle">Запознай се с</span>
      <span class="bmv-title">Нашият Екип</span>
      <span class="bmv-message">
        Стремим се да подържаме приятелска атмосфера и добро настроение,<br />
        така че тренировката да бъде още по-приятна!
      </span>
    </div>
    <div class="bmv-team" :style="{ 'background-image': `url(${bgImage})` }">
      <div class="card-deck">
        <div class="card" data-aos="fade-up" data-aos-delay="200">
          <div
            class="card-img-top"
            :style="{ 'background-image': `url(${kosyoPic})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-title">Константин</h5>
            <p class="card-text">
              Константин е основният двигател и свързващото звено в нашия екип.
              Доказал се не веднъж в своята компетентност с дълбоки познания по
              физиотерапия и лоялност към клиенти и колеги от 2010г. Посреща
              винаги с топла усмивка и остроумна закачка и ако някой има въпрос
              по темата движение, то Косьо би му обяснил дори за теорията на
              Дарвин, за да се обоснови и достигне до разбиране от отсрещната
              страна, подкрепено с взети превантивни мерки за безопасност от
              травми до края на тренировката. А после ще те изпрати вежливо до
              следващия път, както винаги на линия, чакащ те на прага с
              подготвена програма!
            </p>
          </div>
        </div>
        <div class="card" data-aos="fade-up" data-aos-delay="400">
          <div
            class="card-img-top"
            :style="{ 'background-image': `url(${andrewPic})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-title">Андрей</h5>
            <p class="card-text">
              Андрей има дългогодишен опит в работата с хора и винаги е търсел
              най-добрите начини за развитие на тяхното движение, като постоянно
              изненадва с необичайни комбинации и интригуващи движения. Вълнува
              се от клиентите си и постоянно търси нови начини да се развива, за
              да им бъде максимално полезен заедно с професионалния подход
              получавате и голяма доза забавление по време на тренировките с
              него!
            </p>
          </div>
        </div>
        <div class="card" data-aos="fade-up" data-aos-delay="600">
          <div
            class="card-img-top"
            :style="{ 'background-image': `url(${pavelPic})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-title">Павел</h5>
            <p class="card-text">
              Павката - винаги отворен към усъвършенстване на нови знания и
              умения. Тренировката с него е нестандартна, разнообразна и ще ви
              извади от комфортната зона. Неговите идеи ще ви върнат страстта
              към движението и увереността в способностите ви.<br />С умението
              му да вниква в детайлите, съчетано с щедра усмивка, часовете
              прекарани в залата несъмнено ще бъдат от най - ползотворните за
              вас!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/images/victor-freitas-572863-unsplash.dark.sm2.jpg'
import kosyoPic from '../assets/images/team/kosyo.jpg'
import andrewPic from '../assets/images/team/andrew.jpg'
import pavelPic from '../assets/images/team/pavel.jpg'

export default {
  name: 'Team',
  data() {
    return {
      bgImage,
      kosyoPic,
      andrewPic,
      pavelPic
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';
.bmv-team-title {
  padding: 7em 2em 4.4em 2em;
}

.bmv-team {
  width: 100%;
  height: 100%;
  min-height: 42em;
  padding: 6em 1em;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  & .card-deck {
    justify-content: center;

    & .card {
      border: 1px solid $c-dark;
      width: 100%;
      min-width: 18em;
      max-width: 20em;
      margin: 1em;

      & .card-img-top {
        height: 30em;
        background-size: cover;
      }

      & .card-body {
        color: lightgrey;
        background-color: $c-dark;
        text-align: center;
        font-weight: 100;

        & .card-title {
          color: $c-palette-accent-dark;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 1.5rem;
        }
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .bmv-team {
    & .card-deck {
      flex-flow: column nowrap;
      align-items: center;

      & .card {
        max-width: 24em;
      }
    }
  }
}
</style>
