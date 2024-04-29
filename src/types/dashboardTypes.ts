type TypeCatalogueFromDB = {
    category: string
    title: string
    subTitle: string
    description: string
    image: string
    sliderTitle: string
    sliderImages: string[]
    createdAt: string
    updatedAt: string
};

type TypeImagesForDeleting = {
    image: string
    sliderImages: string[]
};

type TypeUser = {
    email: string
    password: string
}

interface SignOutParams<R extends boolean = true> {
    /** @docs https://next-auth.js.org/getting-started/client#specifying-a-callbackurl-1 */
    callbackUrl?: string;
    /** @docs https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1 */
    redirect?: R;
}