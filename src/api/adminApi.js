import axiosConfig from "../config/axiosConfig";

export const getRevenues = async() => {
    const { data } = await axiosConfig.get("/admin/revenues");
    return data;
}
