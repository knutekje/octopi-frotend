import { authFetch} from "../utils/authFetch.tsx";

export const fetchUserProfile = async () => {
    return authFetch('/api/user/profile');
};
