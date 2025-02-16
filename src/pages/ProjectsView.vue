<template>
  <q-card>
    <q-card-section>
      <p class="q-mb-none text-h3 text-weight-medium">
        {{ $t('projects.title') }}
      </p>

      <div class="style-line q-my-md" />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.style-line {
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, $primary, rgba($primary, 0.5));
  border-radius: 10px;
  width: 80px;
}
</style>
