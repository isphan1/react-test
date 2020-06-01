import {BUY_ICECREAM} from './iceTypes'

export const buyIceCream = (number=1) =>{
    return {
        type:BUY_ICECREAM,
        payload:number
    }
}