import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
type CategoryType = {
    name: string,
    icon: string
}
type ProductPostType = {
    category: CategoryType;
    name: string,
    desc: string,
    image: string,
    price: number,
    quantity: number
}

const initialValues = {
    categoryName: "",
    categoryIcon: "",
    name: "",
    desc: "",
    image: "",
    price: 0,
    quantity: 0,
    file: null
}

const FILE_SIZE = 1024 * 1024 * 5; // 5MB
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']

// const productPost = = {
//     category:{
//         name: initialValues.categoryName,
//         icon: initialValues.categoryIcon
//     },
//     name: initialValues.name,
//     desc: initialValues.desc,
//     image: initialValues.image,
//     price: initialValues.price,
//     quantity: initialValues.quantity
// }

const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required("Category Name is required"),
    categoryIcon: Yup.string().required("Category Icon is required"),
    name: Yup.string().required("Product Name is required"),
    desc: Yup.string().nullable(),
    image: Yup.string().required("Product Image is required"),
    price: Yup.number().required("Product Price is required"),
    quantity: Yup.number().required("Product Quantity is required"),
    file: Yup.mixed().test("fileSize", "File is too large",
        (value:any) => {
        if(!value){
           return true
        }
        return value.size <= FILE_SIZE;
    
    }).test("fileFormat", "Unsupported Format",(value:any) => {
        if(!value){
            return true;
        }
        return SUPPORTED_FORMATS.includes(value.type)
    })
});

export default function CreateProduct() {
    return (
        <main>
            Create Product Page
        </main>
    )
}