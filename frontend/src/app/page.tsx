// import { useRouter } from "next/navigation";
import Data from '@/config/slideData';
import PortComponents from "@/components/home/portComponent";
import SlideComponent from "@/components/home/slideComponent";
import WhyUsComponent from "@/components/home/whyUsComponent";

export default function Home() {
  // const router = useRouter();
  console.log(Data)
  return (
    <div className="">
      <SlideComponent slide={Data.slideData} />
      <PortComponents port={Data.portData} />
      <WhyUsComponent data={Data.whyUs} />
    </div>
  );
}
