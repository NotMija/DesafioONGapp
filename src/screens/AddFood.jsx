import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { TextH2 } from "../components/Text/TextH2";

const Container = styled('div')({
    height: '100vh',
    width: '100vh',
    background: '#E4EBF7',
});

const FormContainer = styled('div')({
    display: 'flex',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '8px',
    background: '#E4EBF7',
    justifyContent: 'center',
    alignItems: 'center',
});

const StyledButton = styled(Button)({
    display: 'inline-flex',
    padding: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#3D4C81',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
});

export const AddFood = () => {
    const [formValues, setFormValues] = useState({
        rice: '',
        dal: '',
        rajm: '',
        fruitsAndVegetables: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (!isNaN(value) || value === '') {
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);

        try {
            const foodId = await addFoodToDatabase(formValues);
            console.log("Food added with ID: ", foodId);
            setFormValues({
                rice: '',
                dal: '',
                rajm: '',
                fruitsAndVegetables: ''
            });
        } catch (error) {
            console.error("Failed to add food: ", error);
        }
    };

    const addFoodToDatabase = async (foodData) => {
        try {
            const foodRef = await addDoc(collection(db, "food"), foodData);
            console.log("Food document added with ID: ", foodRef.id);
            return foodRef.id;
        } catch (error) {
            console.error("Error adding food document: ", error);
            throw new Error("Failed to add food document");
        }
    };

    return (
        <Container>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#E4EBF7' }}>
                <TextH2 iconUrl='src/images/icon/FoodOrange.svg' name='Add Food' />
                <div>
                    <FormContainer>
                        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="rice"
                                        name="rice"
                                        label="Rice"
                                        type="number"
                                        value={formValues.rice}
                                        onChange={handleInputChange}
                                        inputProps={{ pattern: '[0-9]*' }}
                                        sx={{ background: '#fff' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="dal"
                                        name="dal"
                                        label="Dal"
                                        type="number"
                                        value={formValues.dal}
                                        onChange={handleInputChange}
                                        inputProps={{ pattern: '[0-9]*' }}
                                        sx={{ background: '#fff' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="rajm"
                                        name="rajm"
                                        label="Rajm"
                                        type="number"
                                        value={formValues.rajm}
                                        onChange={handleInputChange}
                                        inputProps={{ pattern: '[0-9]*' }}
                                        sx={{ background: '#fff' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="fruitsAndVegetables"
                                        name="fruitsAndVegetables"
                                        label="Fruits & Vegetables"
                                        type="number"
                                        value={formValues.fruitsAndVegetables}
                                        onChange={handleInputChange}
                                        inputProps={{ pattern: '[0-9]*' }}
                                        sx={{ background: '#fff' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Link to="/food">
                                        <StyledButton variant="contained" type="submit">
                                            Submit
                                        </StyledButton>
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </FormContainer>
                </div>
            </div>
        </Container>
    );
};
