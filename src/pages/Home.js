
import React, { useContext, useEffect, useState } from 'react';
import MyCarousel from '../components/MyCarousel';
import MyHeader from '../components/MyHeader';
import { VolunteerStateContext } from '../App';
import VolunteerList from '../components/VolunterrList';

const Home = () => {

    const volunteerList = useContext(VolunteerStateContext);
    
    
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(volunteerList);


    }, [volunteerList])

    return (
        <div>

            <MyCarousel />
            <VolunteerList VolunteerList={data} />
        </div>
    )
};

export default Home;