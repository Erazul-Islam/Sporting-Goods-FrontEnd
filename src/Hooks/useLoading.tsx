import { useEffect, useState } from "react"


const useLoading = (initialLoading: boolean = true, delay: number = 3000) => {
    const [loading, setLoading] = useState(initialLoading)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (!loading) {
            timer = setTimeout(() => {
                setLoading(false)
            }, delay)
        }
        return () => clearTimeout(timer)
    }, [loading, delay])
    return [loading, setLoading]
}

export default useLoading