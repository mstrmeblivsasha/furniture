import { NextResponse } from "next/server"
import { connectToDB } from "@/utils/connectToDB";
import { Catalogue } from '../../../models/catalogueSchema';


export const GET = async (request: Request) => {
    try {
        await connectToDB();

        const data = await Catalogue.find();

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.log('error', error)
        return new NextResponse('Database error', { status: 500 })
    }
}


export const POST = async (request: Request) => {
    const body = await request.json();

    const newCatalogue = new Catalogue(body);

    try {
        await connectToDB();
        await newCatalogue.save();

        return new NextResponse('Catalogue has been created.', { status: 201 });
    } catch (error: any) {
        return new NextResponse(error, { status: 500 });
    }
};