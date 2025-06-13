import { useQuery } from '@tanstack/react-query';

const useUserProfile = (email) => {
    return useQuery({
        queryKey: ['userProfile', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?email=${email}`);
            if (!res.ok) throw new Error('Failed to fetch user profile');
            return res.json();
        },
    });
};

export default useUserProfile;