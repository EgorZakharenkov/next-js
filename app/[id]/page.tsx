import { type } from "os";

type Props = {
  params:{
    id:string;
  }
}

export default function Anime({params:{id}}:Props) {
  return <div>
    ANime {id}
  </div>
}