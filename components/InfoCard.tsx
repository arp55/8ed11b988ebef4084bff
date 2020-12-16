import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles/global'

type Props={
    asteroid:any
}

export default function InfoCard({ asteroid }:Props) {
    return (
        <View style={Styles.infoCard}>
            <Text style={Styles.heading}>Name</Text>
            <Text style={Styles.value}>{asteroid.name}</Text>
            <Text style={Styles.heading}>Url</Text>
            <Text style={Styles.value}>{asteroid.nasa_jpl_url}</Text>
            <Text style={Styles.heading}>Is Hazardous</Text>
            <Text style={Styles.value}>{asteroid.is_potentially_hazardous_asteroid?"YES":"NO"}</Text>
        </View>
    )
}
