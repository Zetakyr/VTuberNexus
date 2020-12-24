import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { map } from 'lodash'
import '../css/app.css'

export const Vtubers = (props) => {
    const id = props.match.params.id;

    const [vTuber, setVTuber] = useState();

    useEffect(async () => {
        const res = await axios.get(`http://localhost:8080/getVTubers`);
        console.log(res.data)
        setVTuber(res.data)
    }, [id])


    const [modelPNGFilter, setModelPNGFilter] = useState();
    const [model2DFilter, setModel2DFilter] = useState();
    const [model3DFilter, setModel3DFilter] = useState();


    const filterVtuber = (val, key) => {
        console.log(val);
        console.log(key);
        if (modelPNGFilter) {
            if (!val?.model?.png) {
                return null;
            }
        }
        if (model2DFilter) {
            if (!val?.model?.model2d) {
                return null;
            }
        }
        if (model3DFilter) {
            if (!val?.model?.model3d) {
                return null;
            }
        }
        return <a className="noLine" href={`/profile/${key}`} key={key}>
            <Card
                name={`${val?.name}`}
                cardArt={`${val?.cardArt}`}
            >
            </Card>

        </a>
    }

    return (
        <div className="flex">
            <div id="filters">
                Filters

                <div>
                    <div className="" style={{ backgroundColor: modelPNGFilter ? "GREEN" : "RED" }} onClick={() => setModelPNGFilter(!modelPNGFilter)}>png</div>
                    <div style={{ backgroundColor: model2DFilter ? "GREEN" : "RED" }} onClick={() => setModel2DFilter(!model2DFilter)}>2d</div>
                    <div style={{ backgroundColor: model3DFilter ? "GREEN" : "RED" }} onClick={() => setModel3DFilter(!model3DFilter)}>3d</div>
                </div>

            </div>
            <div id="vtuberListDisplay">
                {/* {VtubersList?.map((val, index) => { console.log(val, index) })} */}
                {map(vTuber?.vTubers, filterVtuber)}
            </div>
            <div id="adSpace"></div>
        </div >
    )
}
