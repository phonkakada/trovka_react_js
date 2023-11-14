import React from 'react';
import ProductsByMake from '../components/productsBymake';

const RelativeProducts = ({make , id}) => {
    return(
        <>
        <div>

            <div>
                <ProductsByMake make={make} id={id}  />
            </div>
        </div>
        </>
    )

}

export default RelativeProducts