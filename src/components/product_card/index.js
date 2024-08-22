"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import React from "react";

function ProductCards({ item }) {
  const router = useRouter();
  return (
    <Card className="float-left lg:mx-10 overflow-hidden my-5">
      <CardContent>
        <img src={item.thumbnail} />
        <CardTitle>{item.title}</CardTitle>
        <div className="flex justify-between items-center">
          <p className="font-medium text-2xl">$ {item.price}</p>
          <Button onClick={() => router.push(`/${item?.id}`)}>Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCards;
