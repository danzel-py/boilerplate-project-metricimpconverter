let input = 'L'
let result;
    let regex = /[a-z].*/
    let inputUpper = input.toLowerCase()
    let unit = inputUpper.match(regex)[0]

    switch(unit){
      case 'gal':
        result = unit
        break
      case 'l':
        result = unit
        break
      case 'mi':
        result = unit
        break
      case 'km':
        result = unit
        break
      case 'lbs':
        result = unit
        break
      case 'kg':
        result = unit
        break
      default:
        result = 'err'
        break
    }

    console.log(result)