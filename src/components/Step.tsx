import React from 'react';
import { WizardContext, State } from './Wizard';

const Step: React.FC<{
  children: (ctx: State) => React.ReactNode;
}> = props => {
  return (
    <WizardContext.Consumer>
      {({ init, ...context }) => props.children(context)}
    </WizardContext.Consumer>
  );
};

export default Step;