<template>
  <div class="bmv-prices" id="prices">
    <span class="bmv-title">Цени</span>
    <span class="bmv-message"
      >Карти за достъп до залата и групови тренировки</span
    >
    <div class="container">
      <div
        class="row justify-content-between bmv-price-tags bmv-prices-facility"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">Карта 8</div>
            <div class="card-body">
              <h5 class="card-title">8 тренировки за месец</h5>
              <h1 class="card-text bmv-price-label">70лв</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">Карта 12</div>
            <div class="card-body">
              <h5 class="card-title">12 тренировки за месец</h5>
              <h1 class="card-text bmv-price-label">90лв</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">Карта 16</div>
            <div class="card-body">
              <h5 class="card-title">16 тренировки за месец</h5>
              <h1 class="card-text bmv-price-label">120лв</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">Годишна</div>
            <div class="card-body">
              <h5 class="card-title">Годишен неограничен достъп</h5>
              <div class="card-text">
                <h1 class="bmv-price-label">600лв</h1>
                <p>Възможност за плащане на 3 вноски</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="bmv-message">Абонаменти за треньор</span>
    <span class="bmv-prices-subtitle-accent"
      >*Абонаментите за треньор НЕ включват картите за достъп до залата</span
    >
    <div class="container">
      <div
        class="row justify-content-between bmv-price-tags bmv-prices-trainers"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">T1</div>
            <div class="card-body">
              <h5 class="card-title">
                1 тренировка седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">90лв</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">T2</div>
            <div class="card-body">
              <h5 class="card-title">
                2 тренировки седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">145лв</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          class="col bmv-price-tag"
        >
          <div class="card">
            <div class="card-header">T3</div>
            <div class="card-body">
              <h5 class="card-title">
                3 тренировки седмично в рамките на 1 месец
              </h5>
              <h1 class="card-text bmv-price-label">190лв</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          class="col bmv-price-tag"
        >
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

  & .bmv-prices-subtitle-accent {
    width: 100%;
    display: block;
    color: $c-palette-sec-primary;
    text-transform: uppercase;
    text-align: center;
    margin: 1em 0;
    font-size: 0.8em;
    font-weight: 400;
  }

  & .container {
    margin: 2em auto 4em auto;
  }

  & .bmv-prices-facility {
    & .card {
      background-color: $c-palette-primary;
      color: $text-light;
    }
  }

  & .bmv-prices-trainers {
    & .card {
      background-color: $c-palette-sec-dark;
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
