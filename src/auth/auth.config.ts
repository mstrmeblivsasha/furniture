type Props = {
    auth: any
    request: any
}

export const authConfig = {
    pages: {
        // когда результатом вызова authorized будет false - выполняется redirect на прописанный в signIn адрес
        signIn: "/dashboard",
    },
    providers: [],
    callbacks: {

        authorized({ auth, request }: Props) {

            const isAdmin = auth?.user.email === process.env.NEXT_PUBLIC_MASTER || auth?.user.email === process.env.NEXT_PUBLIC_DESIGNER || auth?.user.email === process.env.NEXT_PUBLIC_TESTER
            const isOnAdminPages = request.nextUrl?.pathname.startsWith('/dashboard/catalogue')

            // ONLY ADMIN CAN REACH ADMIN PAGE
            if (isOnAdminPages && !isAdmin) {
                return false;
            }

            return true;
        }
    }
}