import "../styles/Main.css"
import { Anime } from "../anime"
import Link from "@/node_modules/next/link";
export default function Home() {
  type AnimeType = {
    id: number;
    name: string;
    img: string;
  }
  return (
    <div>
      <div className="items">
        {Anime.map((item, index) => (<Link href={`/${item.route}`} key={index} className="item">
          <img className="bg" src={item.img} alt="" />
          <span>{item.name}</span>
        </Link>))}
      </div>
    </div>
  )
}
