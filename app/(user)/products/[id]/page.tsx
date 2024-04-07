import Head from 'next/head';
import { Metadata, ResolvingMetadata } from "next";
import {BASE_URL} from "@/lib/constants";

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (id: string) => {
    const res = await fetch(`${BASE_URL}/api/products/${id}`);
    const data = await res.json();
    console.log(data.results);
    return data;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;

    // fetch data
    const product = await fetch(`${BASE_URL}/api/products/${id}`).then((res) => res.json());
    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: product.image,
        },
    };
}



export default async function ProductDetailPage(props: Props) {

    let data = await getData(props.params.id);

    return (
        <div>
            <Head>
                <title>Product Detail</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-center">
                        <img src={data.image ||
                            "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
                        } alt="Product" className="h-[500px] w-[500px] object-cover overflow-hidden" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                            <div className="text-gray-600 mb-4">Category: {data.category}</div>
                            <div className="text-gray-600 mb-4">Seller: {data.seller}</div>
                            <p className="text-lg mb-4">Description: {data.desc}</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold mb-4">${data.price}</div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
