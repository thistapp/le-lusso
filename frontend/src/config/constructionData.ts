import { GalleryInterface } from '@/models/gallery/gallery'
import {
    CategoryConstructionType,
    ConstructionData,
} from '@/models/partconstruction/CategoryConstruc'

export const ConstructionCategory: CategoryConstructionType[] = [
    {
        title: 'Renovation',
        value: 'renovation',
        width: undefined,
    },
    {
        title: 'Buildin',
        value: 'buildin',
        width: undefined,
    },
    {
        title: 'Partitioning',
        value: 'partitioning',
        width: undefined,
    },
    {
        title: 'Painting',
        value: 'painting',
        width: undefined,
    },
    {
        title: 'Ceiling',
        value: 'ceiling',
        width: undefined,
    },
    {
        title: 'Glass',
        value: 'glass',
        width: undefined,
    },
    {
        title: 'Stainless Steel',
        value: 'stainless-steel',
        width: '150px',
    },
    {
        title: 'Structure Demolition',
        value: 'structure-demolition',
        width: '200px',
    },
    {
        title: 'Maintenance',
        value: 'maintenance',
        width: undefined,
    },
    {
        title: 'Flooring and Tiling',
        value: 'flooring-and-tiling',
        width: '180px',
    },
    {
        title: 'Work flow',
        value: 'work-flow',
        width: undefined,
    },
]

export const Construction: ConstructionData[] = [
    {
        title: 'renovation',
        value: 'renovation',
        price: '',
        desc: '<p class="font-bold">บริการรับรีโนเวทที่ตอบโจทย์ทุกการใช้ชีวิต</br>พร้อมให้คำแนะนำตั้งแต่ต้นจนจบ ให้ทุกการรีโนเวทเป็นเรื่องง่าย</br></br><ul class="list-disc relative left-4"><li>ให้คำแนะนำและปรับแต่งให้ทุกส่วนลงตัวกับสไตล์ของลูกค้า</li><li>ประเมิณราคารวดเร็ว</li><li>1 stop service ให้บริการตั้งแต่ดีไซน์จนจบการก่อสร้าง</li><li>เช็ค Status การดำเนินการแบบเรียลไทม์ จบปัญหาผู้รับเหมาหนีงาน</li></ul></p>',
    },
    {
        title: 'buildin',
        value: 'buildin',
        price: 'ค่าบริการเริ่มต้น : 1,000 บาท / ตารางเมตร\n(ขึ้นอยู่กับความยากง่ายของแบบ)',
        desc: '<p class="font-bold">เฟอร์นิเจอร์บิวท์อินที่ปรับแต่งได้ตามสไตล์การใช้งาน เพิ่มประโยชนใช้สอยในทุกพื้นที่</br>ทำให้ทุกการตกแต่งห้องสมบูรณ์แบบกว่าที่เคยเป็น</br></br><ul class="list-disc relative left-4"><li>รวม Function เข้ากับความสวยงามอย่างลงตัว</li><li>กลมกลืนกับทุกสไตล์ของห้องด้วยดีไซน์ที่ปรับแต่งได้</li></ul></p>',
    },
    {
        title: 'partitioning',
        value: 'partitioning',
        price: 'ค่าบริการเริ่มต้น : 500 บาท / ตารางเมตร\n(ราคาขึ้นอยู่กับวัสดุและรูปแบบของงาน)',
        desc: '<p class="font-bold">แบ่งสัดส่วนทุกการใช้งานแบบลงตัว เพื่อการใช้งานทุกพื้นที่อย่างคุ้มค่า</br></br><ul class="list-disc relative left-4"><li>แบ่งพื้นที่ได้ง่าย ปรับแต่งได้</li><li>ดำเนินการรวดเร็ว เหมาะกับพื้นที่ก่อสร้างน้อย ไม่ต้องการให้มีเสียงรบกวนมาก</li></ul></p>',
    },
    {
        title: 'painting',
        value: 'painting',
        price: 'ราคาเริ่มต้น : 350 บาท  / ตารางเมตร\n(ราคาไม่รวมค่าสีและอื่นๆ)',
        desc: '<p class="font-bold">เพื่อความสมบูรณ์แบบของดีไซน์เริ่มต้นที่โทนสีที่สวย บริการจากทางเราจึงไม่ใช่เพียงแค่ใช้ช่างที่ประสลการณ์มากกว่า 20ปี แต่ยังเลือกใช้สีที่มีคุณภาพดีที่สุด เพื่อให้มีระยะเวลาการใช้งานที่ยาวนาน</br></br><ul class="list-disc relative left-4"><li>คุณภาพฝีมือจากช่างที่มีประสบการณ์</li><li>ใช้ระยะเวลาที่รวดเร็วทั้งกระบวนการการประเมิณราคา และการเข้าหน้างานปฎิบัติงาน</li></ul></p>',
    },
    {
        title: 'ceiling',
        value: 'ceiling',
        price: 'ราคาเริ่มต้น : 300 บาท / ตารางเมตร',
        desc: '<p class="font-bold">เพิ่มรายละเอียดให้เพดานด้วยฝ้า ซึ่งสามารถcreate ได้ทั้ง</br></br><ul class="list-disc relative left-4"><li>ฝ้าฉาบเรียบ</li><li>ฝ้าหลุมซ่อนไฟ</li><li>ฝ้าทีบาร์</li></ul></p>',
    },
    {
        title: 'glass',
        value: 'glass',
        price: 'ราคาเริ่มต้น : 50 บาท / ฟุต\n(ราคาไม่รวมกระจก)',
        desc: '<p class="font-bold">เพิ่มแสงสว่างให้พื้นที่ภายในบ้าน ด้วยการติดตั้งกระจก พร้อมทั้งให้ mood modern รวมพื้นที่ภายนอกและภายในเข้าด้วยกัน</p>',
    },
    {
        title: 'stainless steel',
        value: 'stainless-steel',
        price: 'ราคาเริ่มต้น : สามารถสอบถามและประเมิณราคากับทีม',
        desc: '<p class="font-bold">สำหรับพื้นที่โซนครัว หรือพื้นที่ที่ต้องใช้วัสดุที่ต้องการความทนทาน ให้ความรู้สึก modern ทางทีมเรารับติดตั้งด้วยช่าง ประสบการณ์มากกว่า 30 ปี ให้ทุกการรีโนเวทเป็นเรื่องง่าย</br></br><ul class="list-disc relative left-4"><li>งานประณีต</li><li>คุณภาพดี ทนทานต่อการใช้งาน</li></ul></p>',
    },
    {
        title: 'structure demolition',
        value: 'structure-demolition',
        price: 'ราคาเริ่มต้น 100-200 บาท / ตารางเมตร\n(แล้วแต่วัสดุที่ทำการรื้อถอน และไม่รวมราคาขนย้าย)',
        desc: '<p class="font-bold">ให้บริการรับรื้อถอนโครงสร้างครบวงจร ทั้งทีมรับรื้อถอน และขนย้ายวัสดุ</br></br><ul class="list-disc relative left-4"><li>ลูกค้าสามารถกำหนดระยะเวลาได้</li><li>มีทีมวิศวะให้คำปรึกษาเรื่องโครงสร้าง</li></ul></p>',
    },
    {
        title: 'maintenance',
        value: 'maintenance',
        price: 'ราคา : ขึ้นอยู่กับระบบที่ต้องการซ่อมบำรุง',
        desc: '<p class="font-bold">รับซ่อมแซมฝ้าเพดาน และงานรับเหมาภายใน รวมทั้งงานพื้น สามารถทำการประเมิณราคาก่อนเข้าหน้างานได้ ราคาประเมิณขึ้นอยู่กับพื้นที่ของหน้างาน</p>',
    },
    {
        title: 'flooring and tiling',
        value: 'flooring-and-tiling',
        price: '',
        desc: '<p class="font-bold">รับปูพื้น ด้วยกระเบื้อง พื้นลามิเนต หรือหิน วัสดุปรับได้ตามความต้องการของลูกค้า โดยทางทีมสามารถประเมิณราคา พร้อมช่วยเลือกวัสดุให้เข้ากับความต้องการของลูกค้า ให้ตอบโจทย์ทั้งด้านความสวยงามและด้านการใช้งาน</p>',
    },
    {
        title: 'Work flow',
        value: 'work-flow',
        price: '',
        desc: '<p><ul class="list-disc relative left-4"><li><span class="font-bold">Initial Contact (การติดต่อเริ่มต้น)</span></br>ลูกค้าติดต่อ Lelusso ผ่านช่องทางที่สะดวก (เช่น เว็บไซต์, โทรศัพท์, Line, หรือ Social Media) ทีมงาน Lelusso นัดหมายเพื่อพูดคุยเบื้องต้นเกี่ยวกับความต้องการของลูกค้า</li><li><span class="font-bold">Consultation (การให้คำปรึกษา)</span></br>นัดหมายเพื่อพูดคุยรายละเอียดเพิ่มเติมแบบตัวต่อตัว หรือผ่านออนไลน์ สำรวจความต้องการ เช่น สไตล์การออกแบบ, งบประมาณ, และกำหนดการ ทีม Lelusso อธิบายกระบวนการทำงานและขั้นตอนทั้งหมด จัดทำใบเสนอราคาเบื้องต้นสำหรับบริการออกแบบพร้อมก่อสร้าง</li><li><span class="font-bold">Site Survey (สำรวจสถานที่)</span></br>นัดหมายทีม Lelusso เข้าสำรวจพื้นที่ก่อสร้างหรือปรับปรุง (ถ้ามี) ถ่ายรูปและวัดขนาดพื้นที่อย่างละเอียด จัดทำรายงานเบื้องต้นเกี่ยวกับพื้นที่สำหรับการออกแบบ</li><li><span class="font-bold">Concept Design (ออกแบบแนวคิด)</span></br>ทีมออกแบบของ Lelusso นำเสนอแนวคิดการออกแบบ (Concept Design) พร้อม Mood Board ลูกค้าร่วมให้ความคิดเห็นและเลือกแนวทางที่ต้องการ ทำการปรับแก้ไขแนวคิดจนกว่าจะตอบโจทย์ลูกค้า</li><li><span class="font-bold">Detailed Design (ออกแบบรายละเอียด)</span></br>จัดทำแบบก่อสร้าง (Construction Drawings) และแบบ 3D Visualization สรุปรายการวัสดุ (Material Specification) จัดทำ Timeline การก่อสร้างที่ชัดเจน นำเสนอให้ลูกค้าตรวจสอบและอนุมัติ</li><li><span class="font-bold">Contract & Agreement (เซ็นสัญญา)</span></br>จัดทำสัญญาการก่อสร้างที่ครอบคลุมรายละเอียดทั้งหมด ลูกค้าตรวจสอบและเซ็นสัญญา ชำระเงินงวดแรกตามเงื่อนไขที่กำหนดในสัญญา</li><li><span class="font-bold">Construction Phase (ขั้นตอนการก่อสร้าง)</span></br>เริ่มดำเนินการก่อสร้างตามแผนงาน ทีม Lelusso ประสานงานและบริหารโครงการทุกขั้นตอน มีการรายงานความคืบหน้าเป็นระยะ พร้อมการตรวจสอบคุณภาพงาน</li><li><span class="font-bold">Final Inspection & Handover (ตรวจสอบและส่งมอบงาน)</span></br>ลูกค้าตรวจสอบความเรียบร้อยของงานก่อสร้าง ทีม Lelusso ดำเนินการแก้ไข (ถ้ามี) เพื่อให้ได้งานที่สมบูรณ์แบบ ส่งมอบงานก่อสร้าง พร้อมเอกสารและคำแนะนำการใช้งาน/ดูแลรักษา</li><li><span class="font-bold">After-Sales Service (บริการหลังการขาย)</span></br>ให้การรับประกันตามเงื่อนไขในสัญญา ลูกค้าสามารถติดต่อทีม Lelusso หากมีคำถามหรือปัญหาหลังการส่งมอบ เสนอการบำรุงรักษาเพิ่มเติมหรือบริการเสริมในอนาคต</li></ul></p>',
    },
]
