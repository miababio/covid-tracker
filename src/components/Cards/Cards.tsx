import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CardComponent from './Card/Card';
import { ApiProps } from '../../interfaces';

// Figure out how to use this later

const Cards: React.FC<{data: ApiProps}> = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed || !recovered || !deaths || !lastUpdate) {
        return <p>Loading...</p>;
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent 
                    styling={styles.infected}
                    cardTitle='Infected'
                    countUpValue={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardDescription='Number of active cases of COVID-19'
                />
                <CardComponent 
                    styling={styles.recovered}
                    cardTitle='Recovered'
                    countUpValue={recovered.value}
                    lastUpdate={lastUpdate}
                    cardDescription='Number of recoveries from COVID-19'
                />
                <CardComponent 
                    styling={styles.deaths}
                    cardTitle='Deaths'
                    countUpValue={deaths.value}
                    lastUpdate={lastUpdate}
                    cardDescription='Number of deaths caused by COVID-19'
                />
            </Grid>
        </div>
    )
};

export default Cards;