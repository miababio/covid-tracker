import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart: React.FC<{data: any, country: any}> = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]); // Initializes state to empty object, for global data
    // <{[index: number]: any}> <<- If you needed to specify that an array was using an umber as an index
    /**
     * The above code is the same as doing:
     *  state = {
     *      dailyData: {}
     * }
     * plus having a setter method in a class component. useState does this right out of the box for us
     */

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []); // This makes the useEffect act like componentDidMount, so it only runs once, instead of endlessly

    const LineChart = (
        dailyData?.length ? (
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }} />
        ) : <p>Loading Global Chart...</p>
    );

    const BarChart = (
        confirmed ? (
            <Bar data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}/>
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? BarChart : LineChart}
        </div>
    )
};

export default Chart;