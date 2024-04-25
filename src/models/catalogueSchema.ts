import mongoose from "mongoose";


const catalogueSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        subTitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        sliderTitle: {
            type: String,
            required: true,
        },
        sliderImages: {
            type: Array,
            required: true,
        },

    },
    { timestamps: true }
);


//If the collection does not exist - create a new one.
export const Catalogue = mongoose.models?.Catalogue || mongoose.model('Catalogue', catalogueSchema);