import { auth } from "@/auth/auth";
import DashboardLoginForm from "@/components/DashboardLoginForm/DashboardLoginForm";


const DashboardLoginSection = async () => {
    const session = await auth();
    return (
        <DashboardLoginForm session={session} />
    )
}


export default DashboardLoginSection