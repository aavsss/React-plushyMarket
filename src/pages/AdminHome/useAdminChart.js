import { useQuery } from 'react-query';
// api
import { getRevenues } from '../../api/adminApi';


const useAdminChart = () => {
    const revenuesResponse = useQuery('revenues', () => getRevenues());
    return {
        revenuesResponse
    }
};

export default useAdminChart;