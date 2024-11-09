import Link from "next/link"

export default function Header(){
    return (
        <>
        <div className="Navbar">
        <div className="companyLogo">
        <h1 className="logoName">
          My Portfolio.
        </h1>
      </div>
        <div>
        
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={""}>
            <li>About</li>
          </Link>
          <Link href={""}>
            <li>Contact</li>
          </Link>
          <Link href={""}>
            <li>Service</li>
          </Link>
        </ul>
        </div>
        </div>
        </>
    )
};