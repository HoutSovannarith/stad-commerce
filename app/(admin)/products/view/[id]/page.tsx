import Head from 'next/head'

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
    const data = await res.json();
    console.log(data.results);
    return data;
};


export default async function ViewDetailPage(props: Props) {

    let data = await getData(props.params.id);

    return (
        <div>
            <Head>
                <title>Product Detail</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center">
                        <img src={data.image} alt="Product" className="max-w-full" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                        <div className="text-gray-600 mb-4">Category: {data.category}</div>
                        <div className="text-gray-600 mb-4">Seller: {data.seller}</div>
                        <p className="text-lg mb-4">Description: {data.desc}</p>
                        <div className="text-2xl font-bold mb-4">${data.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
