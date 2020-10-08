import * as React from 'react';
import LoadingContainer from "./LoadingContainer"
import AccountData from "./AccountData";


const App = () => {
    return (
      <>
          <LoadingContainer>
            <AccountData/>
          </LoadingContainer>
      </>
    );
}

export default App;