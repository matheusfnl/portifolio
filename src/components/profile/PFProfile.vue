<template>
  <aside class="aside-content">
    <q-card>
      <q-card-section>
        <div class="profile-card-container flex column items-center">
          <div class="g-image-container q-mb-lg">
            <img :src="profilePhoto" class="full-width" />
          </div>

          <p class="text-h4 text-weight-medium q-mb-md">
            {{ $t('profile.owner.name') }}
          </p>

          <div class="g-role-container">
            {{ $t('profile.owner.role') }}
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="column q-gutter-md">
          <PFProfileContact
            v-for="(contact, index) in Object.values(contacts)"
            :key="contact.field"
            :contact="contact"
            :index="index"
          />
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center q-gutter-md">
          <PFProfileSocial
            v-for="(link, index) in Object.values(socialLinks)"
            :key="index"
            :social-link="link"
          />
        </div>
      </q-card-section>
    </q-card>
  </aside>
</template>

<script lang="ts" setup>
import PFProfileContact from 'components/profile/PFProfileContact.vue'
import PFProfileSocial from 'components/profile/PFProfileSocial.vue'

import profilePhoto from 'src/assets/profile-photo.png'

import contacts from 'src/static/profile-contacts'
import socialLinks from 'src/static/profile-social-links'
</script>

<style lang="scss" scoped>
.profile-card-container {
  width: 274px;
  padding-top: 36px;

  .g-image-container {
    max-width: 160px;
    max-height: 160px;
    border-radius: 28px;
    padding: 1rem;
  }

  .g-role-container {
    border-radius: 8px;
    padding: 2px 12px 4px;
  }
}

.aside-content {
  position: sticky;
  top: 1.25rem;
  height: fit-content;
}
</style>
