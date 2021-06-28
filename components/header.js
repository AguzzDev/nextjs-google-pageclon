import Link from "next/link"
import { useRef } from "react"
import { Avatar } from "../components/avatar"
import { useRouter } from "next/router"
import { DropdownApp, DropdownAccount } from '../components/dropdown'
import Modal from "react-modal"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


export const Header = () => {
    const searchInputRef = useRef(null)
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)
    }
    return (
        <>
            <header className="w-full py-5 pl-6 pr-6">
                <div className="flex flex-row items-center">
                    <Link href="/" >
                        <div title="Ir a la Página principal de Google"><img className="h-8 mr-10 object-cover cursor-pointer" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img></div>
                    </Link>
                    <div className="flex flex-row w-5/12 rounded-full hover:shadow-md border border-gray-200 p-3">
                        <input
                            className="w-full pl-2 focus:outline-none"
                            type="search"
                            ref={searchInputRef}
                        ></input>
                        <div className="flex flex-row space-x-4 mr-2 items-center">
                            <Tippy
                                content={<div>Búsqueda por voz</div>}
                                placement={"bottom"}
                            >
                                <svg class="goxjub" class="h-6 w-6 cursor-pointer focus:outline-none" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                            </Tippy>
                        </div>
                    </div>
                    <div className="flex flex-row flex-grow justify-end items-center">
                        <Tippy
                            content={<div>Google Apps</div>}
                            placement={"bottom"}
                            arrow={"none"}
                            delay={"400"}
                        >
                            <div className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                                <DropdownApp />
                            </div>
                        </Tippy>
                        <Tippy
                            content={<div className="flex flex-col"><h1>Cuenta de Google</h1><h1 className="text-gray-400">Name</h1><h1 className="text-gray-400">Example@gmail.com</h1></div>}
                            placement={"bottom"}
                            arrow={"none"}
                            delay={"400"}
                        >
                            <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                                <DropdownAccount />
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className="flex space-x-5 pl-36 mt-5 text-sm text-gray-700 border-b border-gray-200 tracking-tight">
                    <a href="/" className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <span className="fill-current text-gray-700 " style={{ height: "16px", width: "16px" }}><svg class="DCxYpf" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6z"></path></svg></span>
                        <h1>Todos</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <span className="fill-current text-gray-700" style={{ height: "16px", width: "16px" }}><svg focusable="false" viewBox="0 0 24 24"><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path></svg></span>
                        <h1>Imágenes</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <span className="fill-current text-gray-700" style={{ height: "16px", width: "16px" }}><svg focusable="false" viewBox="0 0 16 16"><path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path></svg></span>
                        <h1>Maps</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <span className="fill-current text-gray-700" style={{ height: "16px", width: "16px" }}><svg focusable="false" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path></svg></span>
                        <h1>Videos</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <span className="fill-current text-gray-700" style={{ height: "16px", width: "16px" }}><svg focusable="false" viewBox="0 0 24 24"><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path></svg></span>
                        <h1>Noticias</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <span className="fill-current text-gray-700" style={{ height: "16px", width: "16px" }}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span>
                        <h1>Mas</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <h1>Preferencias</h1>
                    </a>
                    <a className="flex flex-row items-center space-x-1 cursor-pointer border-b-4 border-transparent focus:border-blue-600 pb-2 focus:text-blue-600">
                        <h1>Herramientas</h1>
                    </a>
                </div>
            </header>

        </>
    )
}
