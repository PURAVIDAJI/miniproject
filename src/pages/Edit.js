import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VolunteerStateContext } from "../App";
import VolunteerEditor from "../components/VolunteerEditor";

const Edit = () => {

    const [originData, setOriginData] =useState();

    const navigate = useNavigate();
    const {id} =useParams();

    // 리스트를 받아오기
    const volunteerList = useContext(VolunteerStateContext);
    


    useEffect(()=>{
        if(volunteerList.length>=1){
            const targetVolunteer = volunteerList.find
            ((it)=>parseInt(it.id)=== parseInt(id)
            );
            console.log(targetVolunteer);

            if(targetVolunteer){
                setOriginData(targetVolunteer);

            } else{
                navigate("/",{replace :true});
            }
        
        }

    },[id,volunteerList]);

    return (
        
        <div>
           {originData &&<VolunteerEditor isEdit={true} originData={originData}/>}
        </div>
    );
}

export default Edit;