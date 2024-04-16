import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Grid, Card, CardContent, TextField, Button, Typography, Divider } from '@mui/material';
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
        <Container maxWidth="sm">
            <TextH2 iconUrl='/icon/FoodOrange.svg' name='Food' />
            <Card sx={{ borderRadius: '16px' }}>
                <CardContent style={{ textAlign: 'left', margin:'10px', padding:'10px' }}>
                    <div className="seccion">
                        <Typography variant="h6" >Raw Material</Typography>
                        <Divider />
                        <Grid container spacing={2} >
                            <Grid item xs={5} >
                                <Typography margin={2} >Rice</Typography>
                            </Grid>
                            <Grid item xs={5} marginTop={1}>
                                <TextField type="number" placeholder="Kilos" sx={{ width: '100%' }} />
                            </Grid>
                            <Grid item xs={5}>
                                <Typography margin={2}>Legumes</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField type="number" placeholder="Kilos" sx={{ width: '100%' }} />
                            </Grid>
                            <Grid item xs={5}>
                                <Typography margin={2}>Flour</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField type="number" placeholder="Kilos" sx={{ width: '100%' }} />
                            </Grid>
                            <Grid item xs={5}>
                                <Typography margin={2} marginTop={1}>Oil</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField type="number" placeholder="Liters" sx={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="seccion">
                        <Typography variant="h6">Cooked food</Typography>
                        <Divider />
                        <Grid container spacing={2}>
                            <Grid item xs={5} marginTop={1}>
                                <Typography margin={2}>Cooked food</Typography>
                            </Grid>
                            <Grid item xs={5} marginTop={1}>
                                <TextField type="number" placeholder="Pieces" sx={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="seccion">
                        <Typography variant="h6">Bakery Items</Typography>
                        <Divider />
                        <Grid container spacing={2}>
                            <Grid item xs={5} marginTop={1}>
                                <Typography margin={2}>Bakery items</Typography>
                            </Grid>
                            <Grid item xs={5} marginTop={1}>
                                <TextField type="number" placeholder="Kilos" sx={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="seccion">
                        <Typography variant="h6">Fruits & Vegetables</Typography>
                        <Divider />
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Typography margin={3}>Fruits & Vegetables</Typography>
                            </Grid>
                            <Grid item xs={5} marginTop={1}>
                                <TextField type="number" placeholder="Kilos" sx={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
                <Grid item xs={12}  style={{ margin: '4'}}>
                    <Link to="/food">
                        <StyledButton variant="contained" type="submit">
                            Submit
                        </StyledButton>
                    </Link>
                </Grid>
            </Card>
        </Container>
    );
};