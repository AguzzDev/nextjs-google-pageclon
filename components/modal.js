import Dropzone from 'react-dropzone'

export function ModalImages({ setModalOpen }) {

    const handleCloseModal = () => {
        setModalOpen(false)
        console.log("cerrando con los botones")
    }

    return (
        <div className="w-full h-full">
            <div className="flex flex-col px-5 pt-5 border-b border-gray-200 shadow-md">
                <div className="flex justify-between text-xl tracking-tight font-medium">
                    <h1>Seleccionar foto de perfil</h1>
                    <span className="cursor-pointer" onClick={handleCloseModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
                <div className="flex flex-row space-x-10 mt-2 ">
                    <div className="py-4 cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-100 hover:border-blue-500">
                        <h1 className="tracking-tighter focus:font-bold ">Subir fotos</h1>
                    </div>
                    <div className="py-4 cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-100 hover:border-blue-500">
                        <h1 className="tracking-tighter focus:font-bold ">Tus fotos</h1>
                    </div>
                </div>
            </div>
            <Dropzone multiple={false} accept="image/*" onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="p-28 cursor-pointer border-b border-gray-200">
                        <div className="w-full flex flex-col justify-center items-center">
                            <input {...getInputProps()} />
                            <svg style={{ fill: "gray" }} enable-background="new 0 0 512 512" viewBox="0 0 512 512" height="100" width="100"><g><path d="m341.82 450.856c-2.892 2.948-7.626 3.033-10.574.142-2.976-2.891-3.032-7.625-.141-10.574l20.834-21.486c1.418-1.446 3.345-2.268 5.386-2.268h90.199l-160.753-153.243v222.635l20.665-21.26c2.863-2.976 7.597-3.033 10.573-.17 2.948 2.892 3.033 7.625.142 10.602l-33.109 34.101c-1.389 1.616-3.458 2.665-5.755 2.665-4.138 0-7.512-3.345-7.512-7.483v-155.483h-225.98c-4.14 0-7.513-3.345-7.513-7.483v-39.828-294.211c0-4.138 3.373-7.512 7.513-7.512h334.037c4.139 0 7.485 3.374 7.485 7.512v331.091l83.679 79.768c1.673 1.389 2.722 3.459 2.722 5.783 0 4.139-3.345 7.512-7.484 7.512h-105.79zm-175.268-385.063c12.699 0 24.236 5.131 32.542 13.465 8.334 8.334 13.492 19.843 13.492 32.571 0 12.699-5.158 24.208-13.492 32.542-8.306 8.335-19.843 13.493-32.542 13.493-12.728 0-24.236-5.159-32.57-13.493-8.307-8.333-13.465-19.842-13.465-32.542 0-12.728 5.158-24.237 13.465-32.571 8.333-8.334 19.842-13.465 32.57-13.465zm21.94 24.095c-5.613-5.641-13.38-9.099-21.94-9.099-8.561 0-16.327 3.459-21.941 9.099-5.641 5.613-9.099 13.352-9.099 21.941 0 8.561 3.458 16.327 9.099 21.94 5.613 5.613 13.38 9.099 21.941 9.099s16.327-3.486 21.94-9.099c5.612-5.613 9.099-13.379 9.099-21.94 0-8.59-3.486-16.328-9.099-21.941zm-13.408 167.756 35.178-38.92c2.75-3.062 7.484-3.317 10.546-.539 3.061 2.778 3.288 7.483.511 10.545l-36.171 40.054 58.961 65.255h27.666v-88.074c0-1.871.709-3.713 2.098-5.159 2.835-3.004 7.568-3.118 10.573-.283l87.875 83.793v-56.75l-93.034-102.984-35.178 38.949c-2.777 3.061-7.483 3.288-10.545.51-3.062-2.75-3.288-7.483-.538-10.545l40.733-45.044c2.977-3.317 8.164-3.26 11.112.028l87.449 96.805v-230.289h-319.042v267.282l15.336-16.952c2.777-3.062 7.512-3.316 10.545-.539 3.061 2.778 3.316 7.483.538 10.545l-26.419 29.226v29.481h170.704c-32.911-36.398-65.793-72.795-98.676-109.192l-22.819 25.286c-2.777 3.061-7.512 3.288-10.572.51-3.033-2.75-3.289-7.483-.511-10.545l28.375-31.409c2.977-3.288 8.164-3.231 11.112.057z" /></g></svg>
                            <p className="text-2xl text-gray-500 font-medium">Arrastra una foto de perfil aqui.</p>
                            <p className="text-1xl text-gray-500 font-medium">— o —</p>
                            <div className="py-1 px-2 text-xs font-medium bg-gray-100 border border-blue-400 focus:border-white mt-5">Seleccionar una foto de la computadora</div >
                        </div>
                    </div>
                )}
            </Dropzone>
            <div className="flex ml-5 mt-5 space-x-5">
                <button className="py-1 px-3 rounded-sm text-xs font-medium text-white bg-blue-300 border border-blue-400 cursor-auto focus:outline-none">Establecer como foto de perfil</button>
                <button onClick={handleCloseModal} className="py-1 px-3 rounded-sm text-xs font-medium text-gray-800 border border-gray-300 bg-gray-100 cursor-auto focus:outline-none">Cancelar</button>
                <div className="flex items-center">
                    <h1 className="text-xs font-small text-gray-500">Tu foto de perfil se muestra a los usuarios de todos los productos de Google.</h1>
                    <a className="text-sm font-small text-blue-700 underline ml-2" href="https://support.google.com/accounts/answer/6304920" target="blank_">Más información</a>
                </div>
            </div>
        </div>
    )
}