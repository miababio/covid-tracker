import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

/**
 * Retrieves all global data
 */
export const fetchData = async(country?: any) => {
    try {
        let changeableUrl = url;

        if(country) {
            changeableUrl = `${url}/countries/${country}`;
        }
        // destructuring the data, and then the properties on the data (data.deaths, etc)
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

/**
 * Gets the data for each day
 */
export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData: any) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`); // add props later
        return countries.map((country: any) => country.name); // add props later (basically making types for this api at this point...)
    } catch (error) {
        console.log(error);
    }
}