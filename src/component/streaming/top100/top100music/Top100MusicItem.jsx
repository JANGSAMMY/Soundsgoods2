// Top100MusicItem.jsx
import React, { useEffect, useState } from 'react';

const Top100MusicItem = ({ item, rank, isSelected }) => {
    const [minute, setMinute] = useState(0);

    useEffect(() => {
        setMinute(Math.floor(Math.random() * 60));
    }, []);

    return (
        <tr className={isSelected ? 'selected' : ''}>
            <td className="col-rank-td">{rank}</td>
            <td className="col-album-td">
                <img src={item.image} alt="" />
            </td>
            <td className="col-title-td">
                {item.title}
                <p>{item.album}</p>
            </td>
            <td className="col-artist-td">
                <p>{item.artist}</p>
            </td>
            <td className="col-time-td">3:{minute < 10 ? `0${minute}` : minute}</td>
            <td className="col-release-td">{item.release}</td>
            <td className="col-play-td icon">
                <img src="/images/streaming/icon_play.png" alt="" />
            </td>
            <td className="col-like-td icon">
                <img src="/images/streaming/icon_heart.png" alt="" />
            </td>
            <td className="col-fav-td icon">
                <img src="/images/streaming/icon_star.png" alt="" />
            </td>
        </tr>
    );
};

export default Top100MusicItem;
