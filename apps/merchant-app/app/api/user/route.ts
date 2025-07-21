import { NextResponse } from "next/server"
import client from "@repo/db/client";

export const GET = async () => {
    await client.user.create({
        data: {
            email: "asd",
            name: "adsads",
            number: "1234567890",
            password: "password123"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}