import { Fragment, useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/General/selection.json";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLaptopCode, faNewspaper, faComment, faRocket } from "@fortawesome/free-solid-svg-icons";

// pages
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Company/Contact';
import AboutUs from '../../Pages/Company/AboutUs';
import NotFound from '../Errors/NotFound';
import Projects from '../../Pages/Home/Projects';
import Courses from '../../Pages/Home/Courses';
import Posts from '../../Pages/Posts/Posts';
import Post from '../../Pages/Posts/Post';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <BrowserRouter>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link reloadDocument to="/" className="-m-1.5 p-1.5">
              <p className='font-Quicksand text-3xl text-cyan-950'>Ahmad<span className='text-violet-500'>Mohamad</span></p>
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
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <HashLink dir='rtl' to="/" smooth className="text-1x3 font-semibold leading-6 text-gray-900">
              القائمة الرئيسية <FontAwesomeIcon icon={faHome} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </HashLink>
            <HashLink dir='rtl' to="/Posts" smooth className="text-1x3 font-semibold leading-6 text-gray-900">
              مقالات <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </HashLink>
            <HashLink dir='rtl' to="/Courses" smooth className="text-1x3 font-semibold leading-6 text-gray-900">
              الكورسات <FontAwesomeIcon icon={faLaptopCode} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </HashLink>
            <Link dir="rtl" to="/Projects" smooth className="text-1x3 font-semibold leading-6 text-gray-900">
              المشاريع <FontAwesomeIcon icon={faRocket} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </Link>
            <Link dir="rtl" to="/Contact" smooth className="text-1x3 font-semibold leading-6 text-gray-900">
              تواصل معي <FontAwesomeIcon icon={faComment} className="h-5 w-5 text-violet-500" aria-hidden="true" />
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a dir="rtl" href="https://www.instagram.com/ahmadmsoftware/" target="_blank" className="focus:outline-none text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2">
              تواصل الآن <Icon iconSet={iconSet} icon="T4" size={35} aria-hidden="true" />
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link reloadDocument to="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <p className='font-Quicksand text-3xl text-yellow-500'>Ahmad<span className='text-violet-500'>Mohamad</span></p>
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
                <div className="space-y-2 py-6">
                  <HashLink to="/" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    القائمة الرئيسية
                  </HashLink>
                  <HashLink to="/Posts" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    مقالات
                  </HashLink>
                  <HashLink to="/Courses" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    الكورسات
                  </HashLink>
                  <Link to="/Projects" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    المشاريع
                  </Link>
                  <Link to="/Contact" className="font-rubik -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMobileMenu}>
                    تواصل معي
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="https://www.instagram.com/ahmadmsoftware/"
                    target="_blank"
                    className="font-rubik -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    تواصل الآن
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
        <Route element={<Posts />} path='/Posts'></Route>
        <Route element={<Post />} path='/Post'></Route>
      </Routes>
    </BrowserRouter>
  );
}
