import { useState } from 'react'
import { Dialog} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import Image from 'next/image'
import Modal from '@/app/_components/home/modals/registrationType';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function TempHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // modal code

    const [isModalOneVisible, setIsModalOneVisible] = useState(false)
    const toggleModalFunction = () => {
        if (isModalOneVisible === false) {
            setIsModalOneVisible(!isModalOneVisible)
        }
    }
    const toggleModal = () => {
        '{'
        setIsModalOneVisible(!isModalOneVisible)
    }

    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href={'/'}>
                            <Image src={'/arztpool.svg'} width={232} height={232} className='w-auto h-auto' alt="logo" priority />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                        <Link href={"/operators/operator_services"} className="  leading-6 text-gray-900">
                            Operator
                        </Link>
                        <Link href={"/representative/dashboard"} className="  leading-6 text-gray-900">
                            Representative
                        </Link>
                        <Link href={"/customer/dashboard"} className="  leading-6 text-gray-900">
                            Customer
                        </Link>
                        <button onClick={toggleModalFunction} className="leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Operator
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Representative
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Customer
                                    </a>
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            {isModalOneVisible ? <Modal clickFunctionProp={toggleModal} /> : ''}
        </>
    )
}
