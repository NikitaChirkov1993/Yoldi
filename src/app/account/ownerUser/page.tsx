import HeaderAccountOwner from "@/components/header/HeaderAccountOwner";
import Link from "next/link";

const AccountOwnerUser = () => {
    return (
        <div className="wrapper__yoldi">
            <HeaderAccountOwner />
            <Link href="/account/guest">
                <button>Выйти</button>
            </Link>
        </div>
    );
};

export default AccountOwnerUser;
