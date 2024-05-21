import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import Chair from "./Chair"
import Desk from "./Desk"
import Projector from "./Projector"
import ProjectorScreen from "./ProjectorScreen"
import Screen from "./Screen"

const WorkingArea = ({ nodes, materials }) => {
    // Get state and setter from the store
    const isDeskFocused = useMainStore.useIsDeskFocused()
    return (
        <>
            <Select enabled={isDeskFocused}>
                <Desk nodes={nodes} materials={materials} />
                <Chair nodes={nodes} materials={materials} />
                <Chair nodes={nodes} materials={materials} position={[0, 0, 1]}/>
                <Chair nodes={nodes} materials={materials} position={[0, 0, 2]}/>
                <Screen nodes={nodes} materials={materials} />
                
            </Select>

            <Projector nodes={nodes} materials={materials} />
            <ProjectorScreen nodes={nodes} materials={materials} />
        </>
    )
}

export default WorkingArea