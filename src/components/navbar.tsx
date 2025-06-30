import { itemsNavbar } from "@/data";
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-2xl">
            <nav>
                <div className="flex px-4 py-4">
                {itemsNavbar.map((item) => (
                    <div key={item.id}
                    className="px-2 py-1 transition duration-150 cursor-pointer rounded-sm text-white text-xl hover:bg-sky-800 ">
                        <Link href={item.link}>{item.title}</Link>
                    </div>
                ))}
                </div>
            </nav>
        </div>

    );

}

export default Navbar;