import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { authFetch } from '../utils/authFetch';

interface TemperatureReading {
    id: string;
    value: number;
    unit: string;
    timestamp: string;
    location: string;
}

const TemperaturePage: React.FC = () => {
    const [temperature, setTemperature] = useState<number>(0);
    const [unit, setUnit] = useState<string>('Celsius');
    const [deviceid, setDeviceid] = useState<string>('Default Location');
    const [readings, setReadings] = useState<TemperatureReading[]>([]);

    const fetchTemperatures = async () => {
        try {


            const response = await authFetch(`${import.meta.env.VITE_BACKEND_URL}/api/temperaturereading`);
            const data = await response.json();
            setReadings(data);
        } catch (error) {
            console.error('Error fetching temperature readings:', error);
        }
    };

    const submitTemperature = async () => {
        try {
            const response = await authFetch(`${import.meta.env.VITE_BACKEND_URL}/api/temperaturereading`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    temperature,
                    deviceid,
                }),
            });

            if (response.ok) {
                alert('Temperature added successfully.');
                fetchTemperatures(); // Refresh the readings
            } else {
                alert('Failed to add temperature.');
            }
        } catch (error) {
            console.error('Error adding temperature reading:', error);
        }
    };

    useEffect(() => {
        fetchTemperatures();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Temperature Reporting
            </Typography>
            <TextField
                label="Temperature"
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="deviceid"
                value={deviceid}
                onChange={(e) => setDeviceid(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={submitTemperature} sx={{ marginTop: 2 }}>
                Submit Temperature
            </Button>

            <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
                Temperature Readings
            </Typography>
            <List>
                {readings.map((reading) => (
                    <ListItem key={reading.id}>
                        <ListItemText
                            primary={`Temperature: ${reading.temperature} ${reading.recordedAt}`}
                            secondary={`Location: ${reading.deviceId} | Time: ${new Date(
                                reading.recordedAt
                            ).toLocaleString()}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TemperaturePage;
