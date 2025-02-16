<template>
  <q-header class="portifolio-header">
    <q-card>
      <div class="row q-gutter-md q-px-md q-py-sm">
        <div v-for="item in menuItems" :key="item">
          <router-link class="menu-btn" :class="{ 'text-primary': selected(item) }" :to="item">
            {{ $t(`header.menu.${item}`) }}
          </router-link>

          <div v-if="selected(item)" class="selected" />
        </div>
      </div>
    </q-card>
  </q-header>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = ['about', 'projects', 'contact']

const selected = (menuItem: string) => {
  return route.path.replace('/', '') === menuItem
}
</script>

<style lang="scss" scoped>
.portifolio-header {
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: transparent;
  top: 1.25rem;

  .menu-btn {
    text-decoration: none;
    color: inherit;
    background: transparent;
    border: none;
    color: inherit;
    font-size: 18px;
    cursor: pointer;
  }

  .selected {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, $primary, rgba($primary, 0.5));
    border-radius: 10px;
  }
}
</style>
