import {
    ServiceCardType,
    ServiceProjectType,
    ServiceStepType,
} from '@/models/services/servicestype'

export const servicesData: ServiceCardType[] = [
    {
        title: 'INTERIOR DESIGN',
        desc: '<ul class="list-disc"><li>วาง layout, mood & tone ตามไลฟ์สไตล์</li><li>ออกแบบ 3D พร้อมแบบก่อสร้าง</li></ul>',
        path: '',
        image: '/gallery/servicesPage/slide/services_card_1.JPG',
    },
    {
        title: 'Design & Build / Renovation',
        desc: '<ul class="list-disc"><li>สำรวจพื้นที่ เขียนแบบ ขออนุญาต ก่อสร้างจริง</li><li>มี BOQ คุมงบ/ ทีมช่าง/ วิศวกรควบคุมงาน</li></ul>',
        path: '',
        image: '/gallery/servicesPage/slide/services_card_2.jpg',
    },
    {
        title: 'Custom Built-in Furniture',
        desc: '<ul class="list-disc"><li>ออกแบบบิวท์อินให้เหมาะกับขนาดห้อง</li><li>เลือกวัสดุตามงบและ mood</li></ul>',
        path: '',
        image: '/gallery/servicesPage/slide/services_card_3.jpg',
    },
]

export const servicesStepData: ServiceStepType[] = [
    {
        title: 'Consult & Site Visit',
        desc: 'นัดพบ / วัดพื้นที่จริง เพื่อเก็บข้อมูล ไลฟ์สไตล์ และงบประมาณ',
        image: '/gallery/servicesPage/step/services_step_1.jpeg',
    },
    {
        title: 'Design Presentation',
        desc: 'ส่งแบบ Moodboard, Layout และ 3D Perspective เพื่อเลือกวัสดุ + บรรยากาศ',
        image: '/gallery/servicesPage/step/services_step_2.JPG',
    },
    {
        title: 'Estimate & BOQ',
        desc: 'สรุปราคาและรายการวัสดุ (BOQ) แบบโปร่งใส พร้อมปรับตามงบได้',
        image: '/gallery/servicesPage/step/services_step_3.png',
    },
    {
        title: 'Construction Begins',
        desc: 'เริ่มก่อสร้าง พร้อมการอัปเดตผ่านระบบติดตามหน้างาน',
        image: '/gallery/servicesPage/step/services_step_4.jpeg',
    },
    {
        title: 'Handover & Styling',
        desc: 'ส่งมอบงานพร้อมสไตลิ่ง และตรวจเช็คคุณภาพก่อนเข้าอยู่',
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
