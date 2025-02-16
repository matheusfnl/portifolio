<template>
  <q-card>
    <q-card-section>
      <p class="q-mb-none text-h3 text-weight-medium">
        {{ $t('about.me.title') }}
      </p>

      <div class="style-line q-my-md" />
      <p class="q-mb-none">
        {{ $t('about.me.description') }}
      </p>
    </q-card-section>

    <q-card-section>
      <p class="q-mb-md text-h4 text-weight-medium">
        {{ $t('about.services.title') }}
      </p>

      <div class="row q-gutter-md">
        <PFAboutServices v-for="data in Object.values(WhatIDo)" :key="data.field" :data="data" />
      </div>
    </q-card-section>

    <q-card-section>
      <p class="q-mb-md text-h4 text-weight-medium">
        {{ $t('about.tools.title') }}
      </p>

      <div class="row q-gutter-sm">
        <div v-for="tool in Tools" :key="tool" class="g-tag">
          {{ $t(`about.tools.names.${tool}`) }}
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <PFAboutResume />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import PFAboutServices from 'components/about/PFAboutServices.vue'
import PFAboutResume from 'components/about/PFAboutResume.vue'

import WhatIDo from 'src/static/profile-what-i-do'
import Tools from 'src/static/profile-tools.js'
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
