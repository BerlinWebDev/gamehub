import { MenuButton, MenuItem, MenuList, Menu, Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = ({ onSelectSortOrder, sortOrder }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sorting) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sorting.value)}
            key={sorting.value}
            value={sorting.value}
          >
            {sorting.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
