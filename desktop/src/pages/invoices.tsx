
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.tsx";

export default function Invoices(){
    const navigate = useNavigate();
    const { user, logout } = useUser();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return(
        <div>
            <p>Ingelogde userID: {user?.userID ?? "geen"}</p>
            <button type="button" onClick={handleLogout}>Uitloggen</button>
        </div>
    )
}