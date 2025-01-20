<template>
  <div class="bmv-team">
    <div class="bmv-team-title" id="team">
      <span class="bmv-subtitle">Запознай се с</span>
      <span class="bmv-title">Нашия Екип</span>
      <span class="bmv-message">
        Стремим се да поддържаме приятелска атмосфера и добро настроение,<br />
        така че тренировката да бъде още по-приятна!
      </span>
    </div>
    <div class="bmv-team" :style="{ 'background-image': `url(${bgImage})` }">
      <div class="card-deck">
        <div v-for="(member, index) in team" :key="index" class="card-wrapper">
          <div
            class="card"
            data-aos="fade-up"
            :data-aos-delay="200 * (index + 1)"
          >
            <div
              class="card-img-top"
              :style="{ 'background-image': `url(${member.pic})` }"
            ></div>
            <div class="card-body">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/images/team-bg.webp'
import konstantinPic from '../assets/images/team/konstantin.webp'
import petyaPic from '../assets/images/team/petya.webp'
import andreyPic from '../assets/images/team/andrey.webp'
import pavelPic from '../assets/images/team/pavel.webp'
import dimitarPic from '../assets/images/team/dimitar.webp'
import lazarPic from '../assets/images/team/lazar.webp'

export default {
  name: 'Team',
  data() {
    return {
      bgImage,
      team: [
        {
          name: 'Константин',
          pic: konstantinPic,
          description:
            'Константин е основният двигател и свързващото звено в нашия екип. Доказал се не веднъж в своята компетентност с дълбоки познания по физиотерапия и лоялност към клиенти и колеги от 2010г. Посреща винаги с топла усмивка и остроумна закачка и ако някой има въпрос по темата движение, то Косьо би му обяснил дори за теорията на Дарвин, за да се обоснови и достигне до разбиране от отсрещната страна, подкрепено с взети превантивни мерки за безопасност от травми до края на тренировката. А после ще те изпрати вежливо до следващия път, както винаги на линия, чакащ те на прага с подготвена програма!'
        },
        {
          name: 'Петя',
          pic: petyaPic,
          description:
            'Петя съчетава в практиката си физиотерапевтичното си образование, страстта си към движението и волейбола. Нейните познания и опит в тренировките за бременни и млади майки, ще ви преведат през този деликатен период с увереност и лекота, а личният и пример ще ви мотивира, тъй като тя самата 2 пъти се е справяла с това предизвикателство. Подход на Петя е интересен, разнообразен и взискателен, но емпатичният и характер и страхотното чувство за хумор ще ви преведат през цялата сесия с усмивка на лицето, може би само докато правите бърпита може да я загубите за известно време.'
        },
        {
          name: 'Андрей',
          pic: andreyPic,
          description:
            'Андрей е водещият треньор в класът ни Handstand practice. Той има дългогодишен опит в работата с хора и винаги е търсил най-добрите начини за развитие на тяхното движение, като постоянно изненадва с необичайни комбинации и интригуващи движения. Вълнува се от клиентите си и постоянно търси нови начини да се развива, за да им бъде максимално полезен, заедно с професионалния подход получавате и голяма доза забавление по време на тренировките с него!'
        },
        {
          name: 'Павел',
          pic: pavelPic,
          description:
            'Павката - винаги отворен към усъвършенстване на нови знания и умения. Той е треньорът, който провежда практиката Soft Acrobatics. Тренировката с него е нестандартна, разнообразна и ще ви извади от комфортната зона. Неговите идеи ще ви върнат страстта към движението и увереността в способностите ви. С умението му да вниква в детайлите, съчетано с щедра усмивка, часовете прекарани в залата несъмнено ще бъдат от най - ползотворните за вас!'
        },
        {
          name: 'Димитър',
          pic: dimitarPic,
          description:
            'Димитър е човекът с най-много опит в силовите тренировки сред нашия екип. Неговото желание за развитие и усъвършенстване на различните двигателни качества са вдъхновяващи! Практиките с Джими - както го наричаме в залата са забавни, интересни и в същото време фокусирани. Те ще ви помогнат да намерите точния път за достигане на вашата цел, а приятелският му подход и личният му пример за прогрес, ще служат за мотивация дори през дните, в които се чудите дали ви се става от леглото.'
        },
        {
          name: 'Лазар',
          pic: lazarPic,
          description:
            'Лазар започва треньорската си кариера като преподавател по Хип-хоп танци, а след това се отдава на Джу Джицу и го комбинира със силови тренировки. Неговият личен движенчески път е гаранция за интересна и разнообразна тренировка. Приятелският му подход съчетан с високите му изисквания, ще ви съпътстват докато постигате целите си, а чувството му за хумор и ведрата усмивка ще ви помогнат да преминете с лекота и през най - трудните задачи. Често може да намерите Лазо и Косьо да се въргалят по земята, наричайки това борба, но за  незапознатите с BJJ изглежда по различно…'
        }
      ]
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
  background-position: bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;

  & .card-deck {
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 24em);
    gap: 6em;
    justify-items: center;
    align-content: center;

    @include media-breakpoint-down(xl) {
      gap: 4em;
    }

    @include media-breakpoint-down(lg) {
      gap: 3em;
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-down(sm) {
      gap: 2em;
      grid-template-columns: 1fr;
    }

    & .card {
      border: 1px solid $c-dark;
      width: 100%;
      height: 100%;
      min-width: 18em;

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
