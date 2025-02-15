<template>
  <div class="g-gradient-card row">
    <div class="q-ml-md q-mr-lg row items-center justify-center">
      <q-icon :name="data.iconName" size="48px" class="text-primary" />
    </div>

    <div>
      <p class="q-mb-sm text-h5 text-bold">Web development</p>
      <p class="q-mb-sm">High-quality development of sites at the professional level.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Services {
  field: string
  iconName: string
}

defineProps<{ data: Services }>()
</script>

<style scoped>
.g-gradient-card {
  border-radius: 8px;
  padding: 1rem;
  flex: 1;
  flex-wrap: unset;
}
</style>
