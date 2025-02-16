<template>
  <div class="q-mb-md row q-gutter-md items-end">
    <p class="q-mb-none text-h4 text-weight-medium">Resume</p>

    <div class="option-container flex">
      <button class="text-button" :class="{ selected: !studyTab }" @click="studyTab = false">
        Work
      </button>
      /
      <button class="text-button" :class="{ selected: studyTab }" @click="studyTab = true">
        Study
      </button>
    </div>
  </div>

  <div class="relative">
    <div
      v-for="(item, item_index) in selectedTabData"
      :key="item.name"
      class="relative q-mb-md q-ml-lg"
    >
      <div class="roadmap-dot" />
      <div class="roadmap-line" v-if="item_index !== selectedTabData.length - 1" />
      <p class="q-mb-none text-h6">{{ item.name }}</p>
      <p class="q-mb-none text-primary">{{ getPeriodOfTime(item) }}</p>
      <p class="q-mb-none">{{ item.description }}</p>

      <div class="column relative roles-container" v-if="item.roles">
        <div class="q-ml-lg relative" v-for="(role, role_index) in item.roles" :key="role.name">
          <div class="roadmap-dot role-dot" />
          <div class="roadmap-line role-line" v-if="role_index !== item.roles.length - 1" />
          <p class="q-mb-none text-h7">{{ role.name }}</p>
          <p class="q-mb-none text-primary">{{ getPeriodOfTime(role) }}</p>
          <p class="q-mb-none">{{ role.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import Roadmap from 'src/static/profile-roadmap'

interface RoadmapItem {
  name: string
  description: string
  start: Date
  end: Date | null
  roles?: Role[]
}

interface Role {
  name: string
  role: string
  start: Date
  end: Date | null
}

const studyTab = ref(false)
const selectedTabData = computed(() => {
  return studyTab.value ? Roadmap.study : Roadmap.work
})

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  })
    .format(date)
    .replace('.', '')
}

const getPeriodOfTime = (item: RoadmapItem | Role) => {
  const start = formatDate(new Date(item.start))
  const end = item.end ? formatDate(new Date(item.end)) : 'Atual'
  return `${start} - ${end}`
}
</script>

<style lang="scss" scoped>
.option-container {
  gap: 8px;

  .text-button {
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    font-size: 18px;
    cursor: pointer;

    &.selected {
      color: $primary;
    }

    &:hover {
      color: $primary;
    }
  }
}

.relative {
  position: relative;
}

.roadmap-line {
  position: absolute;
  top: 15px;
  left: -16px;
  width: 1px;
  background-color: rgba($primary, 0.2);
  height: calc(100% + 15px);

  &.role-line {
    height: calc(100% + 10px);
  }
}

.roadmap-dot {
  width: 7px;
  height: 7px;
  background-color: $primary;
  border-radius: 50%;
  position: absolute;
  top: 13px;
  left: -19px;
  outline: 3px solid rgba($primary, 0.2);

  &.role-dot {
    top: 11px;
  }
}

.roles-container {
  gap: 8px;
}

.text-h7 {
  font-size: 1.2rem;
}
</style>
