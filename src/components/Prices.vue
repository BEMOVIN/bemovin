<template>
  <div class="bmv-prices" id="prices">
    <span class="bmv-title">Цени</span>
    <span class="bmv-message">Карти за Strength & skill and Conditioning classes</span>
    <div class="container">
      <div class="row justify-content-between bmv-price-tags bmv-prices-strength-n-skill">
        <div data-aos="fade-right" data-aos-delay="200" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта 4</div>
            <div class="card-body">
              <h5 class="card-title">4 тренировки за месец</h5>
              <h1 class="card-text bmv-price-label">60лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта 8</div>
            <div class="card-body">
              <h5 class="card-title">8 тренировки за месец</h5>
              <h1 class="card-text bmv-price-label">100лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="600" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта 12</div>
            <div class="card-body">
              <h5 class="card-title">12 тренировки за месец</h5>
              <h1 class="card-text bmv-price-label">120лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="800" class="col bmv-price-tag">
          <div class="card accent">
            <div class="card-body">
              <h3>MEMBERSHIP ПРОГРАМА</h3>
              <h5 class="card-title">Годишна такса</h5>
              <div class="card-text">
                <h1 class="bmv-price-label">1000лв</h1>
                <p>Възможност за плащане на 3 вноски</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="bmv-message">Карти за Handstand practice & Body in motion</span>
    <div class="container">
      <div class="row justify-content-between bmv-price-tags bmv-prices-handstand-body-in-motion">
        <div data-aos="fade-right" data-aos-delay="200" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта П4</div>
            <div class="card-body">
              <h5 class="card-title">4 тренировки за 45 дни</h5>
              <h1 class="card-text bmv-price-label">85лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта П8</div>
            <div class="card-body">
              <h5 class="card-title">8 тренировки за 60 дни</h5>
              <h1 class="card-text bmv-price-label">150лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="600" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта П12</div>
            <div class="card-body">
              <h5 class="card-title">12 тренировки за 90 дни</h5>
              <h1 class="card-text bmv-price-label">220лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="800" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">Карта П16</div>
            <div class="card-body">
              <h5 class="card-title">16 тренировки за 120 дни</h5>
              <h1 class="card-text bmv-price-label">275лв</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="bmv-message">Абонаменти за треньор</span>
    <div class="container">
      <div class="row justify-content-between bmv-price-tags bmv-prices-trainers">
        <div data-aos="fade-right" data-aos-delay="200" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">T1</div>
            <div class="card-body">
              <h5 class="card-title">
                1 тренировка седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">180лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">T2</div>
            <div class="card-body">
              <h5 class="card-title">
                2 тренировки седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">295лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="600" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">T3</div>
            <div class="card-body">
              <h5 class="card-title">
                3 тренировки седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">385лв</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="800" class="col bmv-price-tag">
          <div class="card">
            <div class="card-header">T+</div>
            <div class="card-body">
              <h5 class="card-title">
                4+ тренировки седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">Пишете ни</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prices'
}
</script>

<style lang="scss" scoped>
@import '../mixins';

.bmv-prices {
  min-height: 58em;
  height: 100%;
  padding: 6em 2em;

  & .bmv-message {
    text-transform: uppercase;
  }

  & .container {
    margin: 2em auto 4em auto;
  }

  & .bmv-prices-strength-n-skill {
    & .card {
      background-color: $c-palette-primary;
      color: $text-light;

      &.accent {
        background: darken($c-palette-primary, 10%);
        background: linear-gradient(0deg,
            darken($c-palette-primary, 10%) 0%,
            $c-palette-primary 100%);
      }
    }
  }

  & .bmv-prices-handstand-body-in-motion {
    & .card {
      background-color: $c-palette-sec-dark;
      color: $text-light;
    }
  }

  & .bmv-prices-trainers {
    & .card {
      background-color: $c-palette-accent-darker;
      color: $text-light;
    }
  }

  & .bmv-price-tags {
    & .bmv-price-tag {
      text-align: center;
      display: inline-flex;
      min-width: 16em;

      & .card {
        flex: 1;

        & .card-header {
          font-size: 2em;
          text-transform: uppercase;
        }

        & .card-title {
          min-height: 2.2em;
          max-height: 4em;
        }

        & .bmv-price-label {
          font-weight: 700;
        }
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .bmv-prices {
    padding: 4em 2em;

    & .bmv-price-tags {
      & .bmv-price-tag {
        margin-top: 1em;
      }
    }
  }
}

@include media-breakpoint-down(xs) {
  .bmv-prices {
    padding: 4em 2em;

    & .bmv-price-tags {
      & .bmv-price-tag {
        margin-top: 1em;

        &:nth-of-type(1) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
