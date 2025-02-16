<template>
  <q-header class="portifolio-header">
    <q-card>
      <div class="row q-gutter-md q-px-md q-py-sm">
        <div v-for="(item, index) in menuItems" :key="item">
          <router-link
            class="menu-btn g-text"
            :class="[getSelectedItemClass(item, index), `hover-${getColorByIndex(index)}`]"
            :to="item"
          >
            {{ $t(`header.menu.${item}`) }}
          </router-link>

          <div v-if="selected(item)" class="selected" :class="getLineClass(item, index)" />
        </div>

        <div @click="toggleTheme" class="theme-btn">
          <q-icon size="22px" :name="getIcon" class="g-text" />
        </div>
      </div>
    </q-card>
  </q-header>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import { computed, onMounted } from 'vue'

const route = useRoute()
const $q = useQuasar()

const menuItems = ['about', 'projects']

const selected = (menuItem: string) => {
  return route.path.replace('/', '') === menuItem
}

const getColorByIndex = (index: number) => {
  const colors = ['primary', 'secondary']
  return colors[index % 2]
}

const getSelectedItemClass = (item: string, index: number) => {
  if (selected(item)) {
    return `text-${getColorByIndex(index)}`
  }
  return ''
}

const getLineClass = (item: string, index: number) => {
  if (selected(item)) {
    return getColorByIndex(index)
  }
  return ''
}

const getIcon = computed(() => ($q.dark.isActive ? 'wb_sunny' : 'nights_stay'))

const loadTheme = () => {
  const darkTheme = localStorage.getItem('@mfpf-theme')

  if (darkTheme) {
    $q.dark.set(darkTheme === 'dark')
  }
}

const toggleTheme = () => {
  $q.dark.toggle()
  localStorage.setItem('@mfpf-theme', $q.dark.isActive ? 'dark' : 'light')
}

onMounted(() => {
  loadTheme()
})
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
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;

    &.hover-primary:hover {
      color: $primary;
    }

    &.hover-secondary:hover {
      color: $secondary;
    }
  }

  .selected {
    width: 100%;
    height: 2px;
    border-radius: 10px;

    &.primary {
      background: linear-gradient(to right, $primary, rgba($primary, 0.5));
    }

    &.secondary {
      background: linear-gradient(to right, $secondary, rgba($secondary, 0.5));
    }
  }

  .theme-btn {
    padding-top: 2px;
    cursor: pointer;

    i {
      transition: color 0.3s;
    }

    &:hover {
      i {
        color: $primary;
      }
    }
  }
}
</style>
