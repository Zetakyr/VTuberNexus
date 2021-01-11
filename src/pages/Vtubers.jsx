import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { FilterButton } from '../components/FilterButton';
import { map } from 'lodash'
import { Link } from 'react-router-dom';

import '../css/app.css'

export const Vtubers = (props) => {
    const id = props.match.params.id;

    const [vTuber, setVTuber] = useState();

    useEffect(async () => {
        const res = await axios.get(`http://localhost:8080/getVtuber`);
        setVTuber(res.data)
    }, [id])


    const [modelPNGFilter, setModelPNGFilter] = useState();
    const [model2DFilter, setModel2DFilter] = useState();
    const [model3DFilter, setModel3DFilter] = useState();


    const filterVtuber = (val) => {

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
        return <Link className="noLine marginTen" to={`/profile/${val.name}`} key={val.name}>
            <Card
                name={`${val?.name}`}
                cardArt={`${val?.cardArt}`}
            >
            </Card>

        </Link>
    }

    return (
        <div className="flex">
            <div id="filters">
                <div id="filtersText">Filters</div>
                <div className="filterClass" style={{ color: "white", textShadow: "-3px 2px 6px rgb(6, 43, 110)" }}>Model</div>
                <div>
                    <FilterButton setFilter={() => setModelPNGFilter(!modelPNGFilter)} filter={modelPNGFilter} filterType="PNG" />
                    <FilterButton setFilter={() => setModel2DFilter(!model2DFilter)} filter={model2DFilter} filterType="2D" />
                    <FilterButton setFilter={() => setModel3DFilter(!model3DFilter)} filter={model3DFilter} filterType="3D" />
                </div>

            </div>
            <div id="vtuberListDisplay">
                {map(vTuber, filterVtuber)}
            </div>
            <div id="adSpace">
                {/* This is a saved area for a future implementation. */}
            </div>
        </div >
    )
}
