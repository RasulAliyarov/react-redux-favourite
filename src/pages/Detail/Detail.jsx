import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { idData } from '../../redux/dataSlice/dataSlice';
import "./Detail.css"
function Detail() {
  const { id } = useParams()

  let value = useSelector((store) => store.data.value)
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/customers/${id}`).then((resp) => {
      dispatch(idData(resp.data))
    })
  }, [])

  console.log(value, "dada")
  return (
    <>
      <ul className='container'>
        <li>ID: <span>{value?.id}</span></li>
        <li>CompanyName: <span>{value?.companyName}</span></li>
        <li>ContactName: <span>{value?.contactName}</span></li>
        <li>ContactTitle: <span>{value?.contactTitle}</span></li>
        <li>City: <span> {value?.address?.city}</span> </li>
        <li>Street: <span> {value?.address?.street}</span></li>
        <li>Phone: <span>{value?.address?.phone}</span></li>

      </ul>

    </>
  )
}

export default Detail