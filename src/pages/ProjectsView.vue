<template>
  <q-card>
    <q-card-section>
      <p class="q-mb-none text-h3 text-weight-medium">
        {{ $t('projects.title') }}
      </p>

      <div class="style-line q-mt-md" />
    </q-card-section>

    <q-card-section>
      <div class="column q-gutter-sm">
        <div v-if="requestPending" class="flex justify-center q-my-md">
          <q-spinner-cube color="secondary" size="40px" />
        </div>

        <template v-else>
          <a
            class="q-card-secondary q-py-sm q-px-md repository-card"
            v-for="repository in repositories"
            :href="repository.html_url"
            :key="repository.id"
            target="_blank"
          >
            <div class="row justify-between">
              <p class="q-mb-none repo-title">
                {{ repository.name }}
              </p>

              <a
                v-if="repository.homepage"
                class="text-secondary text-bold repository-redirect"
                :href="repository.homepage"
                target="_blank"
              >
                View app
              </a>
            </div>

            <p class="q-mb-none repo-description">
              {{ repository.description }}
            </p>

            <div class="q-mt-sm" v-if="repository.language">
              <span
                :style="getTagColor(repository.language)"
                class="repo-tag flex items-center q-px-sm"
              >
                {{ repository.language }}
              </span>
            </div>
          </a>
        </template>

        <q-pagination
          v-model="current"
          :max="totalPages"
          direction-links
          flat
          class="q-mt-md"
          color="secondary"
          active-color="secondary"
          @update:modelValue="fetchRepositories"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { fetchApi } from 'src/api/fetchApi'
import tagColors from 'src/enums/tag-colors'

const router = useRouter()
const route = useRoute()

const repositories = ref<Repository[]>([])
const current = ref(1)
const totalPages = ref(1)
const requestPending = ref(false)

interface Repository {
  id: number
  name: string
  description: string
  language: string
  html_url: string
  homepage: string
}

const getTagColor = (language: string) => ({ backgroundColor: tagColors[language] || '#9c948c' })
const fetchRepositories = async () => {
  requestPending.value = true

  router.push({ query: { page: current.value } })

  const response = await fetchApi<Repository[]>({
    url: 'users/matheusfnl/repos',
    params: {
      sort: 'created',
      per_page: 10,
      page: current.value,
    },
  })

  repositories.value = response.data
  requestPending.value = false

  return response
}

onMounted(async () => {
  if (route.query.page) {
    current.value = +route.query.page
  }

  const response = await fetchRepositories()
  const linkHeader = response.headers?.link

  if (linkHeader) {
    const lastPage = linkHeader.match(/page=(\d+)>; rel="last"/)
    if (lastPage) {
      totalPages.value = lastPage?.[1] ? +lastPage[1] : 1
    }
  }
})
</script>

<style lang="scss" scoped>
.style-line {
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, $secondary, rgba($secondary, 0.5));
  border-radius: 10px;
  width: 80px;
}

.repository-card {
  text-decoration: none;
  color: inherit;
  transition:
    border 0.3s,
    margin-left 0.3s;

  &:hover {
    background: linear-gradient(to right, rgba($secondary, 0.2), rgba($secondary, 0.1));
    border: 1px solid $secondary;
    margin-left: 20px;
  }

  .repo-title {
    font-size: 16px;
    font-weight: 600;
  }

  .repo-description {
    opacity: 0.6;
  }

  .repository-redirect {
    text-decoration: none;
    background: transparent;

    &:hover {
      text-decoration: underline;
    }
  }

  .repo-tag {
    width: fit-content;
    border-radius: 4px;
    display: flex;
    gap: 0.25rem;
    font-size: 12px;
    font-weight: 700;
    color: white;
  }
}
</style>
