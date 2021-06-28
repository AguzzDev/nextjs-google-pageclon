import { Account, Icons } from "./icons"
import { Dropdown } from 'react-bootstrap';
import { Avatar, AvatarDropdown } from "../components/avatar";

export function DropdownAccount() {
    return (
        <Dropdown className="flex items-center justify-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="focus:outline-none">
                <Avatar
                    url="https://as01.epimg.net/argentina/imagenes/2021/06/19/futbol/1624067899_622097_1624068474_noticia_normal_recorte1.jpg"
                />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ height: "400px", width: "350px", marginTop: "15px" }} className="bg-white border border-gray-200 rounded-md shadow-xl">
                <div className="w-full">
                    <div className="flex flex-col items-center justify-center mt-7 border-b border-gray-200">
                        <AvatarDropdown
                            url="https://as01.epimg.net/argentina/imagenes/2021/06/19/futbol/1624067899_622097_1624068474_noticia_normal_recorte1.jpg"
                        />
                        <div className="leading-5 flex flex-col justify-center items-center mb-4">
                            <h1 className="mt-2">Name</h1>
                            <p className="text-gray-700">example@gmail.com</p>
                            <a href="https://myaccount.google.com/" target="blank_" className="py-1 pr-4 pl-4 mt-4 text-sm text-gray-700 border border-gray-300 rounded-full focus:outline-none">Administra tu Cuenta de Google</a>
                        </div>
                    </div>
                    <div className="flex flex-row border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                        <div className="flex space-x-2 ml-12 py-3 text-gray-700 items-center">
                            <svg className="w-6 h-6 fill-current text-gray-600"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                            <a href="/" className="text-sm focus:outline-none">Agregar una nueva cuenta</a>
                        </div>
                    </div>
                    <div className="flex flex-row border-b border-gray-200 p-5">
                        <a href="/" className="mx-auto text-sm pl-5 pr-5 py-2 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-100">Salir</a>
                    </div>
                    <div className="flex flex-row justify-center mt-3 space-x-4 text-gray-700">
                        <a href="https://policies.google.com/privacy?hl=es-419" target="blank_" className="cursor-pointer text-xs">Politica de Privacidad</a>
                        <a href="https://policies.google.com/terms?hl=es-419" target="blank_" className="cursor-pointer text-xs">Condiciones del Servicio</a>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export function DropdownApp() {
    return (
        <Dropdown className="flex items-center justify-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ height: "400px", width: "300px", overflow: "scroll", marginTop: "22px", marginLeft: "65px", }} className="bg-white border border-gray-200 rounded-md shadow-xl">
                <div className="w-full">
                    <div className="p-3 grid grid-cols-3 gap-2 border-b border-gray-200">
                        <Dropdown.Item >
                            <a href="https://myaccount.google.com/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                                <Account url="https://as01.epimg.net/argentina/imagenes/2021/06/19/futbol/1624067899_622097_1624068474_noticia_normal_recorte1.jpg" />
                                <h1 className="text-sm mt-1">Cuenta</h1>
                            </a>
                        </Dropdown.Item>
                        <a href="/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/_RS8nTX8HLPW-dDr374dEdQTaYn-7LI8HVVk0INaAmk7t8MYZKDssvGnep-GwPR94LJPxqq6UDnbm4tonioTpkl4Kqr6-k-670teZA=h120" />
                            <h1 className="text-sm mt-1">Busqueda</h1>
                        </a>
                        <a href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/moWtYpo1G3n-1QfF5rNSy7n2IIQs785-H9DStefngR0kWMsmnPkzMu-SKH3eUxHVddekMttIA5olrn_wo3p50z04NyRZYPHYBc2cxvE=h120" />
                            <h1 className="text-sm mt-1">Mi negocio</h1>
                        </a>
                        <a href="https://www.google.com.ar/maps" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/9NuRdiRepVI3n1txfg7Ky2wWzB3DvXkWABXeFMSn2tzDYYkv8T_RMA9R17fWi0ziUDIDTVJx0JruCzOev37c4dkK9Wrgkeyam3pM8lI=h120" />
                            <h1 className="text-sm mt-1">Maps</h1>
                        </a>
                        <a href="https://www.youtube.com/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/I95wjYii8vhFSSx-aSYdh2hPAMjgZkA9yjarSQoOd98COwOxkAVn_dulBcTcfbsa7Limy6IKX6G95ep6OB6y2yMLMiX0YEqFx3KQHQ=h120" />
                            <h1 className="text-sm mt-1">Youtube</h1>
                        </a>
                        <a href="https://play.google.com/store" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/vWJNEFxN3WY5PYAYjwZ9ycEXMCCiB8EbcFXZxfSv5xkKLw67C2J5qXJTBL9KSPldWmLpVMnucrsDBmPlrf9tMiEJpYNZNcTw_ymlxgc=h120" />
                            <h1 className="text-sm mt-1">Play</h1>
                        </a>
                        <a href="https://news.google.com/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/u2XGSr0jis3w5sLeuh8UMqGHgtdqPVPi77xYhPJdMO9C41wYUue3EKPJvwp-ovAlTzt3Ux3R4Mww2HlJ31UKre8vz1Cnno-3MxvWtA=h120" />
                            <h1 className="text-sm mt-1">Noticias</h1>
                        </a>
                        <a href="https://www.google.com/intl/es-419/gmail/about/#" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/mK6uPlO8TKCVSU8TsniV0pOUB0SSETbAPB_QUaaJ96qbBdZwaygmzf_bWRTIHmCNKgJ2hhn86KSfEAHvHN-P2EjFWAxPd77ob_2k8ew=h128" />
                            <h1 className="text-sm mt-1">Gmail</h1>
                        </a>
                        <a href="https://apps.google.com/meet/?hs=197" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/5CsRqfMEP1Rv-PPv9G4962lyEuvb4roSLJHJQWPbmCa51AmvynfoGfoKsKiS87QhX07xQMZAeLp8qoSy7CjVZkXJ1WapQiJkroCeJw=h120" />
                            <h1 className="text-sm mt-1">Meet</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fchat.google.com%2F&followup=https%3A%2F%2Fchat.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/z3dgQsXgGqfadzIUmpGI_ppolUy7H6fgqIbtW_qzLXcBww0nOby8TEE3e_fW84Qa7zeAwe339f5VLkqRD6jk7Z9sEaVh5Y_yaPG9nw=h120" />
                            <h1 className="text-sm mt-1">Chat</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Fcontacts.google.com%2F%3Fhl%3Des-419&followup=https%3A%2F%2Fcontacts.google.com%2F%3Fhl%3Des-419&hl=es-419&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/m5HIvqrNJHr2w5VXuNapBWKSx6YZTU7lIhffkIgDQU_VbpYAfkgXt2Un2ks_wzTn7vrfkyllWMLouCcOcBwfakYylBMe_9PwYm7_=h120" />
                            <h1 className="text-sm mt-1">Contactos</h1>
                        </a>
                        <a href="https://www.google.com/intl/es-419/drive/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/AGsg9hOAylBkWuFrfSgOt8psYWcr3b-vZcmIVk0ocwx7KAVSu--tg1ZIAUSL7nAbORTHI5eZaweHYVPMJu5ac8Xw7GP_WiCs1w60=h120" />
                            <h1 className="text-sm mt-1">Drive</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?service=cl&passive=1209600&osid=1&continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fr&followup=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fr&scc=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/DaaQa-Y-b3_IAhu6SBFb2vRl8PFR5iuCLwLszc16_OTlLrEFvFF9P4CS0ui-414nG9016ul3dQD1R3mHtmMx4P1bIA-zRXuPpFN4yw=h120" />
                            <h1 className="text-sm mt-1">Calendario</h1>
                        </a>
                        <a href="https://translate.google.com.ar/?hl=es-419" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/vNgpLTvnDUr6-QM8s4OuuESGDXs_brbGoPR-7vfwdxQI7M4MVFV0CC_Hil4qRDSp4P66ik85fdv09jKn89kDAJVknIbd6wkl0zGQJQ=h120" />
                            <h1 className="text-sm mt-1">Traductor</h1>
                        </a>
                        <a href="https://www.google.com/photos/about/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/RwVe2Cm1EjeDmYhdTzr179G0ovq_PCxgPzQ92PO-YxTBEFTHWh0L6Ev8FFDWRgRGrE81vwn95tyg9Ey189OO4kllhhpLAMIsGFZ-UKA=h120" />
                            <h1 className="text-sm mt-1">Fotos</h1>
                        </a>
                        <a href="https://duo.google.com/about/?usp=duo_ald" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/tWYS85wpzFKE2mcGmUj1spMgqETy8SbDrY3UFp4z2g-Y8yY2BhwmsNWHhqGyiW-N6qZd8nMB-vRDSctWy1eTKY5N8B9ethFs3czbjg=h120" />
                            <h1 className="text-sm mt-1">Duo</h1>
                        </a>
                    </div>
                    <div className="m-3 grid grid-cols-3 gap-2">
                        <a href="https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/Ac9zapU8rN332VMysmJIaTk1Nk-3IGzqCwFS-6PwDFUFpEzEBKPTGWfIFN4BXL3eHP5s1DJP2tyh8NTS8_LjvXHzpkyZC2fu58Ov=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Documentos</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2F%3Fusp%3Dsheets_alc&followup=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2F%3Fusp%3Dsheets_alc&ltmpl=sheets&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/tvQvvubDZ2r6Ou8zxkVzkIvddC1snCCq4xD4dhafjAJhHLDsEvHDEUms9RyVH_g-nI_8yTyeahZshZqwMV0NdHxD-K9v-Zbm4DF2vds=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Hojas de calculo</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fpresentation%2F%3Fusp%3Dslides_alc&followup=https%3A%2F%2Fdocs.google.com%2Fpresentation%2F%3Fusp%3Dslides_alc&ltmpl=slides&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/aD5GNhlaU2d70gmSy5ioL1dMSUZN9cHDWPLkIBLhCsJ-BgcGUm-PD6o8XExZcx1i2iZV6PH0P8v3ceg0x7Tzd_OZ5FV0nXs5mX15sgA=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Presentaciones</h1>
                        </a>
                        <a href="https://books.google.com.ar/?hl=es-419" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/nDCFKerWuvJvG26AZOPsWYFPiw3MRFDYqVJcHzQzK6AgY96TXH50bpQ1IE__BdBxxcXm8ZTaQ6OuJ4pbYF1c-ugOTfOmjhffJXEvJQ=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Libros</h1>
                        </a>
                        <a href="https://www.blogger.com/about/?bpli=1" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/JtYUq9HfkkOryxudgp34oqI8qFu9a6mmL64OXjcDX7mfEwcX_pxmTdurvxssofY4swTY2c_M1Kk5o1a863CGTiBZkxxuYXfjiNgz=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Blogger</h1>
                        </a>
                        <a href="https://hangouts.google.com/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/9Got_n_XDxEp29d_DNM9hL8pBcrHwaxjHasHmBZeRN7koFtye9m9aZb6LAnpyGbe8sKjvXUr1bAieve6M1Cf9cOl7londmukWiFWTA=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Hangouts</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Fkeep.google.com%2F&followup=https%3A%2F%2Fkeep.google.com%2F&ltmpl=keep&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/9TzWtxtT-9Vrlwa8SXTSKhfl91Ndy4hU-1uLE9-hFsVSHARAOlFEdFExVR4QCegJ-KUBTSlJm3DZY6g31sbVrUT_HfxQvX_7WgLp=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Google Keep</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?service=jamboardcore&passive=1209600&continue=https%3A%2F%2Fjamboard.google.com%2F%3Fusp%3Djam_ald&followup=https%3A%2F%2Fjamboard.google.com%2F%3Fusp%3Djam_ald&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/tWYS85wpzFKE2mcGmUj1spMgqETy8SbDrY3UFp4z2g-Y8yY2BhwmsNWHhqGyiW-N6qZd8nMB-vRDSctWy1eTKY5N8B9ethFs3czbjg=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Jamboard</h1>
                        </a>
                        <a href="https://earth.google.com/web/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/HWgUyUNqdsifoczBOT-DYy-hV_ldW-cwWkz3tvlY0eQysaY1ra4D1bkfE-0BVFUlk5wComQdca8g-fwiPcOhdMHoMjqiiNh2TD2b=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Earth</h1>
                        </a>
                        <a href="https://www.google.com.ar/save" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/tWYS85wpzFKE2mcGmUj1spMgqETy8SbDrY3UFp4z2g-Y8yY2BhwmsNWHhqGyiW-N6qZd8nMB-vRDSctWy1eTKY5N8B9ethFs3czbjg=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Colecciones</h1>
                        </a>
                        <a href="https://artsandculture.google.com/?hl=es-419" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/yfNHOIqQb-_BbTsGZle4fmncMyM2kTjYQzub_Hucf27LCQPNwJiqiOMr39an6X_yB3gCKVExXGgtYm1morm8jkXY53W8h75Z0nUepg=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Arte y cultura</h1>
                        </a>
                        <a href="https://ads.google.com/home/?subid=ww-ww-et-g-aw-a-vasquette_ads_cons_1!o2" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/mXJcrB99dv3D2R3626qv23yNzcp64hKW1n7cx78DQmybiBB-radVYvRguIs-lfQz1oYh72Oq_5Tk51U6fAqzzJb95vww5cyi79Wk0g=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Google Ads </h1>
                        </a>
                        <a href="https://podcasts.google.com/" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/vnSr97Bu2sI2_h334BHmEn1zTPrtv0hM9MLn3YxkN6JVzmir_VH62GiPIKfwtPBTOQ8xH0XNI40xfPAYbwbJEU-1jG09ovlU0f4S1Q=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Podcasts</h1>
                        </a>
                        <a href="https://www.google.com/travel/?dest_src=al" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/QsFLnA2p7QlFCy4Rk-TH0XoaWFilCOzzt8FPO58nI_FXh5wQkjWEMpBKMkJxQJMZio9t6kDMpniv3WrWH7Slxe8BrbMvklg-Ht53iw=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Viajes</h1>
                        </a>
                        <a href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2F%3Fusp%3Dforms_alc&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2F%3Fusp%3Dforms_alc&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="flex flex-col items-center hover:bg-blue-100 cursor-pointer py-3 rounded-md">
                            <Icons url="https://lh3.googleusercontent.com/p5lVJAicHuI6Ra6jtpYimNt53JZQNCcN06a-Q4fUaNVFo3cjVisZMY_UwBTg5fv2MUkrbwbfTw70N9-bbTfejp9S8rUNadIhWiqh=h120" />
                            <h1 className="text-sm mt-1 break-all line-clamp-1 text-center">Formularios</h1>
                        </a>
                    </div>
                    <div className="flex items-center justify-center mx-auto  hover:bg-blue-50 border border-gray-200 hover:border-gray-300 p-2 w-3/4 mb-5 cursor-pointer">
                        <a href="https://about.google/intl/es-419/products/" target="blank_" className="text-sm text-blue-600">Mas productos de Google</a>
                    </div>
                </div >
            </Dropdown.Menu>
        </Dropdown>
    )
}







