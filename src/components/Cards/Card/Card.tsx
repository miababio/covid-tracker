import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { CardProps } from '../../../interfaces';
import styles from './Card.module.css';

const CardComponent: React.FC<CardProps> = ({ styling, cardTitle, countUpValue, lastUpdate, cardDescription }) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styling)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={countUpValue} duration={2.5} separator=',' />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{cardDescription}</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent;