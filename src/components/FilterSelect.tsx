import { connect } from "react-redux";
import { setFilter } from "@/actions";
import { type FilterType } from "@/actions/types";
import type { RootState } from "@/store";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

interface Props {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

function FilterSelect({ filter, setFilter }: Props) {
  return (
    <div className="mb-4">
      <Select
        value={filter}
        onValueChange={setFilter}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="general">General</SelectItem>
          <SelectItem value="programming">Programming</SelectItem>
          <SelectItem value="knock-knock">Knock-knock</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(FilterSelect);
