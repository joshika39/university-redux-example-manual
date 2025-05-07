import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {useAppDispatch, useAppSelector} from "@/store";
import {setFilter} from "@/slices/filterSlice.ts";
import type {FilterType} from "@/actions/types.ts";

function FilterSelect() {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleFilterChange = (value: string) => {
    dispatch(setFilter(value as FilterType));
  }

  return (
    <div className="mb-4">
      <Select
        value={filter}
        onValueChange={handleFilterChange}
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


export default FilterSelect;
