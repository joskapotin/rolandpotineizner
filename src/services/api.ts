import {API} from "../constants/constants"

export interface ImageInterface {
        id: number,
        title: string,
        year: string,
        height: number,
        width: number,
        filename: string,
        order: number,
        visible: boolean,
}

const getImages = async () => {
        const response = await fetch(API.URL)
        const data = await response.json()
        return data as Promise<ImageInterface[]>
        
}

export default getImages