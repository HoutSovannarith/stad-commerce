

import UpdateLayout from "@/components/updates/UpdateLayout";
import {BASE_URL} from "@/lib/constants";
 type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
};

const getData = async (id:number) => {
    const res = await fetch(`${BASE_URL}/api/products/${id}/`)
    const data1 = await res.json();
    return data1;
}

const UpdatePage = async (props:PropsParams) =>{
    console.log(props)
    console.log(props.params.id)
    const data = await getData(props.params.id)
    console.log(data)
    return(
        <main>
            <UpdateLayout
                fileProduct={null}
                category={data.category}
                price={data.price}
                desc={data.desc}
                name={data.name}
                quantity={data.quantity}
                image={data.image}
                id={data.id}
                seller={data.seller} />
        </main>
    )
}
export default UpdatePage;