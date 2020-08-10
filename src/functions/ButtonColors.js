import isNumber from './isNumber'

export default function ButtonColors(value, obj){
    const Red = "#FF0000"
    const Green = "#32CD32"

    if(!isNumber(value) && value !== 'C')
    {
        return({btnStyle:{...obj.btnStyle,color: Green}})
    }
    else if(value === 'C')
    {
        return({btnStyle:{...obj.btnStyle,color: Red}})
    }
    if (value === '=')
    {
        return({btnStyle:{...obj.btnStyle,backgroundColor: '#006400', width:189}})
    }
    else if(value === '0')
    {
        return({btnStyle:{...obj.btnStyle, width:97}})
    }
}