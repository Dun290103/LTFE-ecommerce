import { Tabs, TabList, Tab, TabIndicator, Select, Box, Text, Icon } from "@chakra-ui/react";

import { GoTriangleDown } from "react-icons/go";

const ProductBanner = (props) => {
  const { currentSort, onSortChange, onPageSizeChange } = props;

  const handleSortChange = (index) => {
    const newSortValue = index === 0 ? "asc" : "desc";
    if (onSortChange) onSortChange(newSortValue);
  };

  const handlePageSizeChange = (newSize) => {
    if (onPageSizeChange) onPageSizeChange(newSize);
  };

  return (
    <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <Box>
        <Tabs
          index={currentSort === "asc" ? 0 : 1}
          onChange={(index) => handleSortChange(index)}
          position="relative"
          variant="unstyled"
        >
          <TabList>
            <Tab>Giá thấp tới cao</Tab>
            <Tab>Giá cao tới thấp</Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" bg="black" borderRadius="1px" />
        </Tabs>
      </Box>
      {/* =========================================================
                            Left Part End here
        ======================================================== */}
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}

      <Box display="flex" alignItems="center" gap={3}>
        <Text>Show:</Text>
        <Select
          onChange={(e) => handlePageSizeChange(+e.target.value)}
          variant="outline"
          width="auto"
          focusBorderColor="black"
          icon={<Icon as={GoTriangleDown} />}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </Select>
      </Box>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </Box>
  );
};

export default ProductBanner;
