"use server"
import bcrypt from "bcryptjs";
import { connectToDB } from "@/utils/connectToDB"
import { User } from "@/models/userSchema"
import { signIn, signOut } from "./auth";


// previousState - инф-ция об ошибках для useFormState
export const register = async (previousState: string | null, formData: Iterable<readonly [PropertyKey, string]>) => {
    const { email, password } = Object.fromEntries(formData);
    try {
        await connectToDB();

        const user = await User.findOne({ email });
        if (user) {
            return { error: "User already exists" }
        }

        if (password === "") {
            return { error: "Something went wrong" }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            email,
            password: hashedPassword,
        })

        await newUser.save();
        return { success: true };
    } catch (error) {
        console.log("error", error);
        return { error: "Something went wrong" }
    }
}


// используется в loginForm. вызывается signIn из auth.js (передавая credentials). там выполняется алгоритм в части CredentialsProvider
export const login = async (previousState: string | null, formData: Iterable<readonly [PropertyKey, string]>) => {
    const { email, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { email, password })

    } catch (error: any) {
        // проверка на ошибку, чтобы вывести спец сообщение "Invalid username or password" с помощью useFormState в поле ошибки в loginForm
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }

        // даже при правильно введённых логине и пароле возникает ошибк NEXT_REDIRECT. чтобы её исключить - return { error: "Something went wrong" } был заменён на написанное ниже
        throw error;
    }
}


export const handleLogout = async () => {
    "use server"
    await signOut();
}