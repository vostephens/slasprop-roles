import React from 'react';

import { Box, Typography, IconButton } from '@mui/material';
import Footer from '../components/Footer';
import sampleImage from '../assets/land-view.png';
import PropertyCard from '../components/PropertyCard';
import RaiseTaxQueryDialog from '../modals/RaiseTaxQueryDialog';
import { ButtonViewContext } from '../App';

const PropertyTaxQueries = () => {

    const properties=[
        {
            id:1,
            type:'Flat',
            regNo:'7654890321',
            propTaxID:'HFK8679011',
            desc: "Rare opportunity in highly desirable Springbrook. Popular Scott Felder built floorplan. Showcasing easy living, 4 spacious bedrooms, 3 FULL baths, bright open multiple living spaces, expansive back patio and surrounded by a tree covered paradise. Super convenient location. Easy walk to community park that has a sports field, playground, picnic area, BBQ grills, and a running/walking track. Numerous nearby parks, hike/bike trails and great access to IH35, 130 and 45. All this plus outstanding schools, shopping, dining and major employment including Tech Ridge, Dell, Samsung, Tesla, Apple, Amazon and The Domain. Truly a rare gem.",
            area: 2345,
            zip:462920,
            address:'1245 Texas Road Texas',
            currentOwner:'Indraniel Sen',
            registrar:'Andraniel Senna',
            beds:4,
            baths:3,
            price: "$319,000",
            location:"17917 Holderness Ln, Pflugerville, TX 78660",
            status:"active",
            taxDetails:{
                year:[2022, 2021, 2020, 2019],
                propertyTax: ['$9246', '$9426', '$9246', '$9246'],
                taxAssessment: ['$481,824', '$481,824', '$481,824','$481,824'],
                status:['pending']
            },
            OwnerDetails:{
                owner:['Indrani Sen', 'Arindam Dutta', 'Chijrant Debnath'],
                totalYears: ['2015-2017','2017-2019','2019-Till Date'],
                initials:['IS','AD', 'CD']
            }
        },
        {
            id:2,
            type:'Villa',
            regNo:'7654822321',
            propTaxID:'JFK4679011',
            desc: "Rare opportunity in highly desirable Springbrook. Popular Scott Felder built floorplan. Showcasing easy living, 4 spacious bedrooms, 3 FULL baths, bright open multiple living spaces, expansive back patio and surrounded by a tree covered paradise. Super convenient location. Easy walk to community park that has a sports field, playground, picnic area, BBQ grills, and a running/walking track. Numerous nearby parks, hike/bike trails and great access to IH35, 130 and 45. All this plus outstanding schools, shopping, dining and major employment including Tech Ridge, Dell, Samsung, Tesla, Apple, Amazon and The Domain. Truly a rare gem.",
            area: 2345,
            zip:462920,
            address:'1245 Texas Road Texas',
            currentOwner:'Indraniel Sen',
            registrar:'Andraniel Senna',
            beds:4,
            baths:3,
            price: "$319,000",
            location:"17917 Holderness Ln, Pflugerville, TX 78660",
            status:"active",
            taxDetails:{
                year:[2022, 2021, 2020, 2019],
                propertyTax: ['$9246', '$9426', '$9246', '$9246'],
                taxAssessment: ['$481,824', '$481,824', '$481,824','$481,824'],
                status:['pending']
            },
            OwnerDetails:{
                owner:['Indrani Sen', 'Arindam Dutta', 'Chijrant Debnath'],
                totalYears: ['2015-2017','2017-2019','2019-Till Date'],
                initials:['IS','AD', 'CD']
            }
        },
        {
            id:3,
            type:'Bungalow',
            regNo:'7651890311',
            propTaxID:'2FK8679011',
            desc: "Rare opportunity in highly desirable Springbrook. Popular Scott Felder built floorplan. Showcasing easy living, 4 spacious bedrooms, 3 FULL baths, bright open multiple living spaces, expansive back patio and surrounded by a tree covered paradise. Super convenient location. Easy walk to community park that has a sports field, playground, picnic area, BBQ grills, and a running/walking track. Numerous nearby parks, hike/bike trails and great access to IH35, 130 and 45. All this plus outstanding schools, shopping, dining and major employment including Tech Ridge, Dell, Samsung, Tesla, Apple, Amazon and The Domain. Truly a rare gem.",
            area: 2345,
            zip:462920,
            address:'1245 Texas Road Texas',
            currentOwner:'Indraniel Sen',
            registrar:'Andraniel Senna',
            beds:4,
            baths:3,
            price: "$319,000",
            location:"17917 Holderness Ln, Pflugerville, TX 78660",
            status:"active",
            taxDetails:{
                year:[2022, 2021, 2020, 2019],
                propertyTax: ['$9246', '$9426', '$9246', '$9246'],
                taxAssessment: ['$481,824', '$481,824', '$481,824','$481,824'],
                status:['pending']
            },
            OwnerDetails:{
                owner:['Indrani Sen', 'Arindam Dutta', 'Chijrant Debnath'],
                totalYears: ['2015-2017','2017-2019','2019-Till Date'],
                initials:['IS','AD', 'CD']
            }
        },

    ];

    const myButtonOption = React.useContext(ButtonViewContext);

    myButtonOption.setButtonOption(true);


    return (
        <>
            <Box sx={{ minHeight: 500 }}>
                <Box
                    sx={{
                        marginLeft: '25%',
                        mt: 4,
                        borderBottom: '1px solid lightgray',
                        pb: 2,
                        display: 'flex'
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            Property Tax Queries
                    </Typography>

                    <RaiseTaxQueryDialog/>


                </Box>

                <Box sx={{display:'flex', marginLeft: '25%',mt:1, p:1}}>
                    <Box sx={{display:'flex', flexDirection:'column', boxShadow: '10px 0px 10px rgba(108, 122, 137, 0.5)'}}>
                        <Box sx={{display: 'flex', mt:1, p:2}}>
                            <Box sx={{display:'flex', flexDirection:'column', mr:4}}>
                                <Typography sx={{color:'grey', fontSize:14}}>
                                    Your Assigned Zone
                                </Typography>

                                <Typography sx={{fontWeight:'bold', fontSize:16}}>
                                    North
                                </Typography>
                            </Box>

                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Typography sx={{color:'grey', fontSize:14}}>
                                    Number Of Properties
                                </Typography>

                                <Typography sx={{fontWeight:'bold', fontSize:16}}>
                                    {properties.length}
                                </Typography>
                            </Box>

                        </Box>

                        <Box component="img"
                            src={sampleImage}
                            sx={{
                                height: 500,
                                width: 400,
                            }}
                        />

                    </Box>

                    <Box sx={{display:'flex', justifyContent:'space-between', ml:2, mt:2,flexDirection:'column', overflow:'auto', mb:3}}>
                        
                        {
                            properties.map((property) => (
                                <PropertyCard key={property.id} property={property} >
                                </PropertyCard>
                                ))
                        }
                    </Box>
                    
                </Box>
                
            </Box>

            <Footer />
        </>
    );
};

export default PropertyTaxQueries;
