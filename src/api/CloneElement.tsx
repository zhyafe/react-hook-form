import React, { ReactChild, ReactElement } from "react";

interface Props {
  children?: ReactChild;
}

function CloneElement({ children }: Props): ReactElement {
  console.log(children);
  let newChildren =
    Array.isArray(children) &&
    children.map((item, index) => {
      if (item.props.data) {
        return React.cloneElement(item, { data: 55, key: index }, [
          <p>child</p>,
        ]);
      }
      return item;
    });
  return (
    <div>
      <p>element</p>
      {newChildren}
    </div>
  );
}

export default CloneElement;
