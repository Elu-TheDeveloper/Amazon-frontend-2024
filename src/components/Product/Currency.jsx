import React from 'react'
import numeral from 'numeral'

const Currency=({amount})=>{
    const fAmount=numeral(amount).format('$0,0,00')
    return <div>{fAmount}</div>
}
export default Currency;