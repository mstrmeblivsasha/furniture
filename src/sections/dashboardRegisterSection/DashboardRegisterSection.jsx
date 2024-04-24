import { auth } from "@/auth/auth";
import DashboardRegisterForm from "@/components/DashboardRegisterForm/DashboardRegisterForm"


const DashboardRegisterSection = async () => {
    const session = await auth();

    return (
        <DashboardRegisterForm session={session} />
    )
}


export default DashboardRegisterSection