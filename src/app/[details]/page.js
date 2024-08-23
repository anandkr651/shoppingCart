import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import AddToCart from "@/components/addToCart";
import Image from "next/image";
import { redirect } from "next/navigation";

async function ProductDetailsPage({ params }) {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauthPage");

  const getproductDetail = await fetchProductDetails(params.details);
  // console.log(getproductDetail);
  /*{
  id: 1,
  title: 'Essence Mascara Lash Princess',
  description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  category: 'beauty',
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: [ 'beauty', 'mascara' ],
  brand: 'Essence',
  sku: 'RCH45Q1A',
  weight: 2,
  dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
  warrantyInformation: '1 month warranty',
  shippingInformation: 'Ships in 1 month',
  availabilityStatus: 'Low Stock',
  reviews: [
    {
      rating: 2,
      comment: 'Very unhappy with my purchase!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'John Doe',
      reviewerEmail: 'john.doe@x.dummyjson.com'
    },
    {
      rating: 2,
      comment: 'Not as described!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'Nolan Gonzalez',
      reviewerEmail: 'nolan.gonzalez@x.dummyjson.com'
    },
    {
      rating: 5,
      comment: 'Very satisfied!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'Scarlett Wright',
      reviewerEmail: 'scarlett.wright@x.dummyjson.com'
    }
  ],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 24,
  meta: {
    createdAt: '2024-05-23T08:56:21.618Z',
    updatedAt: '2024-05-23T08:56:21.618Z',
    barcode: '9164035109868',
    qrCode: 'https://assets.dummyjson.com/public/qr-code.png'
  },
  images: [
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
  ],
  thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
} */

  return (
    <div className="md:flex items-center justify-center gap-10 m-10 pt-6  rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="rounded-lg border-2 bg-card text-card-foreground p-4 m-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        {/* <img src={getproductDetail.thumbnail} /> */}
        <Image
          src={getproductDetail.thumbnail}
          alt="thumbnail-image"
          width={300}
          height={50}
          className="mx-auto"
        />

        <hr className="border-slate-500 border my-2" />
          <div className="flex flex-wrap gap-5 justify-center">
            {getproductDetail &&
            getproductDetail.images &&
            getproductDetail.images.length > 0
              ? getproductDetail.images.map((imageItem, index) => (
                  <div key={index}>
                    {/* <img
                    src={imageItem}
                    className="w-24 cursor-pointer border-2 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                  /> */}

                    {/* when we can write the Image tag of next js then we can add the "hostname" and "protocol" */}
                    <Image
                      src={imageItem}
                      alt="similar product"
                      className="w-24 cursor-pointer border-2 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                      width={40}
                      height={40}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="mx-6 pb-6">
          <h3 className="font-semibold lg:text-3xl text-2xl my-2">
            {getproductDetail.brand}
          </h3>
          <h1 className="font-bold lg:text-7xl text-5xl ">
            {getproductDetail.title}
          </h1>
          <h3 className="font-medium lg:text-5xl text-3xl my-2">
            {getproductDetail.category}
          </h3>
          <h3 className="font-medium lg:text-4xl text-2xl">
            {getproductDetail.price}
          </h3>
          <AddToCart currentProduct={getproductDetail} />
        </div>
    </div>
  );
}

export default ProductDetailsPage;
