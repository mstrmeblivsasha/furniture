export const authConfig = {
    pages: {
        // когда результатом вызова authorized будет false - выполняется redirect на прописанный в signIn адрес
        signIn: "/dashboard",
    },
    providers: [],
    callbacks: {

        authorized({ auth, request }) {
            const isAdmin = auth?.user.email === process.env.NEXT_PUBLIC_MASTER || auth?.user.email === process.env.NEXT_PUBLIC_DESIGNER || auth?.user.email === process.env.NEXT_PUBLIC_TESTER
            const isOnAdminPages = request.nextUrl?.pathname.startsWith('/dashboard/catalogue')

            // const isAuthorised = auth?.user;
            // const isOnLoginPage = request.nextUrl?.pathname.endsWith('dashboard');

            // ONLY ADMIN CAN REACH ADMIN PAGE
            if (isOnAdminPages && !isAdmin) {
                return false;
            }
            //  REDIRECT ADMIN TO ADMIN PAGE
            // if (isOnLoginPage && isAdmin) {
            //     return Response.redirect(new URL('/dashboard/catalogue', request.nextUrl))
            // }
            // ONLY UNAUTHENTICATED CAN REACH LOGIN PAGE
            // if (isOnLoginPage && isAuthorised) {
            //     return Response.redirect(new URL('/', request.nextUrl))
            // }

            return true;
        }
    }
}