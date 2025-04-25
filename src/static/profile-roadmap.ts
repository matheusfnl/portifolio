import { createI18n } from 'vue-i18n'

import messages from 'src/i18n'

const i18n = createI18n({
  locale: 'en-US',
  legacy: false,
  messages,
})

const works = [
  {
    name: 'onfly',
    roles: [{ name: 'fulltime', start: new Date('2025-04-14'), end: null }],
    start: new Date('2025-04-14'),
    end: null,
  },
  {
    name: 'gpm',
    roles: [
      { name: 'fulltime', start: new Date('2022-01-17'), end: new Date('2023-06-17') },
      { name: 'intern', start: new Date('2023-06-17'), end: new Date('2025-04-14') },
    ],
    start: new Date('2022-01-17'),
    end: new Date('2025-04-14'),
  },
]

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

  work: works.map((work) => ({
    name: i18n.global.t(`about.roadmap.work.${work.name}.name`),
    start: work.start,
    end: work.end,
    description: i18n.global.t(`about.roadmap.work.${work.name}.description`),
    roles: work.roles.map((role) => ({
      name: i18n.global.t(`about.roadmap.work.${work.name}.roles.${role.name}.title`),
      role: i18n.global.t(`about.roadmap.work.${work.name}.roles.${role.name}.description`),
      start: role.start,
      end: role.end,
    })),
  })),
}
