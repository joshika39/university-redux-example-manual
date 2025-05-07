import { connect } from "react-redux";
import { setFilter } from "../actions";
import { type FilterType } from "../actions/types";
import type { RootState } from "../store";

interface Props {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

function FilterSelect({ filter, setFilter }: Props) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value as FilterType)}
    >
      <option value="all">All</option>
      <option value="general">General</option>
      <option value="programming">Programming</option>
      <option value="knock-knock">Knock-knock</option>
    </select>
  );
}

const mapStateToProps = (state: RootState) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(FilterSelect);
