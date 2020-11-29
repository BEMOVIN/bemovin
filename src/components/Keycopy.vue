<template>
  <div class="bmv-key-copy" id="about">
    <span class="bmv-title">Нашата цел</span>
    <span class="bmv-message">
      <span class="bmv-text-logo">
        <span class="bmv-text-logo-accent">BE</span
        ><span class="bmv-text-logo-normal">MOVIN</span>
      </span>
      <span>
        е спортна зала за персонални и групови тренировки.<br />
        При нас ще научите как да използвате съзнателно тялото си, да развиете
        двигателните си умения и да подобрите своето движение.
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Keycopy'
}
</script>

<style lang="scss" scoped>
@import '../custom';
.bmv-key-copy {
  min-height: 20em;
  padding: 2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  color: $text-dark;
}
</style>
