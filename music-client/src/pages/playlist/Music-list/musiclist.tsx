import React from 'react';

import './music-list.css';
export default function Musiclist() {
    return (
        <div>
            <h3 className='song-interest'>Songs you may interest</h3>
            <table className='table'>
                <tr className='th-headers'>
                    <td className='td-1'>Index</td>
                    <td className='td-2'>Title</td>
                    <td className='td-2'>Release Date</td>
                    <td className='td-1'>Action</td>
                </tr>
                <tr className='th'>
                    <td className='td-1-bold'>1</td>
                    <td className='td-2'>Mocking Bird</td>
                    <td className='td-2'>1989-1-2</td>
                    <td className='td-1'><i className="fa-solid fa-plus"></i></td>
                </tr>
                <tr className='th'>
                    <td className='td-1-bold'>2</td>
                    <td className='td-2'>Smooth Criminal</td>
                    <td className='td-2'>1999-12-12</td>
                    <td className='td-1'><i className="fa-solid fa-plus"></i></td>
                </tr>
                <tr className='th'>
                    <td className='td-1-bold'>3</td>
                    <td className='td-2'>Ganghum Style</td>
                    <td className='td-2'>200-1-02</td>
                    <td className='td-1'><i className="fa-solid fa-plus"></i></td>
                </tr>
                <tr className='th'>
                    <td className='td-1-bold'>4</td>
                    <td className='td-2'>See you soon</td>
                    <td className='td-2'>2020-12-01</td>
                    <td className='td-1'><i className="fa-solid fa-plus"></i></td>
                </tr>
                <tr className='th'>
                    <td className='td-1-bold'>5</td>
                    <td className='td-2'>Shape of you</td>
                    <td className='td-2'>2015-12-01</td>
                    <td className='td-1'><i className="fa-solid fa-plus"></i></td>

                </tr>
            </table>
        </div>
    );
}
