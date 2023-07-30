import Link from "@/node_modules/next/link"
import "./style.css"
const Header = ()=>{
  return (
    <div className="header">
        <div className="links">
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
            <Link href="/categories">Categories</Link>
        </div>
        <div className="search">
            <input placeholder="search" type="text"/>
        </div>
        <div className="register">
            <Link href="/register" className="signUp">Sign up</Link>
            <Link href="/login" className="signIn">Sign in</Link>
        </div>
    </div>
  )
}
export {Header}