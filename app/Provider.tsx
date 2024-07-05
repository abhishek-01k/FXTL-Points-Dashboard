import React, { Children } from 'react';
import { createThirdwebClient } from 'thirdweb';
import { ThirdwebProvider } from "thirdweb/react";

const Provider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ThirdwebProvider>
            {children}
        </ThirdwebProvider>
    );
};

export default Provider;