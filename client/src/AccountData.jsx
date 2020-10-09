import * as React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin"
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks
const { AccountData, ContractData } = newContextComponents;

const Data = () => {
  const { drizzle } = useDrizzle()
  const state = useDrizzleState(state => state)
  console.log("Data -> state", state);

  return (
    <>
      <AccountData
        drizzle={drizzle}
        drizzleState={state}
        accounts={state.accounts}
        accountIndex={0}
        units="ether"
      />
      <ContractData
        drizzle={drizzle}
        drizzleState={state}
        contract="HelloWorld"
        method="sentence"
      />
    </>
  );
}

export default Data;