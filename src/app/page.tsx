import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GoBeaker } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiXLogo } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-[#070708] bg-opacity-10 h-full w-full">
            <div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-4 md:h-dvh p-3 md:grid-rows-12 gap-3 max-w-screen-2xl">
                <div className="bg-white rounded-xl md:row-span-4 shadow-sm p-4 space-y-3">
                    <div className="space-y-3">
                        <div className="flex gap-[10px] items-center">
                            <div className="h-10 w-10">
                                <Image
                                    src="/avatar.png"
                                    alt="Ayush Tomar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                            <h1 className="text-[#374044]">Ayush Tomar</h1>
                        </div>
                        <p className="text-[#6d6d6e] text-[15px]">
                            Web Developer with a strong foundation in software engineering creating digital products. Passionate about interface design and attention to detail, striving to create great experiences.
                        </p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <ul className="flex gap-3">
                            <li>
                                <a href="https://github.com/Ayusht0mar">
                                    <FaGithub fill="#9FA0A1" size={20}/>
                                </a>
                            </li>  
                            <li>
                                <a href="https://www.instagram.com/ayushtomar.in/">
                                    <FaInstagram fill="#9FA0A1" size={20}/>
                                </a>
                            </li>           
                            <li>
                                <a href="https://www.linkedin.com/in/ayusht0mar/">
                                    <FaLinkedinIn fill="#9FA0A1" size={20}/>
                                </a>
                            </li> 
                            <li>
                                <a href="https://x.com/justayushtomar">
                                    <PiXLogo fill="#9FA0A1" size={20}/>
                                </a>
                            </li>
                        </ul>
                        {/* <p className="text-[#6d6d6e]">View resume</p> */}
                    </div>
                </div>
                <div className="rounded-xl aspect-video md:aspect-auto shadow-sm md:row-span-4 overflow-hidden">
                    <Link href="https://www.inconcise.in/">
                        <div className="relative w-full max-w-sm h-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image
                                src="/covers/inconcise-cover.png"
                                alt="Image"
                                layout="fill"
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 transition-opacity opacity-80 duration-300 ease-in-out"></div>
                            <div className="absolute bottom-4 left-4">
                                <h2 className="text-xl font-bold text-white ">Inconcise</h2>
                                <p className="text-sm text-gray-200">Interactive, animated UI components and templates for React, Tailwind CSS, Framer Motion & more.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="rounded-xl aspect-video md:aspect-auto shadow-sm md:row-span-4 overflow-hidden">
                    <Link href="https://shortcuts.vercel.app/">
                        <div className="relative w-full max-w-sm h-full overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/covers/shortcuts-cover.png"
                                alt="Image"
                                layout="fill"
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 transition-opacity opacity-80 duration-300 ease-in-out"></div>
                            <div className="absolute bottom-4 left-4">
                                <h2 className="text-xl font-bold text-white ">Shortcuts</h2>
                                <p className="text-sm text-gray-200">Centralizing shortcuts to get the work done at a faster speed.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="bg-white md:col-span-3 md:row-span-5 rounded-xl shadow-sm p-4 space-y-3 flex flex-col">
                    <div className="flex justify-between items-end">
                        <h4 className="tracking-tight text-xl font-medium text-content-primary">Projects</h4>
                        <a href="/projects" className="mr-4">View more</a>
                    </div>
                    <ul className="grid md:grid-cols-3 gap-4">
                      <li className="aspect-video border rounded-lg relative overflow-hidden">
                            <Image
                                src="/covers/discord-cover.png"
                                alt="Image"
                                layout="fill"
                                className="transition-transform duration-300 ease-in-out"
                            />
                            <p className="absolute left-2 bottom-2 z-10 bg-white rounded px-2 py-1 border shadow-sm">Discord Clone</p>
                            <div className="flex gap-2 absolute bottom-2 right-2">
                                <Link href="https://github.com/Ayusht0mar/airbnb-clone" className="z-10 bg-white rounded px-1 py-1"><CiGlobe size={20}/></Link>
                                <Link href="https://airbnb-clone-ayush.vercel.app/" className="z-10 bg-white rounded px-1 py-1"><IoCodeSlashOutline size={20}/></Link>
                            </div>
                        </li>
                        <li className="aspect-video border rounded-lg relative overflow-hidden">
                            <Image
                                src="/covers/airbnb-cover.png"
                                alt="Image"
                                layout="fill"
                                className="transition-transform duration-300 ease-in-out"
                            />
                            <p className="absolute left-2 bottom-2 z-10 bg-white rounded px-2 py-1 border shadow-sm">Airbnb Clone</p>
                            <div className="flex gap-2 absolute bottom-2 right-2">
                                <Link href="https://airbnb-clone-ayush.vercel.app/" className="z-10 bg-white rounded px-1 py-1"><CiGlobe size={20}/></Link>
                                <Link href="https://github.com/Ayusht0mar/airbnb-clone" className="z-10 bg-white rounded px-1 py-1"><IoCodeSlashOutline size={20}/></Link>
                            </div>
                        </li>         
                        <li className="aspect-video border rounded-lg relative overflow-hidden">
                            <Image
                                src="/covers/loom-cover.png"
                                alt="Image"
                                layout="fill"
                                className="transition-transform duration-300 ease-in-out"
                            />
                            <p className="absolute left-2 bottom-2 z-10 bg-white rounded px-2 py-1 border shadow-sm">Loom Clone</p>
                            <div className="flex gap-2 absolute bottom-2 right-2">
                                <Link href="https://github.com/Ayusht0mar/airbnb-clone" className="z-10 bg-white rounded px-1 py-1"><CiGlobe size={20}/></Link>
                                <Link href="https://airbnb-clone-ayush.vercel.app/" className="z-10 bg-white rounded px-1 py-1"><IoCodeSlashOutline size={20}/></Link>
                            </div>
                        </li>            
                    </ul>
                </div>
                <div className="bg-white flex flex-col gap-4 rounded-xl md:row-span-7 md:col-span-2 p-4">
                    <p className="tracking-tight text-[17px] font-medium text-content-primary">Tech Stack</p>
                    <ul className="grid md:grid-cols-2 md:grid-rows-2 h-full gap-2">
                        <li className="bg-[#07070808] rounded-lg p-3">
                            <p className="tracking-tight text-[17px] font-medium text-content-primary">Front-end</p>
                            <div className="flex flex-wrap gap-2 mt-2 leading-none">
                                <p className="bg-white w-fit py-2 px-2 rounded border">HTML</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">CSS</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border"> Tailwind</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">JavaScript</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">TypeScript</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">React Js</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">Next Js</p>
                            </div>
                        </li>
                        <li className="bg-[#07070808] rounded-lg p-3">
                            <p className="tracking-tight text-[17px] font-medium text-content-primary">Back-end</p>
                            <div className="flex gap-2 mt-2 leading-none">
                                <p className="bg-white w-fit py-2 px-2 rounded border">Node Js</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">Next Auth</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">Bun Js</p>
                            </div>
                        </li>
                        <li className="bg-[#07070808] rounded-lg p-3">
                            <p className="tracking-tight text-[17px] font-medium text-content-primary">Database</p>
                            <div className="flex gap-2 mt-2 leading-none">
                                <p className="bg-white w-fit py-2 px-2 rounded border">MySQL</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">PostgresSQL</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">MongoDB</p>
                            </div>
                        </li>
                        <li className="bg-[#07070808] rounded-lg p-3">
                            <p className="tracking-tight text-[17px] font-medium text-content-primary">Devops</p>
                            <div className="flex gap-2 mt-2 leading-none">
                                <p className="bg-white w-fit py-2 px-2 rounded border">Docker</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">AWS</p>
                                <p className="bg-white w-fit py-2 px-2 rounded border">Kubernest</p>
                            </div>
                        </li>                       
                    </ul>
                </div> 
                <a href="/lab" className=" bg-white md:row-span-3 rounded-xl py-4 pl-4">
                    <p className="tracking-tight text-[17px] font-medium ">Explore Lab</p>
                    <div className="flex justify-between">
                        <GoBeaker size={48} className="mt-3 shadow-lg border rounded-lg p-1.5"/>
                        <div className="bg-[#07070808] h-full pr-4 p-2 rounded-l-lg">
                            <p>UI experiments</p>
                            <p>Component explorations</p>
                            <p>Interaction design</p>     
                        </div>
                    </div>
                </a>        
                <div className="bg-white rounded-xl md:row-span-4 shadow-sm py-4 pl-4 space-y-4 flex flex-col">
                    <p className="tracking-tight text-[17px] font-medium text-content-primary">Contact</p>
                    <div className="flex flex-col gap-3 bg-[#07070808] p-3 rounded-l-lg h-full">
                        <p>To: hi@ayushtomar.in</p>
                        <p>Let's Chat</p>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <p className=" border py-2 rounded-md bg-black text-white">Email me</p>
                            <p className="border py-2 border-black rounded-md">Copy email</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  );
}
