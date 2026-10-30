import potatopic from "@/assets/placeholder.png";
import sun1 from '@/assets/sun1.png';
import sun2 from '@/assets/sun2.png';
import sun3 from '@/assets/sun3.png';
import sun4 from '@/assets/sun4.png';
import water1 from '@/assets/water1.png';
import water2 from '@/assets/water2.png';
import water3 from '@/assets/water3.png';
import soil1 from '@/assets/soil1.png';
import soil2 from '@/assets/soil2.png';
import soil3 from '@/assets/soil3.png';
import soil4 from '@/assets/soil4.png';
import soil5 from '@/assets/soil5.png';
import soil6 from '@/assets/soil6.png';
import soil7 from '@/assets/soil7.png';

export default function PlantWindow() {
  const sunImages: Record<number, string> = {1:sun1, 2:sun2, 3:sun3, 4:sun4};
  const waterImages: Record<number, string> = {1:water1, 2:water2, 3:water3};
  const soilImages: Record<number, string> = {1:soil1, 2:soil2, 3:soil3, 4:soil4, 5:soil5, 6:soil6, 7:soil7};
  return (
    <div className="plant-window">
      <img className="plant-photo" src={potatopic}></img>
      <div className="title">
        <h3>Plant.name</h3>
        <h4>łac. Plant.name_lac</h4>
        <h5>Plant.type</h5>
      </div>
      <hr/>
      <div className="info">
        <img src={sunImages[4]}></img>
        <img src={waterImages[2]}></img>
        <img src={soilImages[7]}></img>
      </div>
    </div>
  )
}