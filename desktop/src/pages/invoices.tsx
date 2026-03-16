
import { Navigate} from "react-router-dom";
import { useUser } from "../context/UserContext.tsx";
import styles from "../css/Invoice.module.css";
import BaseHeader from "@/components/baseHeader.tsx";

export default function Invoices(){
    const { user} = useUser();

    if (!user) {
        return <Navigate to="/" replace />;
    }
    
    return(
        <div>
            <BaseHeader
                title="Verkoopfacturen"
                buttonText="Nieuwe klant"
                searchPlaceholder="Zoek facturen..."
                subtitle="Beheer en maak nieuwe klanten"
                searchAriaLabel="Zoek facturen"
            ></BaseHeader>
            
        </div>
    )
}