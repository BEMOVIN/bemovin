<template>
  <div id="schedule">
    <div
      class="bmv-calendar"
      :style="{ 'background-image': `url(${bgImage})` }"
    >
      <span class="bmv-title bmv-title-dark">График</span>
      <div class="btn-group mx-auto mb-5 bmv-week-selector">
        <button
          class="btn btn-primary btn-sm"
          :class="{ active: weekIndex === 0 }"
          @click="loadForWeekIndex(0)"
        >
          Тази седмица
        </button>
        <button
          class="btn btn-primary btn-sm"
          :class="{ active: weekIndex === 1 }"
          @click="loadForWeekIndex(1)"
        >
          Следващата седмица
        </button>
      </div>
      <table class="mx-auto" v-if="!loading">
        <thead>
          <tr>
            <th></th>
            <th v-for="dayDate of weekDays" :key="dayDate.day">
              <div class="bmv-date mb-2">{{ dayDate.date }}</div>
              <span class="bmv-day-of-week">{{ dayDate.day }}</span>
            </th>
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
      <div v-else class="p-5 d-flex justify-content-center">
        <b-spinner type="grow" variant="primary"></b-spinner>
      </div>
    </div>

    <div
      class="bmv-calendar bmv-calendar-compact"
      :style="{ 'background-image': `url(${bgImage})` }"
    >
      <span class="bmv-title bmv-title-dark">График</span>

      <div class="btn-group mx-auto mb-2 bmv-week-selector">
        <button
          class="btn btn-primary btn-sm"
          :class="{ active: weekIndex === 0 }"
          @click="loadForWeekIndex(0)"
        >
          Тази седмица
        </button>
        <button
          class="btn btn-primary btn-sm"
          :class="{ active: weekIndex === 1 }"
          @click="loadForWeekIndex(1)"
        >
          Следващата седмица
        </button>
      </div>
      <template v-if="!loading">
        <table
          v-for="(eventsByDay, eventsByDayIdx) of mobileCalendarEvents"
          :key="eventsByDayIdx"
        >
          <thead v-if="showMobileCalendarDay(eventsByDay)">
            <tr>
              <th>
                <div class="bmv-date mt-1">
                  {{ weekDaysMap[eventsByDay.dayOfWeek].date }}
                </div>
                <span class="bmv-day-of-week">{{
                  weekDaysMap[eventsByDay.dayOfWeek].day
                }}</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="showMobileCalendarDay(eventsByDay)">
            <tr v-for="(event, index) in eventsByDay.events" :key="index">
              <td>
                <span class="bmv-calendar-cell-title">{{ event.summary }}</span>
              </td>
              <td>{{ event.time }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <div v-else class="p-5 d-flex justify-content-center">
        <b-spinner type="grow" variant="primary"></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '../../assets/images/meghan-holmes-779221-unsplash.dark.jpg'
import { format, getDay, startOfWeek, endOfWeek, addDays } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import locale from 'date-fns/locale/bg'

// Assume:
// * There is only one event per hour.
// * Events start from Monday and end Sunday.
// * Event starts and ends in the same day.
export default {
  name: 'Calendar',
  data() {
    return {
      bgImage,
      events: [],
      numberOfDays: 7,
      loading: false,
      weekIndex: 0,
    }
  },
  computed: {
    currentDate() {
      return utcToZonedTime(new Date(), 'Europe/Sofia')
    },
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
      return this.sortObjectKeys(calendarEvents)
    },
    mobileCalendarEvents() {
      if (this.events.length == 0) {
        return []
      }
      const mobileCalendarEvents = Array(this.numberOfDays)
      for (const event of this.events) {
        const time = this.buildTime(event)
        const dayOfWeekIdx = this.getDayOfWeekIndex(event)
        if (!mobileCalendarEvents[dayOfWeekIdx]) {
          const dayOfWeek = format(event.start, 'EEEE', { locale })
          mobileCalendarEvents[dayOfWeekIdx] = {
            dayOfWeek,
            events: [],
          }
        }
        mobileCalendarEvents[dayOfWeekIdx].events.push({
          summary: event.summary,
          time,
        })
      }
      for (const calEvent of mobileCalendarEvents) {
        calEvent.events = calEvent.events.sort((a, b) =>
          a.time > b.time ? 1 : -1
        )
      }
      return mobileCalendarEvents
    },
    weekDays() {
      const now = addDays(this.currentDate, this.numberOfDays * this.weekIndex)
      const startOfWeekDate = startOfWeek(now, { weekStartsOn: 1 })
      const weekDays = []
      for (let i = 0; i < this.numberOfDays; i++) {
        const date = addDays(startOfWeekDate, i)
        weekDays.push({
          day: format(date, 'EEEE', { locale }),
          date: format(date, 'dd.MM', { locale }),
        })
      }
      return weekDays
    },
    weekDaysMap() {
      return this.weekDays.reduce((acc, weekDay) => {
        acc[weekDay.day] = weekDay
        return acc
      }, {})
    },
  },
  mounted() {
    this.loadEvents(this.currentDate)
  },
  methods: {
    async loadEvents(date) {
      this.loading = true
      const calendarId = 'bemovinsport@gmail.com'
      const apiKey = 'AIzaSyAtz_NBqbw4kjbXT7xcCRt8NM0qECxgNGM'

      const targetDate = utcToZonedTime(date, 'Europe/Sofia')
      const startOfWeekText = startOfWeek(targetDate, {
        weekStartsOn: 1,
      }).toISOString()
      const endOfWeekText = endOfWeek(targetDate, {
        weekStartsOn: 1,
      }).toISOString()
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${startOfWeekText}&timeMax=${endOfWeekText}`
      return this.$http
        .get(url)
        .then((resp) => resp.data.items)
        .then((rawEvents) => this.transformRawEvents(rawEvents))
        .then((events) => (this.events = events))
        .then(() => (this.loading = false))
    },
    buildTime(event) {
      const startHour = format(event.start, 'HH:mm')
      const endHour = format(event.end, 'HH:mm')
      return `${startHour} - ${endHour}`
    },
    getDayOfWeekIndex(event) {
      return (getDay(event.start) - 1 + this.numberOfDays) % this.numberOfDays
    },
    showMobileCalendarDay(eventsByDay) {
      return eventsByDay && eventsByDay.events && eventsByDay.events.length > 0
    },
    transformRawEvents(rawEvents) {
      return rawEvents.map((event) => ({
        summary: event.summary,
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
      }))
    },
    sortObjectKeys(unordered) {
      const ordered = {}
      Object.keys(unordered)
        .sort()
        .forEach((key) => {
          ordered[key] = unordered[key]
        })
      return ordered
    },
    async loadForWeekIndex(index) {
      if (index === this.weekIndex) {
        return
      }
      this.weekIndex = index
      const date = addDays(this.currentDate, index * this.numberOfDays)
      return this.loadEvents(date)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../mixins';
.bmv-calendar {
  width: 100%;
  height: 100%;
  min-height: 46em;
  padding: 6em;
  background-color: $c-dark;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;

  & .bmv-date {
    font-size: 1.6em;
    color: $c-palette-accent-primary;
  }

  & .bmv-day-of-week {
    font-size: 0.8em;
  }

  & .bmv-week-selector .btn {
    text-transform: uppercase;
    min-width: 13em;
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
