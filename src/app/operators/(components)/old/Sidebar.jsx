import React from 'react'
import './Sidebar.css'
import { FaUserDoctor } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import { FiMap } from 'react-icons/fi'
import { FaMoneyBill } from 'react-icons/fa'
import { FaGlasses } from 'react-icons/fa'
import { MdMedicalServices } from "react-icons/md";
import { BiUserVoice } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import Link from 'next/link'

const Sidebar = () => {
  const navLinks = [
    { id: '1', icon: <FaUserDoctor />, name: 'Dienste', href: '/operators/operator_services' },
    { id: '2', icon: <RiServiceFill />, name: 'Rundum Sorglos Dienste', href: '/operators/operator_allinclusive_services', },
    { id: '3', icon: <BiUserVoice />, name: 'Dienste nach Dringlichkeit', href: '/operators//operator_tier_services', },
    { id: '4', icon: <MdMedicalServices />, name: 'Dienst Submissions', href: '/operators/operator_servicesubmissions', },
    { id: '5', icon: <FaUsers />, name: 'Nutzer', href: '/operators/operator_users' },
    { id: '6', icon: <FiMap />, name: 'Dienstgebiete', href: '/operators/operator_serviceareas' },
    { id: '7', icon: <FaMoneyBill />, name: 'Buchhaltung', href: '/operators/operator_accounting' },
    { id: '8', icon: <FaGlasses />, name: 'Reporting', href: '/operators/operator_reporting' },
  ]
  return (
    <>
      <div className="sidebar-main-container">
        {navLinks.map((link, i) => {
          return (
            <>
              <Link key={i} href={link.href} className='navigation_link'>
                <div className="sidebar-container" key={link.id}>
                  <div className="mid-container">
                    <div className="mid-first-div">{link.icon}</div>
                    <div className="mid-second-div hm-link-name">{link.name}</div>
                  </div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}
export default Sidebar;