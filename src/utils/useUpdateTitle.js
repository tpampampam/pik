import { useEffect, useState } from "react"

export const useUpdateTitle = () => {
    const [title, setTitle] = useState()

    const currentDate = () => {
        const date = new Date()
        const hours = date.getHours()
        if (hours >= 0 && hours < 6) {
            setTitle('Доброй ночи')
        } else if (hours >= 6 && hours < 12) {
            setTitle('Доброе утро')
        } else if (hours >= 12 && hours < 18) {
            setTitle('Добрый день')
        } else if (hours >= 18 && hours < 24) {
            setTitle('Добрый вечер')
        }
    }

    useEffect(() => {
        currentDate()

        const timeInterval = setInterval(currentDate, 60000)
        return () => clearInterval(timeInterval)

    },[])

    return title
}
