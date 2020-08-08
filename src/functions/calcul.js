import isNumber from './isNumber'

function final(operator, first, second) {
    
    if (operator === '+')
      {
        var tmp = parseFloat(parseFloat(first) + parseFloat(second));
      }
      else if(operator === '/')
      {
        tmp =parseFloat(first) /parseFloat(second);
      }
      else if (operator === '%')
      {
        tmp =parseFloat(first) %parseFloat(second);
      }
      else if (operator === '-')
      {
        tmp =parseFloat(first) -parseFloat(second);
      }
      else if (operator === 'x')
      {
        tmp =parseFloat(first) *parseFloat(second);
      }
    return ({result: tmp,firstSelect: null, operator: '='});
}

function hasComma(string){
    var array = string.split('')
    var found =array.find(element => element === '.')
    if (found === undefined)
        return false;
    else
        return true;
}
export default function calcul(obj, state){
    if(obj === 'C')
    {
        return ({
            result: null,
            firstSelect: null,
            operator: null,
        });
    }
    if (isNumber(obj))
    {
        if(state.result === 0 || state.result === null)
            return ({result: obj});
        else
            return ({result: state.result + obj});
    }
    else if(obj === '=')
    {
        if(state.firstSelect === null)
            return;  
        var finals = final(state.operator, parseFloat(state.firstSelect), state.result);
        state.operator= null;
        return finals;
    }
    else
    {
        if(obj === '()' || obj === '=')
        return;
        if(obj === ',')
        {
            obj = '.'
            if(hasComma(state.result))
            return;
            return ({result: state.result+ obj});
        }
        return({operator: obj,firstSelect: state.result, result: 0});
    }

}