import useBuyPlushyById from "../../hooks/useBuyPlushyById";
import { useDispatch } from "react-redux";
// slice
import { setEmpty } from "../../features/cart/cartSlice";

const useCartHolder = (createPlushiesToBuy, setCartItems) => {
    const mutation = useBuyPlushyById(createPlushiesToBuy());
    // dispatch for redux
    const dispatch = useDispatch();

    const buyPlushy = () => {
        mutation.mutate(createPlushiesToBuy());
        setCartItems([]);
        dispatch(setEmpty());
    };

    return {
        buyPlushy
    };
};

export default useCartHolder;