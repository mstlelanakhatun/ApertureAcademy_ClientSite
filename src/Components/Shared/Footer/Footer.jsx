import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div data-aos-anchor-placement="top-bottom" className=" mx-auto">
                <footer className="p-4 sm:p-6 dark:bg-gray-800">
                    <div className="md:flex md:justify-between">
                        <div data-aos="fade-up" className="mb-6 md:mb-0">
                            <a className="flex items-center">
                                <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap  text-blue-600">Aperture Academy</span>
                            </a>
                        </div>
                        <div data-aos="fade-up" className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h3>
                                <ul>
                                    <li className="mb-4">
                                        <a href="#" target="_blank"
                                            className="text-gray-600 hover:underline dark:text-gray-400">Aperture Academy</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="nofollow"
                                            className="text-gray-600 hover:underline dark:text-gray-400">About Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h3>
                                <ul>
                                    <li className="mb-4">
                                        <a href="#" target="_blank"
                                            className="text-gray-600 hover:underline dark:text-gray-400">Github</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"
                                            className="text-gray-600 hover:underline dark:text-gray-400">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                                <ul>
                                    <li className="mb-4">
                                        <a href="#" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400">Privacy
                                            Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400">Terms
                                            &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div  className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">Aperture Academy™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaFacebook className="w-7 h-7" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaInstagram className="w-7 h-7" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaTwitter className="w-7 h-7" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaGithub className="w-7 h-7" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;