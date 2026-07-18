import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";


export async function GET(){

  const result =
    await cloudinary.api.ping();


  return NextResponse.json(result);

}