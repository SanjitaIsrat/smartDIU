import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacher } from "../../redux/actions/studentAction";
import {  useParams } from "react-router-dom";


//import Image from "../../assets/Image.jpg"



const SingleTeacher = () => {
    const dispatch = useDispatch()
    const {id} = useParams()


    const {teacher} = useSelector(state=>state.getStudentTeacher)
     console.log(teacher)
    useEffect(()=>{
        dispatch(getTeacher(id))
    },[id])
  return (
    <div className="px-12 pt-20">
      {teacher && teacher.name}



      

    </div>

  );
}

export default SingleTeacher;


