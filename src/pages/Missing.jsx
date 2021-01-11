import React from 'react';
import { Header } from '../components/Header';


export const Missing = () => {
    return (
        <div className="center">
            <Header subText="404 not found" subTextStyle={{ color: "red", fontSize: "40px" }} />
        </div>
    )
};