import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData, getCategories } from "../../../redux/actions";



const Category = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    const categoryState = useSelector((store) => {
        console.log(store)
    })
    return (
        <div>
            
        </div>
    )
}

export default Category;