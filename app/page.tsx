

import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between ">
      
    <div className="flex h-[400px] bg-gray-300 w-full  py-10  px-20 items-center ">
      <div className="w-1/2 h-full flex items-center">
        <div>
          <h1 className="text-[30px] text-black ">My tittle here</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi similique reprehenderit fugit cupiditate nisi fuga, doloribus error est accusamus molestias iure vel illum facilis minima quidem recusandae deleniti asperiores fugiat.</p>
          <Button className="w-32 bg-black text-white mt-5">Catalog</Button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Image className="" src="/imgs/cubo.png" alt="Ejemplo" width={400}  />
      </div>
    </div>

    </main>
  );
}