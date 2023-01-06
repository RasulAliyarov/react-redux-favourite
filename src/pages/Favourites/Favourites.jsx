import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../../redux/favouriteSlice/favouriteSlice';

import "./Favourite.css"
function Favourites() {
    let favourite = useSelector((store) => store.favourite.favData)
    let dispatch = useDispatch()

    console.log(favourite)
    return (
        <>
            <div className='container'>
                <ul className='favouriteList'>
                    {
                        favourite.map(value => {
                            return <li>{value.id} {value.companyName}</li>
                        })
                    }
                    <button onClick={() => {
                        dispatch(deleteData(favourite.slice(favourite.length)))
                    }}>Clear favourite list</button>
                </ul>
            </div>
        </>
    )
}

export default Favourites