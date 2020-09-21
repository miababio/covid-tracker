interface APIProps {
    confirmed?: {
        value: number,
        detail: string
    };
    recovered?: {
        value: number,
        detail: string
    };
    deaths?: {
        value: number,
        detail: string
    }
    lastUpdate?: string;
    countries?: string;
    countryDetail?: {
        example: string,
        pattern: string
    };
    dailySummary?: string;
    dailyTimeSeries?: {
        example: string,
        pattern: string
    }
    image?: string;
    source?: string;
};

export default APIProps;