import React from 'react';
import { Card } from '../components/Card';
import '../css/app.css'

export const Vtubers = (props) => {
    return (
        <div class="flex">
            <div id="filters">
                Filters
            </div>
            <div>
                <a href="/Valliese">
                    <Card
                        name="Valliese"

                    />
                </a>
                <Card
                    name="Sister"

                />
            </div>
        </div>
    )
}
