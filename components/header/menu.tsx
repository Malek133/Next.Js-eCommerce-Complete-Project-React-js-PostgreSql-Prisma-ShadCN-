import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription,
     SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../component/ModeToggle";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3 mx-3 my-5">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href='/cart' >
                        <ShoppingCart /> Cart
                    </Link>
                </Button>

                <Button asChild>
                     <Link href='/sign-in' >
                         <UserIcon /> Sign In
                     </Link>
                 </Button>
                
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col item-start">
                        <SheetHeader className="flex flex-col item-start">
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription></SheetDescription>
                        </SheetHeader>
                        <ModeToggle />
                        <div className="flex flex-col items-start space-y-2">
                            <Button asChild variant='ghost' className="justify-start">
                                <Link href='/cart' >
                                    <ShoppingCart /> Cart
                                </Link>
                            </Button>

                            <Button asChild  className="justify-start">
                     <Link href='/sign-in' >
                         <UserIcon /> Sign In
                     </Link>
                 </Button>
                           
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}

export default Menu;