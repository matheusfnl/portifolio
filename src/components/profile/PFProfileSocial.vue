<template>
  <a :href="socialLink.link" target="_blank" class="q-card-secondary link-none">
    <div class="row items-center q-py-sm q-px-md q-gutter-md">
      <component :is="socialLink.icon" />

      <div>
        <p class="q-mb-none text-bold">
          {{ $t(`profile.social.${socialLink.name}.name`) }}
        </p>

        <p class="q-mb-none social-profile">
          {{ $t(`profile.social.${socialLink.name}.profile`) }}
        </p>
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
interface SocialLink {
  icon: object
  link: string
  name: string
}

defineProps<{ socialLink: SocialLink }>()
</script>

<style lang="scss" scoped>
.link-none {
  text-decoration: none;
  color: inherit;
  transition:
    border 0.3s,
    margin-left 0.3s,
    transform 0.3s;

  .social-profile {
    opacity: 0.6;
  }

  &:hover {
    background: linear-gradient(to right, rgba($accent, 0.2), rgba($accent, 0.1));
    border: 1px solid $accent;
    transform: scale(1.015);
  }
}
</style>
