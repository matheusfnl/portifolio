<template>
  <q-layout>
    <div class="page-container">
      <PFHeader />
      <PFProfile />

      <q-page-container style="width: 100%" class="view-container">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import PFProfile from 'components/profile/PFProfile.vue'
import PFHeader from 'components/header/PFHeader.vue'
</script>

<style scoped>
.page-container {
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 1.25rem;
  padding-top: calc(68px + 1.25rem);
  display: flex;
  gap: 1.25rem;
}

.view-container {
  padding-top: 0px !important;
}

@media (max-width: 700px) {
  .page-container {
    flex-direction: column;
  }
}
</style>
