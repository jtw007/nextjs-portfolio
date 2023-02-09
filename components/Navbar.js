// import Link from next -- Link is only for internal sources
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                {/* links take any child components */}
                Home
            </Link>

            <Link href='/about'>
                About me
            </Link>

            {/* outside sources use regular A tags */}
            <a 
                href="https://www.google.com"
                target="_blank"
            >
                Go to Google
            </a>
        </nav>
    )
}