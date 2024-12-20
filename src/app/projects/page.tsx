import LabSidebar from "@/components/LabSidebar";
import Image from "next/image";

const LabPage = () => {
    return ( 
        <div className="bg-[#07070810] min-h-screen">
            <a href="/" className="bg-white sticky top-0 flex gap-4 py-2 px-4 border-b shadow-sm items-center">
                    <Image
                        src="/avatar.png"
                        alt="Ayush Tomar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="text-sm">Ayush Tomar</p>
                        <p className="text-xs tracking-wide">Projects</p>
                    </div>
            </a>
            <div className="w-full p-6">
                    <h1 className="text-xl font-semibold mb-5">All Projects</h1>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                        <li className="border bg-white shadow rounded-lg h-80">hello</li>
                    </ul>
                </div>
            </div>
     );
}
 
export default LabPage;