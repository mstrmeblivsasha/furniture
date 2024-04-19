import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import { Catalogue } from "@/models/catalogueSchema";


export const GET = async (request, { params }) => {
    const { category } = params;

    try {
        await connectToDB();

        const data = await Catalogue.findOne({ category });
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    const { category } = params;

    try {
        await connectToDB();

        await Catalogue.deleteOne({ category });

        return new NextResponse("Catalogue has been deleted.", { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const PUT = async (request, { params }) => {
    const { category } = params;
    const incomingData = await request.json();

    try {
        await connectToDB();

        const updatedCatalogue = await Catalogue.findOneAndUpdate({ category }, incomingData);

        if (!updatedCatalogue) {
            return new NextResponse("Catalogue not found", { status: 404 });
        }

        return new NextResponse("Catalogue has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};


export const PATCH = async (request, { params }) => {
    const { category } = params;

    const incomingData = await request.json();
    try {
        await connectToDB();

        const updatedCatalogue = await Catalogue.findOneAndUpdate({ category }, incomingData);

        if (!updatedCatalogue) {
            return new NextResponse("Catalogue not found", { status: 404 });
        }

        return new NextResponse("Catalogue has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};