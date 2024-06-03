import { userModel } from "@/models/userModel";
import { dbConnect } from "@/service";

import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await dbConnect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
        name,
        email,
        password: hashedPassword,
        wishlist: [],
        cart: [],
    };

    try {
        await userModel.create(newUser);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};