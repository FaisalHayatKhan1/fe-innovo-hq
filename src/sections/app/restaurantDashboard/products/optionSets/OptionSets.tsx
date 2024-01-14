import { Button } from "@root/components/ui/button";
import React from "react";
import { FiPlus } from "react-icons/fi";
import AddOptionSet from "./addOptionSet/AddOptionSet";
const OptionSets = () => {
  const [addOptionSet, setAddOptionSet] = React.useState<Boolean>(false);

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        size="xs"
        className="border-0"
        onClick={() => setAddOptionSet(true)}
      >
        <span className="pr-1">
          <FiPlus className="w-4 h-4" />
        </span>
        Add New Option Set
      </Button>
      <AddOptionSet open={addOptionSet} setOpen={setAddOptionSet} />
    </div>
  );
};

export default OptionSets;
