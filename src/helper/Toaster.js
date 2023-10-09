import { toast } from "react-toastify";

const setting = { position: 'top-right', autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: false, draggable: true, progress: undefined, theme: 'colored' }

export default function Toaster(message = "Please provide message...", type) {
    switch (type) {
        case "info":
            return toast.info(message, setting)
        case "success":
            return toast.success(message, setting)
        case "error":
            return toast.error(message, setting)
        case "warning":
            return toast.warning(message, setting)
        default:
            return toast.error("Only info, success, error, warning this types are accepted", setting);
    }

}