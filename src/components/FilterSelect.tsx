import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

function FilterSelect() {
  return (
    <div className="mb-4">
      <Select value={"all"}>
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
