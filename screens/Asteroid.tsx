import React from 'react'
import { useSelector } from 'react-redux'
import InfoCard from '../components/InfoCard'
import { RootState } from '../redux/reducers/rootReducer'

export default function Asteroid() {
    const {asteroid} = useSelector((state:RootState) => state.asteroid)
    return (
        <InfoCard asteroid={asteroid} />
    )
}
