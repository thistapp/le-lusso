import {
    ServiceCardType,
    ServiceProjectType,
    ServiceStepType,
} from '@/models/services/servicestype'

export const servicesData: ServiceCardType[] = [
    {
        title: 'session.session1.title',
        desc: 'session.session1.desc',
        path: '',
        image: '/gallery/servicesPage/slide/services_card_1.JPG',
    },
    {
        title: 'session.session2.title',
        desc: 'session.session2.desc',
        path: '',
        image: '/gallery/servicesPage/slide/services_card_2.jpg',
    },
    {
        title: 'session.session3.title',
        desc: 'session.session3.desc',
        path: '',
        image: '/gallery/servicesPage/slide/services_card_3.jpg',
    },
]

export const servicesStepData: ServiceStepType[] = [
    {
        title: 'step.step1.title',
        desc: 'step.step1.desc',
        image: '/gallery/servicesPage/step/services_step_1.jpeg',
    },
    {
        title: 'step.step2.title',
        desc: 'step.step2.desc',
        image: '/gallery/servicesPage/step/services_step_2.JPG',
    },
    {
        title: 'step.step3.title',
        desc: 'step.step3.desc',
        image: '/gallery/servicesPage/step/services_step_3.png',
    },
    {
        title: 'step.step4.title',
        desc: 'step.step4.desc',
        image: '/gallery/servicesPage/step/services_step_4.jpeg',
    },
    {
        title: 'step.step5.title',
        desc: 'step.step5.desc',
        image: '/gallery/servicesPage/step/services_step_5.png',
    },
]

export const servicesProject: ServiceProjectType[] = [
    {
        title: 'our project',
        image: '',
        path: '#',
    },
    {
        title: 'project-1',
        image: '/gallery/servicesPage/project/project_1.png',
        path: '#',
    },
    {
        title: 'project-2',
        image: '/gallery/servicesPage/project/project_2.png',
        path: '#',
    },
    {
        title: 'project-3',
        image: '/gallery/servicesPage/project/project_3.png',
        path: '#',
    },
    {
        title: 'view more',
        image: '',
        path: '/portfolio',
    },
]
