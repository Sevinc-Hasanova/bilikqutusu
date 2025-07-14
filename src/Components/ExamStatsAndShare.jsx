import React from 'react'
import { FaSlideshare } from "react-icons/fa";

const ExamStatsAndShare = () => {
  return (
    <div className='examStatsAndShare'>
    <div className="examStats">
              <h2>İmtahan Statistikaları</h2>
  <ul>
    <li>📅 Bugün imtahan verənlərin sayı: <strong>124</strong></li>
    <li>🏆 Ən yüksək nəticə: <strong>96%</strong></li>
    <li>📊 Bu həftə ümumi imtahan sayı: <strong>200</strong></li>
    <li>🔥 Ən yüksək nəticə: <strong>JavaScript</strong></li>
    <li>🚀 Bugünkü ümumi uğur göstəricisi: <strong>845</strong></li>
  </ul>
    </div>

  <div className="share whiteGlow">
    <div className="icon"><FaSlideshare/></div>
    <button className="shareBtn">Nəticəni paylaş</button>
  </div>
    </div>
  )
}

export default ExamStatsAndShare