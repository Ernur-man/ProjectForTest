import './Fourth.less'
import { useState } from 'react'

const FourthBlock = () =>{
    const [clr, setClr] = useState(null)

    function activeBtn(num){
        setClr(num)
    }

    return(
        <main className="fourth">
            <div className="container">
                <div onClick={()=> activeBtn(1)} style={{
                    background: clr === 1 ? 'red' : 'gray'
                }}>
                    <h2>First</h2>
                </div>
                <div onClick={()=> activeBtn(2)} style={{
                    background: clr === 2 ? 'red' : 'gray'
                }}>
                    <h2>Second</h2>
                </div>
            </div>
        </main>
    )
}

export default FourthBlock
