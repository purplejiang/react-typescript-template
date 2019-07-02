import React from 'react';

interface IProps {
  color: string;
  size?: string;
}

interface IState {
  count: number;
}

class Test extends React.Component<IProps, IState> {
  public state = {
    count: 1
  };

  public render() {
    return (
      <div>
        {this.state.count}
        <br />
        {this.props.color}
      </div>
    );
  }
}

export default Test;
