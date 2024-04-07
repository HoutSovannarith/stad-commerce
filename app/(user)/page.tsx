'use client'
import HeroComponent from "@/components/herosection/HeroComponent";
import CardProduct from "@/components/card/CardProduct";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Feature} from "@/components/feature/Feature";
import StatComponent from "@/components/stat/StatComponent";

export default function Home() {
    const [products, setProducts] = useState([])
    const router = useRouter();
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`)
            .then(res => res.json()).then(data => {setProducts(data.results)}).catch(err => console.log(err))
    },[])
    return (
        <div>
        <div>
            <HeroComponent/>
        </div>
        <div>
            <h1 className="text-3xl font-semibold my-4">Latest Products</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {products.map((product: any, index) => (
                    <CardProduct onClick={() => router.push(`/products/${product.id}`)}
                                 key={index}
                                 image={product.image}
                                 name={product.name}
                                 price={product.price}
                                 seller={product.seller}
                                 category={product.category}
                    />))}
            </div>
            <Feature/>
            <StatComponent/>
        </div>
        </div>
    );
}
