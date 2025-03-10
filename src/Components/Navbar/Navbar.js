import { Fragment, useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/General/selection.json";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLaptopCode, faNewspaper, faComment, faRocket, faChalkboard, faBriefcase } from "@fortawesome/free-solid-svg-icons";

// pages
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Company/Contact';
import AboutUs from '../../Pages/Company/AboutUs';
import NotFound from '../Errors/NotFound';
import Projects from '../../Pages/Home/Projects';
import Courses from '../../Pages/Home/Courses';
import Posts from '../../Pages/Posts/Posts';
import Post from '../../Pages/Posts/Post';
import { faMedapps } from '@fortawesome/free-brands-svg-icons';
import Portfolio from '../../Pages/Home/Portfolio';
import PortfolioPage from '../../Pages/Home/PortfolioPage';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <BrowserRouter>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link reloadDocument to="/" className="-m-1.5 p-1.5">
              <p className='font-Quicksand text-2xl text-cyan-950'>Ahmad<span className='text-violet-500'>Mohamad</span></p>
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
          <Popover.Group className="hidden lg:flex lg:gap-x-4">


            <HashLink dir='rtl' to="/Courses" smooth className="text-lg py-2 px-3 rounded font-semibold leading-6 text-gray-900 transition duration-200 hover:bg-gray-100">
              الكورسات <FontAwesomeIcon icon={faChalkboard} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </HashLink>
            <HashLink dir='rtl' to="/Portfolio" smooth className="text-lg py-2 px-3 rounded font-semibold leading-6 text-gray-900 transition duration-200 hover:bg-gray-100">
              نماذج من اعمالي <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </HashLink>
            <Link dir="rtl" to="/Projects" smooth className="text-lg py-2 px-3 rounded font-semibold leading-6 text-gray-900 transition duration-200 hover:bg-gray-100">
              المشاريع <FontAwesomeIcon icon={faMedapps} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </Link>
            <Link dir="rtl" to="/Contact" smooth className="text-lg py-2 px-3 rounded font-semibold leading-6 text-gray-900 transition duration-200 hover:bg-gray-100">
              تواصل معي <FontAwesomeIcon icon={faComment} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </Link>
            <HashLink dir='rtl' to="/" smooth className="text-lg py-2 px-3 rounded font-semibold leading-6 text-gray-900 transition duration-200 hover:bg-gray-100">
              القائمة الرئيسية <FontAwesomeIcon icon={faHome} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </HashLink>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a dir="rtl" href="https://www.instagram.com/devops2x/" target="_blank" className="focus:outline-none text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:bg-gradient-to-br hover:shadow-md transition font-medium rounded-full text-base px-3 py-2.5 mb-2">
              تواصل الآن <Icon iconSet={iconSet} icon="T4" size={35} aria-hidden="true" />
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link reloadDocument to="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <p className='font-Quicksand text-2xl text-cyan-950'>Ahmad<span className='text-violet-500'>Mohamad</span></p>
              </Link>
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
                <div className="space-y-2 py-6" dir='rtl'>
                  <HashLink to="/" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    القائمة الرئيسية <FontAwesomeIcon icon={faHome} className="h-5 w-5 text-violet-500" aria-hidden="true" />
                  </HashLink>
                  <HashLink to="/Portfolio" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    نماذج من أعمالي <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5 text-violet-500" aria-hidden="true" />
                  </HashLink>
                  <HashLink to="/Courses" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    الكورسات <FontAwesomeIcon icon={faLaptopCode} className="h-5 w-5 text-violet-500" aria-hidden="true" />
                  </HashLink>
                  <Link to="/Projects" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    المشاريع <FontAwesomeIcon icon={faMedapps} className="h-5 w-5 text-violet-500" aria-hidden="true" />
                  </Link>
                  <Link to="/Contact" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    تواصل معي <FontAwesomeIcon icon={faComment} className="h-5 w-5 text-violet-500" aria-hidden="true" />
                  </Link>
                </div>
                <div className="py-6 flex justify-center items-center">
                  <a
                    href="https://www.instagram.com/devops2x/"
                    target="_blank"
                    className="bg-blue-600 font-rubik -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
                    onClick={closeMobileMenu}
                  >
                    <Icon iconSet={iconSet} icon="T4" size={35} aria-hidden="true" /> تواصل الآن 
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<Contact />} path='/Contact'></Route>
        <Route element={<AboutUs />} path='/About-Us'></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route element={<Projects />} path='/Projects'></Route>
        <Route element={<Courses />} path='/Courses'></Route>
        <Route element={<Portfolio />} path='/Portfolio'></Route>
        <Route path="/Portfolio/:id" element={<PortfolioPage />} />

      </Routes>
    </BrowserRouter>
  );
}
