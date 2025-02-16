<template>
  <div class="profile-badge row">
    <q-responsive :ratio="1" class="g-gradient-card flex items-center justify-center">
      <q-icon size="18px" :name="contact.iconName" class="text-primary" />
    </q-responsive>

    <div>
      <p class="q-mb-none g-label">{{ $t(`profile.fields.${contact.field}`) }}</p>
      <a
        v-if="contact.link"
        :href="contact.link"
        target="_blank"
        class="text-decoration-none q-mb-none"
      >
        {{ contact.value }}
      </a>

      <p v-else class="q-mb-none">{{ contact.value }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Contact {
  field: string
  value: string
  iconName: string
  link?: string
}

defineProps<{ contact: Contact }>()
</script>

<style lang="scss" scoped>
.profile-badge {
  gap: 1rem;

  .g-gradient-card {
    width: 48px;
    padding: 0.5rem;
    border-radius: 8px;
  }

  .text-decoration-none {
    text-decoration: none;
    color: inherit;
  }
}
</style>
