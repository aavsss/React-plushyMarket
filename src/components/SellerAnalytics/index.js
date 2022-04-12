import { Wrapper, Content, Text, Item } from "./SellerAnalytics.styles";
import Button from "../Button";
import useSellerAnalytics from "./useSellerAnalytics";

const SellerAnalytics = ({ uploadPlushyCallback }) => {
    const {
        data: analytics
    } = useSellerAnalytics();

    return (
        <Wrapper>
            <Content>
                <Item>
                    <Text>
                        <div className="status">
                            <div>
                                <div className="number">{analytics.activeProduct}</div>
                                <h3>Active</h3>
                            </div>
                            <div className="space">
                                <div className="number">{analytics.soldProduct}</div>
                                <h3>Sold</h3>
                            </div>
                            <div className="space">
                                <div className="number">{analytics.unsoldProduct}</div>
                                <h3>Unsold</h3>
                            </div>
                        </div>
                    </Text>
                </Item>
                <Item>
                    <Text>
                        <div className="status">
                            <div>
                                <div className="number">${analytics.totalMoneyEarned}</div>
                                <h3>Total</h3>
                            </div>
                        </div>
                    </Text>
                </Item>
                <Item>
                    <div className="centerButton">
                        <Button text="Upload Plushy" callback={uploadPlushyCallback} />
                    </div>
                </Item>
            </Content>
        </Wrapper>
    )
};

export default SellerAnalytics