import { fetchAllProduct } from "@/actions";
import ProductCards from "../components/product_card/index";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession = await auth();
  // console.log(getSession);
  /*{
  user: {
    name: 'Anand kumar',
    email: 'kumaranandstudent@gmail.com',
    image: 'https://avatars.githubusercontent.com/u/121438242?v=4'
  },
  expires: '2024-09-21T04:27:56.740Z'
} */
  if (!getSession?.user) redirect("/unauthPage");

  const getAllproduct = await fetchAllProduct();
  // console.log("getAllproduct",getAllproduct);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-lime-500">
        Shopping cart
      </h1>
      <div>
        {getAllproduct && getAllproduct.data && getAllproduct.data.length > 0
          ? getAllproduct.data.map((productItem) => (
              <div key={productItem.id}>
                <ProductCards item={productItem} />
              </div>
            ))
          : "product is not found"}
      </div>
    </div>
  );
}
