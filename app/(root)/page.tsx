
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `${APP_NAME}`
};
const delay = (ms:number) => new Promise((resolve) =>setTimeout(resolve,ms))
const HomePage = async () => {
    delay(2000)
    return (
        <>
        Home Page 
        </>
    );
}

export default HomePage;