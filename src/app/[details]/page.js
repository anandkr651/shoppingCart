import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import AddToCart from "@/components/addToCart";
import { redirect } from "next/navigation";

async function ProductDetailsPage({ params }) {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauthPage");

  const getproductDetail = await fetchProductDetails(params.details);
  // console.log(getproductDetail);

  return (
    <div className="flex items-center justify-center gap-10 mx-10 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="rounded-lg border-2 bg-card text-card-foreground p-2 ml-6 my-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <img src={getproductDetail.thumbnail} />
        <hr className="border-slate-500 border my-2" />
        <div className="flex flex-wrap gap-5 justify-center mx-auto">
          {getproductDetail &&
          getproductDetail.images &&
          getproductDetail.images.length > 0
            ? getproductDetail.images.map((imageItem, index) => (
                <div key={index}>
                  <img
                    src={imageItem}
                    className="w-24 cursor-pointer border-2 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      <div>
        <h3 className="font-semibold  text-3xl my-2">
          {getproductDetail.brand}
        </h3>
        <h1 className="font-bold text-7xl ">{getproductDetail.title}</h1>
        <h3 className="font-medium text-5xl my-2">
          {getproductDetail.category}
        </h3>
        <h3 className="font-medium text-4xl">{getproductDetail.price}</h3>
        <AddToCart currentProduct={getproductDetail} />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
