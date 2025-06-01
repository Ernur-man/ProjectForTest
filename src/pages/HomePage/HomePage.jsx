import Inform from "../../components/Inform"
import Subscribe from "../../components/Subscribe"
import FifthBlock from "./blocks/FifthBlock"
import FirstBlock from "./blocks/FirstBlock"
import FourthBlock from "./blocks/FourthBlock"

import SecondBlock from "./blocks/SecondBlock"

function HomePage(){
    return (
        <>
            <FirstBlock/>
            <SecondBlock/>
            <Inform value={"left"}/>
            <Inform value={"right"}/>
            <Inform value={"left"}/>
            <FourthBlock/>
            <FifthBlock/>
            <Subscribe/>
        </>
    )
}

export default HomePage

