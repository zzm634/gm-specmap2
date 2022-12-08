
import { useState } from "react";
import CarFrame from "./CarFrame";

const CAR_IMG_PATH = "./images/car/";


function SpecMapper(props: {}) {
    const [metal, setMetal] = useState(0);
    const [roughness, setRoughness] = useState(0);
    const [clearcoat, setClearcoat] = useState(0);
    const [color, setColor] = useState("#242fb3");

    return <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        <div style={{
            width: "800px",
            height: "450px",
            border: "4px solid black",
        }}>
            <CarFrame
                clearcoat={clearcoat / 100}
                metal={metal / 100}
                roughness={roughness / 100}
                color={color}
                imgPath={CAR_IMG_PATH} />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px"
        }}>
            <label htmlFor="input-color">Color:</label>
            <input id="input-color" type="color" value={color} onChange={(ev) => setColor(ev.target.value)} />
            <label htmlFor="input-metal">Metallic:</label>
            <input type="range" id="input-metal" value={metal} min={0} max={100} onChange={(ev) => setMetal(parseInt(ev.target.value))} />
            <label htmlFor="input-rough">Roughness:</label>
            <input type="range" id="input-rough" value={roughness} min={0} max={100} onChange={(ev) => setRoughness(parseInt(ev.target.value))} />
            <label htmlFor="input-clear">Clearcoat:</label>
            <input type="range" id="input-clear" value={clearcoat} min={0} max={100} onChange={(ev) => setClearcoat(parseInt(ev.target.value))} />
        </div>
    </div>

}

export default SpecMapper;