import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { FilterButton } from '../components/FilterButton';
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
                <div id="filtersText">Filters</div>
                <div className="filterClass">Model</div>
                <div>
                    <FilterButton setFilter={() => setModelPNGFilter(!modelPNGFilter)} filter={modelPNGFilter} filterType="PNG" />
                    <FilterButton setFilter={() => setModel2DFilter(!model2DFilter)} filter={model2DFilter} filterType="2D" />
                    <FilterButton setFilter={() => setModel3DFilter(!model3DFilter)} filter={model3DFilter} filterType="3D" />
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
