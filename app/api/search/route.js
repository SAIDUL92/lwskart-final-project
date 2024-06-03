import { dbConnect } from "@/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';

    const db = await dbConnect();
    const products = await db
        .collection('products')
        .find({ name: { $regex: query, $options: 'i' } })  // Case-insensitive search
        .toArray();

    return NextResponse.json({ products });
}
