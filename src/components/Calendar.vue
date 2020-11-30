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
          <tr v-for="time of Object.keys(calendarEvents)" :key="time">
            <td>{{ time }}</td>
            <td v-for="(summary, index) of calendarEvents[time]" :key="index">
              <span v-if="summary" class="bmv-calendar-cell-title">{{
                summary
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="bmv-calendar bmv-calendar-compact"
      style="background-image: url('./assets/images/meghan-holmes-779221-unsplash.dark.jpg')"
    >
      <span class="bmv-title bmv-title-dark">График</span>
      <table
        v-for="eventsByDay of mobileCalendarEvents"
        :key="eventsByDay.dayOfWeek"
      >
        <thead v-if="eventsByDay.events.length > 0">
          <tr>
            <th>{{ eventsByDay.dayOfWeek }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="eventsByDay.events.length > 0">
          <tr v-for="(event, index) in eventsByDay.events" :key="index">
            <td>
              <span class="bmv-calendar-cell-title">{{ event.summary }}</span>
            </td>
            <td>{{ event.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/images/meghan-holmes-779221-unsplash.dark.jpg'
import { format, getDay } from 'date-fns'
import localeBg from 'date-fns/locale/bg'

export default {
  name: 'Calendar',
  data() {
    return {
      bgImage,
      events: [
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 23, 7, 30),
          end: new Date(2020, 10, 23, 8, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 25, 7, 30),
          end: new Date(2020, 10, 25, 8, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 27, 7, 30),
          end: new Date(2020, 10, 27, 8, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 24, 8, 0),
          end: new Date(2020, 10, 24, 9, 0)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 26, 8, 0),
          end: new Date(2020, 10, 26, 9, 0)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 28, 10, 30),
          end: new Date(2020, 10, 28, 11, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 29, 10, 30),
          end: new Date(2020, 10, 29, 11, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 23, 12, 30),
          end: new Date(2020, 10, 23, 13, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 25, 12, 30),
          end: new Date(2020, 10, 25, 13, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 27, 12, 30),
          end: new Date(2020, 10, 27, 13, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 24, 13, 0),
          end: new Date(2020, 10, 24, 14, 0)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 26, 13, 0),
          end: new Date(2020, 10, 26, 14, 0)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 28, 14, 30),
          end: new Date(2020, 10, 28, 15, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 29, 14, 30),
          end: new Date(2020, 10, 29, 15, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 23, 17, 30),
          end: new Date(2020, 10, 23, 18, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 24, 17, 30),
          end: new Date(2020, 10, 24, 18, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 25, 17, 30),
          end: new Date(2020, 10, 25, 18, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 26, 17, 30),
          end: new Date(2020, 10, 26, 18, 30)
        },
        {
          summary: 'Групова тренировка',
          start: new Date(2020, 10, 27, 17, 30),
          end: new Date(2020, 10, 27, 18, 30)
        }
      ],
      numberOfDays: 7
    }
  },
  computed: {
    // Assume:
    // * Events are sorted by hours; there is only one event per hour.
    // * Events start from Monday and end Sunday.
    // * Event starts and ends in the same day.
    calendarEvents() {
      const calendarEvents = {}
      for (const event of this.events) {
        const time = this.buildTime(event)
        const dayOfWeekIdx = this.getDayOfWeekIndex(event)
        if (!calendarEvents[time]) {
          calendarEvents[time] = Array(this.numberOfDays).fill('')
        }
        calendarEvents[time][dayOfWeekIdx] = event.summary
      }
      return calendarEvents
    },
    mobileCalendarEvents() {
      const mobileCalendarEvents = Array(this.numberOfDays)
      for (const event of this.events) {
        const time = this.buildTime(event)
        const dayOfWeekIdx = this.getDayOfWeekIndex(event)
        if (!mobileCalendarEvents[dayOfWeekIdx]) {
          const dayOfWeek = format(event.start, 'EEEE', { locale: localeBg })
          mobileCalendarEvents[dayOfWeekIdx] = {
            dayOfWeek,
            events: []
          }
        }
        mobileCalendarEvents[dayOfWeekIdx].events.push({
          summary: event.summary,
          time
        })
      }
      return mobileCalendarEvents
    }
  },
  methods: {
    buildTime(event) {
      const startHour = format(event.start, 'HH:mm')
      const endHour = format(event.end, 'HH:mm')
      return `${startHour} - ${endHour}`
    },
    getDayOfWeekIndex(event) {
      return (getDay(event.start) - 1 + this.numberOfDays) % this.numberOfDays
    }
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
