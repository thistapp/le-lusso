import { GalleryInterface } from '@/models/gallery/gallery'
import { dataCate } from '@/models/portfolio'

const portCategory: dataCate[] = [
    { label: 'all', value: '' },
    {
        label: 'interior',
        value: 'interior',
    },
    {
        label: 'construction',
        value: 'construction',
    },
]

const PortData: GalleryInterface[] = [
    {
        title: 'Aspire Pinklao Project',
        desc: {
            th: `นำเสน่ห์เหนือกาลเวลาของการออกแบบสไตล์ Mid-Century Modern มาสู่การใช้ชีวิตร่วมสมัย เรียบง่าย ผ่านผิวสัมผัสของไม้ที่อบอุ่น และรายละเอียดที่เลือกสรรอย่างพิถีพิถัน หลอมรวมกันเพื่อสร้างบรรยากาศที่หรูหรา เรียบสงบและผ่อนคลาย`,
            en: `Condo K’nut brings the timeless elegance of Mid-Century Modern design into contemporary living. Clean silhouettes, rich wood textures, and thoughtfully curated details come together to create a sophisticated yet inviting atmosphere.`,
        },
        cate: ['interior'],
        gallery: [
            '/gallery/portfolio/aspire-pinklao-project/LINE_ALBUM_FIRST__KHUN_NUT_250628_1.jpg',
        ],
        url: 'project/aspire-pinklao-project',
    },
    {
        title: 'Millennium Residence – Contemporary Elegance Redefined',
        desc: {
            th: `Millennium Residence Renovation ถ่ายทอดการใช้ชีวิตร่วมสมัยที่สง่างาม ผ่านการออกแบบทีมีความเรียบหรู ใช้วัสดุธรรมชาติ และโทนสีที่พิถีพิถัน ทุกพื้นที่ถูกออกแบบอย่างตั้งใจเพื่อยกระดับทุกช่วงเวลาในชีวิตประจำวัน ด้วยความหรูหราแบบเรียบง่ายและฟังก์ชันที่ลงตัว`,
            en: `This Millennium Residence renovation embodies sophisticated contemporary living with clean lines, natural textures, and a refined palette. Each area is thoughtfully crafted to elevate everyday moments with understated luxury and functional design.`,
        },
        cate: ['interior'],
        gallery: [
            '/gallery/portfolio/millennium-residence/LINE_ALBUM_Renovate_Millennium_Residence_250628_1.jpg',
        ],
        url: 'project/contemporary-elegance-redefined',
    },
    {
        title: 'Ananda Sportlife Home Renovation',
        desc: {
            th: `โครงการรีโนเวทบ้าน บ้านคลาสสิกในมิติแห่งความเรียบหรูแต่มีคความโมเดิร์น ภายนอกที่ปรับโฉมผสานเส้นสายสถาปัตยกรรมที่แข็งแรงเข้ากับรายละเอียดดั้งเดิมอย่างกลมกลืน เพื่อให้ดูหรูหราและอบอุ่นน่าอยู่`,
            en: `This home renovation project reimagines a classic residence with a refined contemporary elegance. The updated exterior balances bold architectural lines and traditional detailing, resulting in a facade that feels sophisticated yet welcoming.`,
        },
        cate: ['construction'],
        partcon: [],
        gallery: ['/gallery/portfolio/ananda-sportlife-home/01_OUTDOOR_1.jpg'],
        url: 'project/ananda-sportlife-home-renovation',
    },
    {
        title: 'Baan Klang Krung Residence – Full Renovation',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'renovation',
            'buildin',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'structure-demolition',
            'maintenance',
            'flooring-and-tiling',
        ],
        gallery: ['/gallery/portfolio/baan-klang-krung-residence/img_7845.jpg'],
        url: 'project/baan-klang-krung-residence',
    },
    {
        title: 'MBK Center Renovation Project – Comprehensive Upgrades',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'renovation',
            'buildin',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'structure-demolition',
            'flooring-and-tiling',
        ],
        gallery: [
            '/gallery/portfolio/mbk-center-renovation-project/IMG_8329.jpg',
        ],
        url: 'project/mbk-center-renovation-project',
    },
    {
        title: 'Dhamma Mongkol Temple – Meditation Hall Renovation Project',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'partitioning',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'structure-demolition',
            'flooring-and-tiling',
        ],
        gallery: ['/gallery/portfolio/dhamma-mongkol-temple/IMG_8399.jpg'],
        url: 'project/dhamma-mongkol-temple',
    },
    {
        title: 'Patthanagarn Four-Storey Single House Construction Project',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'partitioning',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'structure-demolition',
            'flooring-and-tiling',
        ],
        gallery: [
            '/gallery/portfolio/patthanagarn-four-storey-single-house/IMG_6474.jpg',
        ],
        url: 'project/patthanagarn-four-storey-single-house',
    },
    {
        title: 'Bukarn Yothin Pattana Residence – Renovation & Interior Upgrade',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'buildin',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'flooring-and-tiling',
        ],
        gallery: [
            '/gallery/portfolio/bukarn-yothin-pattana-residence/IMG_7198.jpg',
        ],
        url: 'project/bukarn-yothin-pattana-residence',
    },
    {
        title: 'Niche Mono Ratchavipha Condominium – Renovation Project',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'renovation',
            'buildin',
            'painting',
            'ceiling',
            'glass',
            'flooring-and-tiling',
        ],
        gallery: [
            '/gallery/portfolio/niche-mono-ratchavipha-condominium/IMG_4781.jpg',
        ],
        url: 'project/niche-mono-ratchavipha-condominium',
    },
    {
        title: 'SiamSnus Silom – Shop Construction Project',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'buildin',
            'partitioning',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'flooring-and-tiling',
        ],
        gallery: ['/gallery/portfolio/siamsnus-silom/IMG_4905.jpg'],
        url: 'project/siamSnus-silom',
    },
    {
        title: 'Ananda Residence – Full Renovation Project',
        desc: {
            th: ``,
            en: ``,
        },
        cate: ['construction'],
        partcon: [
            'renovation',
            'buildin',
            'painting',
            'ceiling',
            'glass',
            'stainless-steel',
            'structure-demolition',
            'maintenance',
            'flooring-and-tiling',
        ],
        gallery: ['/gallery/portfolio/ananda-residence/DSC04652.jpg'],
        url: 'project/siamSnus-silom',
    },
]

const exportedObject = {
    PortData,
    portCategory,
}

export default exportedObject
