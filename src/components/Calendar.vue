<template>
  <div id="schedule">
    <div
      class="bmv-calendar"
      :style="{ 'background-image': `url(${bgImage})` }"
    >
      <span class="bmv-title bmv-title-dark">График</span>
      <i class="bmv-calendar-description"
        >Tренировките се разделят на Mobility class, Strength and skill class,
        Conditioning class и ги подновяваме ежедневно.<br />
        Следете
        <a href="https://www.facebook.com/bemovinsport"
          >Facebook страницата ни</a
        >
        за повече информация.
      </i>
      <table class="mx-auto">
        <thead>
          <tr>
            <th></th>
            <th>Понеделник</th>
            <th>Вторник</th>
            <th>Сряда</th>
            <th>Четвъртък</th>
            <th>Петък</th>
            <th>Събота</th>
            <th>Неделя</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>07:30 - 08:30</td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>08:00 - 09:00</td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10:30 - 11:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
          </tr>
          <tr>
            <td>12:30 - 13:30</td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13:00 - 14:00</td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>14:30 - 15:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
          </tr>
          <tr>
            <td>17:30 - 18:30</td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="bmv-calendar bmv-calendar-compact"
      style="background-image: url('./assets/images/meghan-holmes-779221-unsplash.dark.jpg')"
    >
      <span class="bmv-title bmv-title-dark">График</span>
      <table>
        <thead>
          <tr>
            <th>Понеделник</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>07:30 - 08:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>12:30 - 13:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>17:30 - 18:30</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Вторник</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>08:00 - 09:00</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>13:00 - 14:00</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>17:30 - 18:30</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Сряда</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>07:30 - 08:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>12:30 - 13:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>17:30 - 18:30</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Четвъртък</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>08:00 - 09:00</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>13:00 - 14:00</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>17:30 - 18:30</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Петък</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>07:30 - 08:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>12:30 - 13:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>17:30 - 18:30</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Събота</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>10:30 - 11:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>14:30 - 15:30</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Неделя</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>10:30 - 11:30</td>
          </tr>
          <tr>
            <td>
              <span class="bmv-calendar-cell-title">Групова тренировка</span>
            </td>
            <td>14:30 - 15:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/images/meghan-holmes-779221-unsplash.dark.jpg'
export default {
  name: 'Calendar',
  data() {
    return { bgImage }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.bmv-calendar {
  width: 100%;
  height: 100%;
  min-height: 38em;
  padding: 6em;
  background-color: $c-dark;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .bmv-calendar-description {
    color: $c-palette-accent-primary;
    text-align: center;
    margin-bottom: 2em;
    display: block;
  }

  & table {
    & th,
    & td {
      padding: 1.5em;
      text-align: center;
      border-right: 1px solid $c-palette-primary;
      &:last-of-type {
        border-right: none;
      }
    }

    & th,
    & td:nth-of-type(1) {
      text-transform: uppercase;
      font-size: 0.8em;
      color: $c-palette-primary;
      font-weight: 700;
    }

    & td:nth-of-type(1) {
      white-space: nowrap;
    }

    & thead {
      & tr {
        border-bottom: 1px solid $c-palette-primary;
      }
    }
    & tbody {
      & tr {
        border-bottom: 1px dashed $c-palette-primary;
        &:last-of-type() {
          border-bottom: none;
        }
      }
    }
    & .bmv-calendar-cell-title {
      font-weight: 700;
      text-transform: uppercase;
      color: $c-palette-accent-primary;
      display: block;
    }
    & .bmv-calendar-cell-subtitle {
      font-size: 0.8em;
      text-transform: uppercase;
      color: $text-light;
    }
  }

  &.bmv-calendar-compact {
    width: 100%;
    height: 100%;
    min-height: 38em;
    display: none;
    flex-flow: column nowrap;
    justify-content: center;

    & table {
      width: 100%;
      & th,
      & td {
        padding: 0.6em;
        text-align: left;
        border: none;
      }

      & th {
        padding-top: 3em;
      }

      & thead {
        & tr {
          border-bottom: none;
        }
      }

      & tbody {
        color: $text-light;
        & tr {
          border-bottom: 1px solid $c-palette-primary;

          & td {
            &:nth-of-type(2) {
              text-align: right;
            }
          }
        }
      }

      & .bmv-calendar-cell-title {
        color: $text-light;
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
  .bmv-calendar {
    padding: 6em 3em;
    & table {
      & th,
      & td {
        padding: 1em;
      }

      & td:nth-of-type(1) {
        white-space: normal;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .bmv-calendar {
    padding: 4em 1em;
    & table {
      & th,
      & td {
        padding: 0.4em;
      }

      & td:nth-of-type(1) {
        white-space: normal;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .bmv-calendar {
    min-height: 28em;
    & table {
      & th,
      & td {
        padding: 0.4em;
      }

      & .bmv-calendar-cell-title {
        font-weight: bold;
        font-size: 0.8em;
      }

      & .bmv-calendar-cell-subtitle {
        display: none;
      }
    }
    &.bmv-calendar-compact {
      & .bmv-calendar-cell-title {
        font-weight: bold;
        font-size: 1em;
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .bmv-calendar {
    display: none;

    &.bmv-calendar-compact {
      display: flex;
    }
  }
}
</style>
