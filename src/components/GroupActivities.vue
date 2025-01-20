<template>
  <div
    class="bmv-activities"
    id="group-activities"
    :style="{ 'background-image': `url(${bgImage})` }"
  >
    <h3 class="bmv-title" id="activities-groups">
      Групови Тренировки
    </h3>
    <p class="bmv-activities-subtitle text-light">
      Първата тренировка е безплатна. Oчакваме те!
    </p>
    <p class="bmv-activities-subtitle mb-4">
      Не забравяй да си запазиш място.
    </p>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col bmv-activities-item">
          <iframe
            src="https://koalendar.com/e/strength-and-skill-class?embed=true"
            width="100%"
            height="900px"
            frameborder="0"
          ></iframe>
        </div>
        <div class="col bmv-activities-item">
          <iframe
            src="https://koalendar.com/e/conditioning-class?embed=true"
            width="100%"
            height="900px"
            frameborder="0"
          ></iframe>
        </div>
        <div class="col bmv-activities-item">
          <iframe
            src="https://koalendar.com/e/handstand-practice?embed=true"
            width="100%"
            height="900px"
            frameborder="0"
          ></iframe>
        </div>
        <div class="col bmv-activities-item">
          <iframe
            src="https://koalendar.com/e/body-in-motion?embed=true"
            width="100%"
            height="900px"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/images/calendar-bg.jpg'

export default {
  name: 'GroupActivities',
  data: () => {
    return {
      bgImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../mixins';

.bmv-activities {
  padding: 5em 2em 3em 2em;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  & .bmv-title,
  & .bmv-activities-subtitle {
    color: $c-palette-accent-primary;
  }

  & .bmv-activities-subtitle {
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
  }

  & .bmv-activities-item {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    min-width: 20em;
    max-width: 36em;
    width: 100%;
    margin: 1em 1.5em;
    padding: 0;
  }
}

@include media-breakpoint-down(md) {
  .bmv-activities {
    padding: 4em 1em;
  }
}

@include media-breakpoint-down(xs) {
  .bmv-activities {
    & .bmv-activities-item {
      display: block;
    }
  }
}
</style>
