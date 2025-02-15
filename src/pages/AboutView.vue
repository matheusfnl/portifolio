<template>
  <q-card>
    <q-card-section>
      <p class="q-mb-none text-h3 text-weight-medium">About me</p>
      <div class="style-line q-my-md" />
      <p class="q-mb-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos suscipit deleniti
        veritatis. Totam, sit facilis! Placeat perferendis quisquam, eum, tempora veritatis minima
        consequatur odio enim laborum, nesciunt nemo sapiente?
      </p>
    </q-card-section>

    <q-card-section>
      <p class="q-mb-md text-h4 text-weight-medium">What i do</p>
      <div class="row q-gutter-md">
        <PFProfileServices v-for="data in Object.values(WhatIDo)" :key="data.field" :data="data" />
      </div>
    </q-card-section>

    <q-card-section>
      <p class="q-mb-md text-h4 text-weight-medium">Resume</p>
      dasd
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import PFProfileServices from 'components/profile/PFProfileServices.vue'

import WhatIDo from 'src/static/profile-what-i-do'
</script>

<style lang="scss" scoped>
.style-line {
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, $primary, rgba($primary, 0.5));
  border-radius: 10px;
  width: 80px;
}
</style>
