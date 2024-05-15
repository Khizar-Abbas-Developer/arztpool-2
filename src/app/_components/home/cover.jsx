import React from 'react'

import Style from '@/assets/css/_components/home/cover.module.css'

const Cover = () => {
  return (
    <div className={Style.cover}>
      <div>Die arztpool-Formel:</div>
      <span>» 30 | 50 | 100 «</span>
      <p className="px-5">
        In 30 Sekunden registrieren - über 50 Wochen profitieren - 100 Prozent
        Vorteile nutzen
      </p>
    </div>
  )
}

export default Cover
