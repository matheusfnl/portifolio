import { createI18n } from 'vue-i18n'

import messages from 'src/i18n'

const i18n = createI18n({
  locale: 'en-US',
  legacy: false,
  messages,
})

export default {
  study: [
    {
      name: i18n.global.t('about.roadmap.study.puc-minas.name'),
      description: i18n.global.t('about.roadmap.study.puc-minas.description'),
      start: new Date('2021-08-01'),
      end: null,
      roles: [],
    },
  ],

  work: [
    {
      name: i18n.global.t('about.roadmap.work.gpm.name'),
      start: new Date('2022-01-17'),
      description: '',
      end: null,
      roles: [
        {
          name: i18n.global.t('about.roadmap.work.gpm.roles.fulltime.title'),
          role: i18n.global.t('about.roadmap.work.gpm.roles.fulltime.description'),
          start: new Date('2023-06-17'),
          end: null,
        },
        {
          name: i18n.global.t('about.roadmap.work.gpm.roles.intern.title'),
          role: i18n.global.t('about.roadmap.work.gpm.roles.intern.description'),
          start: new Date('2022-01-17'),
          end: new Date('2023-06-17'),
        },
      ],
    },
  ],
}
