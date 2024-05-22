import { useEffect, useState } from "react"

export const useButtonTitle = (value) => {
    const [ title, setTitle ] = useState('')
    
    const namedTitle = (value) => {
        if(value === '1') {
            setTitle('Забронировать помещение')
        } else if (value === '2' || value === '3' || value === '4') {
            setTitle(`Забронировать ${value} помещения`)
        } else if (value > 4) {
            setTitle(`Забронировать ${value} помещений`)
        } else {
            setTitle(`Забронировать помещение`)
        }
    }

    useEffect(() => {
        namedTitle(value)
    },[value])

    return title
}