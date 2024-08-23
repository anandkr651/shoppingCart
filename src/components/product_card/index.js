"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

function ProductCards({ item }) {
  const router = useRouter();
  return (
    <Card className="my-2">
      <CardContent>
        {/* <img src={item.thumbnail} /> */}
        <Image
          src={item.thumbnail}
          width={300}
          height={100}
          alt="thumbnail-image"
        />

        <CardTitle className="my-2">{item.title}</CardTitle>
        <div className="flex justify-between items-center">
          <p className="font-medium text-2xl">{item.price}</p>
          <Button onClick={() => router.push(`/${item?.id}`)}>Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCards;
