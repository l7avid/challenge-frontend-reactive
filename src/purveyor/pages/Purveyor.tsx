import * as React from "react";

interface IPurveyorProps {}

const Purveyor: React.FunctionComponent<IPurveyorProps> = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Identification" />
        <input type="text" placeholder="Email" />
      </form>
      <button>Save</button>
    </div>
  );
};

export default Purveyor;
