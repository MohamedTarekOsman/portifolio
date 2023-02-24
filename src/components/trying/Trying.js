import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add2y, addy, dely } from '../../redux/Actions/ActionTypes';
import "./Trying.css"
export default function Trying() {
    const x1=useSelector(state => state.x1);
    const dispatch1=useDispatch()


    const Addyear=() =>{
        dispatch1({
            type:addy,
        })
    }
    const Deleteyear=()=>{
        dispatch1({
            type: dely,
        });
    }
    const Add2year=()=>{
        dispatch1({
            type: add2y,
        });
    }
    return (
      <div>
        <h2>{x1}</h2>
        <button onClick={Addyear}>AddY</button>
        <button onClick={Deleteyear}>DelY</button>
        <button onClick={Add2year}>Add2Y</button>
      </div>
    );
}
