import { productData } from "@/app/Lib/catalog/data";
import { SellCard } from "../UI/portafolio/sellCard";
import { CartProvider } from "../Lib/catalog/carContext";
import Cart from "../UI/portafolio/car";


export default function CatalogPage(){

    return (
        <CartProvider>
            <Cart/>
            <div>
                <SellCard data={productData}/>
            </div>
        </CartProvider>
    )
}