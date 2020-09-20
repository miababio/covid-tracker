import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker: React.FC<{handleCountryChange: any}> = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]); // This will only run/change when setFetchedCountries changes

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(evt) => handleCountryChange(evt.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};

export default CountryPicker;