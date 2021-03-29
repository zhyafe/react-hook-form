import React, { ReactElement } from "react";

interface Props {
  data: number;
}

let Memo = React.memo(
  ({ data, children }: Props): ReactElement => {
    console.log("---");
    return (
      <div>
        memo{data}
        {children}
      </div>
    );
  }
);

export default Memo;
