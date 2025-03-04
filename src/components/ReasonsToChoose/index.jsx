
import { useState } from 'react'
import { reasons } from './reasons-data.js'

export default function ReasonsToChoose(){
    const [reasonTitle, setReasonTitle] = useState(reasons[0].title)
    const [reasonDescription, setReasonDescription] = useState(reasons[0].description)

    function handleChangeReason(r){
        setReasonTitle(r.title)
        setReasonDescription(r.description)
    }

    return (
        <div className='reasons-container'>
            <div className="reason">
                <h3 className="block-title">{reasonTitle}</h3>

                <p className="text description">{reasonDescription}</p>
            </div>

            <div className="buttons-container">
                {reasons.map((reason, i) => {
                    return (
                        <button key={i} className='btn reason' onClick={() => {handleChangeReason(reason)}}>{reason.title}</button>
                    )
                })}
            </div>
        </div>
    )
}