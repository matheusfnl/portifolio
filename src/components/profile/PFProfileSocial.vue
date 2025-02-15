<template>
  <a :href="socialLink.link" style="color: inherit; opacity: 0.5" target="_blank">
    <component :is="socialLink.icon" />
  </a>
</template>

<script lang="ts" setup>
interface SocialLink {
  icon: object
  link: string
}

defineProps<{ socialLink: SocialLink }>()
</script>
