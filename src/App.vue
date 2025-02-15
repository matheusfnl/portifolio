<template>
  <q-layout>
    <div class="page-container">
      <PFProfile />

      <q-page-container style="width: 100%">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import PFProfile from 'components/profile/PFProfile.vue'
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 1.25rem;
  display: flex;
  gap: 1.25rem;
}
</style>
