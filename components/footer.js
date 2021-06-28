import { Dropdown } from 'react-bootstrap';

export function Footer() {
    return (
        <footer className="grid w-full bg-gray-100">
            <div className="border-b border-gray-300 px-2 py-3">
                <h1 className="ml-5 text-gray-500">Argentina</h1>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 px-2 py-3 text-gray-500 grid-flow-row-dense">
                <div className="hidden md:flex justify-center lg:justify-start space-x-10 whitespace-nowrap lg:ml-5 tracking-tight text-sm">
                    <a href="https://about.google/?utm_source=google-AR&utm_medium=referral&utm_campaign=hp-footer&fg=1" className="cursor-pointer hover:underline">Sobre Google</a>
                    <a href="https://ads.google.com/intl/es-419_ar/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="cursor-pointer hover:underline">Publicidad</a>
                    <a href="https://smallbusiness.withgoogle.com/intl/es-419_ar/help/#!/" className="cursor-pointer hover:underline">Negocios</a>
                    <a href="https://www.google.com/search/howsearchworks/?fg=1" className="cursor-pointer hover:underline">Cómo funciona la búsqueda</a>
                </div>
                <div className="hidden md:flex justify-center items-center lg:justify-end space-x-5 lg:space-x-10 whitespace-nowrap lg:mr-5 tracking-tight text-sm">
                    <a href="https://policies.google.com/privacy?hl=es-419&fg=1" className="cursor-pointer hover:underline">Privacidad</a>
                    <a href="https://policies.google.com/terms?hl=es-419&fg=1" className="cursor-pointer hover:underline">Condiciones</a>

                    <Dropdown className="">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="focus:outline-none">
                            Condiciones
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="flex flex-col space-y-7 border border-gray-400 p-5 bg-white">
                            <Dropdown.Item className="hover:underline" href="https://www.google.com/preferences">Configuración de Búsqueda</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://www.google.com/advanced_search">Búsqueda avanzada</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://myactivity.google.com/privacyadvisor/search">Tus datos en la Búsqueda</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://myactivity.google.com/product/search">Historial de Búsqueda</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://support.google.com/websearch">Buscar en la ayuda</Dropdown.Item>
                            <Dropdown.Item >Enviar comentarios</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            {/* Responsive */}
            <div className="grid md:hidden gap-4 grid-cols-1 px-2 py-3 text-gray-500 grid-flow-row-dense">
                <div className="flex md:hidden justify-center lg:justify-start space-x-10 whitespace-nowrap lg:ml-5 tracking-tight text-sm">
                    <a href="https://about.google/?utm_source=google-AR&utm_medium=referral&utm_campaign=hp-footer&fg=1" className="cursor-pointer hover:underline">Sobre Google</a>
                    <a href="https://ads.google.com/intl/es-419_ar/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="cursor-pointer hover:underline">Publicidad</a>
                    <a href="https://smallbusiness.withgoogle.com/intl/es-419_ar/help/#!/" className="cursor-pointer hover:underline">Negocios</a>
                </div>
                <div className="flex md:hidden justify-center items-center lg:justify-end space-x-5 lg:space-x-10 whitespace-nowrap lg:mr-5 tracking-tight text-sm">
                    <a href="https://www.google.com/search/howsearchworks/?fg=1" className="cursor-pointer hover:underline">Cómo funciona la búsqueda</a>
                </div>
                <div className="flex md:hidden justify-center items-center lg:justify-end space-x-5 lg:space-x-10 whitespace-nowrap lg:mr-5 tracking-tight text-sm">
                    <a href="https://policies.google.com/privacy?hl=es-419&fg=1" className="cursor-pointer hover:underline">Privacidad</a>
                    <a href="https://policies.google.com/terms?hl=es-419&fg=1" className="cursor-pointer hover:underline">Condiciones</a>
                    <Dropdown className="">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="focus:outline-none">
                            Condiciones
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="flex flex-col space-y-7 border border-gray-400 p-5 bg-white">
                            <Dropdown.Item className="hover:underline" href="https://www.google.com/preferences">Configuración de Búsqueda</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://www.google.com/advanced_search">Búsqueda avanzada</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://myactivity.google.com/privacyadvisor/search">Tus datos en la Búsqueda</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://myactivity.google.com/product/search">Historial de Búsqueda</Dropdown.Item>
                            <Dropdown.Item className="hover:underline" href="https://support.google.com/websearch">Buscar en la ayuda</Dropdown.Item>
                            <Dropdown.Item >Enviar comentarios</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </footer >
    )
}
export function FooterSearch() {
    return (
        <footer className="grid w-full bg-gray-100 ">
            <div className="">
                <div className="px-2 py-3 border-b border-gray-300 ">
                    <h1 className="text-gray-500 ml-44">Argentina</h1>
                </div>
                <div className="grid gap-4 grid-cols-1 px-2 py-3 text-gray-500">
                    <div className="flex justify-start space-x-10 whitespace-nowrap tracking-tight text-sm ml-44">
                        <a href="https://support.google.com/websearch/?visit_id=637599339199566170-2730420617&hl=es-419&rd=2#topic=3378866" className="cursor-pointer hover:text-black">Ayuda</a>
                        <a href="" className="cursor-pointer hover:text-black">Enviar comentarios</a>
                        <a href="https://policies.google.com/privacy?hl=es-419&fg=1" className="cursor-pointer hover:text-black">Privacidad</a>
                        <a href="https://policies.google.com/terms?hl=es-419&fg=1" className="cursor-pointer hover:text-black">Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}



