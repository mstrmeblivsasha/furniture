"use client"
import { usePathname } from "next/navigation"
import useSWR from "swr"


// universal for data and dataId with usePathname
export const GetDataWithPathname = () => {
    const pathname = usePathname();
    let changedPathname = pathname;

    if (pathname.startsWith('/dashboard/')) {
        changedPathname = pathname.slice(11);
    }
    // console.log("pathname", pathname)
    // console.log("changedPathname", changedPathname)

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    // console.log("fetcher", fetcher)
    return useSWR(`/api/${changedPathname}`, fetcher);
};