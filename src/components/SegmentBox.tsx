import React, { useState } from 'react';

type ChildrenFn = (disabled: boolean) => JSX.Element;
type Children = ChildrenFn | JSX.Element;

interface CommonProps {
  title: string;
  children: Children;
}
interface NormalProps extends CommonProps {
  disabled?: undefined;
  onChangeControl?: undefined;
}
interface ControlledProps extends CommonProps {
  disabled: boolean;
  onChangeControl: () => void;
}

type Props = NormalProps | ControlledProps;

function isChildrenFn(children: Children): children is ChildrenFn {
  return typeof children === 'function';
}

const SegmentBox: React.FC<Props> = (props) => {
  const [disabled, setDisabled] = useState(false);

  function getDisabled(): boolean {
    return props.disabled !== undefined ? props.disabled : disabled;
  }

  function getOnChangeDisabled(): () => void {
    const defaultOnChangeControl = (): void => setDisabled(state => !state);

    if(props.disabled !== undefined){
      if(props.onChangeControl === undefined){
        throw new Error('You should define "onChangeControl" prop when you define "disabled" prop');
      }
      else {
        return props.onChangeControl;
      }
    }
    else {
      return defaultOnChangeControl;
    }
  }

  function renderControl(): JSX.Element {
    const disabled = getDisabled();
    const onChange = getOnChangeDisabled();

    return (
      <div className="control">
        <span>{ disabled ? 'Disabled' : 'Enabled' }</span>
        <button onClick={onChange}>Toggle</button>
      </div>
    );
  }

  function renderContent(): JSX.Element {
    return isChildrenFn(props.children) ? props.children(getDisabled()) : props.children;
  }

  return (
    <div className="segment-box">
      <div className="top">
        <h5 className="title">{props.title}</h5>
        {renderControl()}
      </div>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SegmentBox;
