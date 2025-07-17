import React from 'react'
import { examTopics } from '../../../DB/db'
import { useTranslation } from 'react-i18next'

const ExamRoom = () => {
    const { t } = useTranslation()
  return (
    <section id='examRoom' className='whiteGlow'>
        <h2 className="exRoomHeader">{t("examroom.header")}</h2>
        <div className="examGrid">
            {examTopics.map((item)=> (
                <div className="examCard" key={item.id}>
                <div className="exFoto">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="exName">
                    <p>{item.name}</p>
                </div>
                <div className="exButton">
                    <button>{t("examroom.startExam")}</button>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default ExamRoom