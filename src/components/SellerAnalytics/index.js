import { Wrapper, Content, Text } from "./SellerAnalytics.styles";
import Button from "../Button";

const SellerAnalytics = ({ uploadPlushyCallback }) => {
    return (
        <Wrapper>
            <Content>
                <Text>
                    <div className="status">
                        <div>
                            <div className="number">1</div>
                            <h3>Active</h3>
                        </div>
                        <div className="space">
                            <div className="number">0</div>
                            <h3>Sold</h3>
                        </div>
                        <div className="space">
                            <div className="number">0</div>
                            <h3>Unsold</h3>
                        </div>
                    </div>
                </Text>
                <div>
                    <h3>$0</h3>
                </div>
                <Button text="Upload Plushy" callback={uploadPlushyCallback} />
            </Content>
        </Wrapper>
    )
};

export default SellerAnalytics