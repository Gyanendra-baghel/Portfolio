import Link from "next/link"

export default function Header() {
    return (
        <footer className="bg-gray-800 py-4 text-white v-full fixed top-0 left-0 w-screen z-0">
            <div className=" container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2x1 font-bold mx-4">Portfolio</Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/courses" className="space-x-4 text-gray-500 hover:text-gray-300">Courses</Link>
                    <Link href="/blogs" className="space-x-4 text-gray-500 hover:text-gray-300">Blogs</Link>
                    <Link href="/#skills" className="space-x-4 text-gray-500 hover:text-gray-300">Skills</Link>
                    <Link href="/contact" className="space-x-4 text-gray-500 hover:text-gray-300">Contact</Link>
                </nav>
            </div>
        </footer>
    )
}