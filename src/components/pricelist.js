import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./pricelist.scss"

const PriceList = ({ currency }) => {
    const [data, setData] = useState();

    useEffect(() => {
        if (!data) {
            axios.get(`https://api.coincap.io/v2/assets/${currency}`).then(res => setData(res.data.data));
        }
    }, [data]);

    const checkDirection = (change) => {
        if (change >= 0) return "up";
        return "down";
    }

    const getArrow = (change) => {
        if (change > 0) return <>&uarr;</>;
        return <>&darr;</>;
    }

    if (!data) return <></>;

    const { changePercent24Hr: change, symbol, name, priceUsd: price } = data;
    return (
        <tr className={checkDirection(change)}>
            <td>{symbol}</td>
            <td className="hide-on-mobile">{name}</td>
            <td>{`$${parseFloat(price).toFixed(4)}`}</td>
            <td className="hide-on-mobile">
                {getArrow(change)}
                {parseFloat(change).toFixed(2)}
            </td>
        </tr>
    )
}

export default PriceList;