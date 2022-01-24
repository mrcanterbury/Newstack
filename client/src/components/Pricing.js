
function Pricing() {
    return (
        <div>
            <div className="pricing-container">
                <div className="pricing-header">
                    <div>
                        <h1 className="pricing">Choose Your Plan</h1>
                    </div>
                    <div>
                        <h3>Find the perfect option for your team's budget.</h3>
                    </div>
                </div>
                <div className="pricing-card-container">
                    <div className="card-basic">
                        <h1 className="basic-header">Basic</h1>
                        <div className="price-display">
                            <div><h5 className="price-tag-sm">$</h5></div>
                            <div><h1 className="price-tag-lg">20</h1></div>
                            <div><h5 className="price-tag-sm">/mo</h5></div>
                        </div>
                        <div className="feature-list">
                            <ul>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="excluded">Lorem ipsum dolor sit ame</li>
                                <li className="excluded">Lorem ipsum dolor sit ame</li>
                            </ul>
                        </div>
                        <div>
                            <button className="basic-buy-now">Buy Now</button>
                        </div>
                        <div className="fineprint">
                            <span>* Annual renewal</span>
                        </div>
                    </div>
                    <div className="card-standard">
                        <h1 className="standard-header">Standard</h1>
                        <div className='price-display'>
                            <div><h5 className='price-tag-sm'>$</h5></div>
                            <div><h1 className='price-tag-lg'>49</h1></div>
                            <div><h5 className='price-tag-sm'>/mo</h5></div>
                        </div>
                        <div className="feature-list">
                            <ul>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                            </ul>
                        </div>
                        <div>
                            <button className="standard-buy-now">Buy Now</button>
                        </div>
                        <div className="fineprint">
                            <span>* Annual renewal</span>
                        </div>
                    </div>
                    <div className="card-pro">
                        <h1 className="pro-header">Pro</h1>
                        <div className="price-display">
                            <div><h5 className="price-tag-sm">$</h5></div>
                            <div><h1 className="price-tag-lg">99</h1></div>
                            <div><h5 className="price-tag-sm">/mo</h5></div>
                        </div>
                        <div className="feature-list">
                            <ul>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                                <li className="included">Lorem ipsum dolor sit ame</li>
                            </ul>
                        </div>
                        <div>
                            <button className="pro-buy-now">Buy Now</button>
                        </div>
                        <div className="fineprint">
                            <span>* Annual renewal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
