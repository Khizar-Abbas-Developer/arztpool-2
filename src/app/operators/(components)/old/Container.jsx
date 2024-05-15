import React, { useState } from 'react';
import "./container.css";
import { IoMdCloseCircle } from "react-icons/io";
import { usePathname } from 'next/navigation';

const Container = () => {
  const pathname = usePathname();
  const headingTexts = {
    "/operators/operator_services": "Dienstverwaltung",
    "/operators/operator_allinclusive_services": "Rundum-Sorglos Dienste",
    "/operators/operator_tier_services": "Dienste nach Dringlichkeit",
    "/operators/operator_servicesubmissions": "Dienst Submissions",
    "/operators/operator_users": "Nutzerverwaltung",
    "/operators/operator_serviceareas": "Dienstgebiete",
    "/operators/operator_accounting": "Buchhaltung",
    "/operators/operator_reporting": "Reporting",
    "/operators/operator_single_userId/": "Nutzer",
    "/operators/operator_single_service/": "Dienst",
    "/operators/operator_single_service_area/": "Dienstgebiet"
  };

  let headingText = "";

  for (const path in headingTexts) {
    if (pathname.startsWith(path)) {
      headingText = headingTexts[path];
      break;
    }
  }
  return (
    <>
      <div className="second-container">
        <div className="heading-sm">{headingText}</div>
        <div className="btn-container">
          <div className="btn-first">
            <IoMdCloseCircle />
          </div>
          <span className="btn-second">TAB SCHLIESSEN</span>
        </div>
      </div>
    </>
  )
}
export default Container;





























// let headingText = "";
// if (pathname === "/operators/operator_services") { // Add additional conditions as needed
//   headingText = "Dienstverwaltung";
// } else if (pathname === "/operators/operator_allinclusive_services") {
//   headingText = "Rundum-Sorglos Dienste";
// } else if (pathname === "/operators/operator_tier_services") {
//   headingText = "Dienste nach Dringlichkeit"
// } else if (pathname === "/operators/operator_servicesubmissions") {
//   headingText = "Dienst Submissions"
// } else if (pathname === "/operators/operator_users") {
//   headingText = "Nutzerverwaltung"
// } else if (pathname === "/operators/operator_serviceareas") {
//   headingText = "Dienstgebiete"
// } else if (pathname === "/operators/operator_accounting") {
//   headingText = "Buchhaltung"
// } else if (pathname === "/operators/operator_reporting") {
//   headingText = "Reporting";
// } else if (pathname.startsWith("/operators/operator_single_userId/")) {
//   headingText = "Nutzer";
// } else if (pathname.startsWith("/operators/operator_single_service/")) {
//   headingText = "Dienst";
// } else if (pathname.startsWith("/operators/operator_single_service_area/")) {
//   headingText = "Dienstgebiet";
// }