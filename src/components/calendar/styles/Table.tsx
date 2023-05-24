import { Flex } from "@chakra-ui/react";
interface TableProps {
  resource_count: number;
  children?: React.ReactNode;
}

const Table = ({ resource_count, children }: TableProps) => {
  return (
    <Flex
      position={"relative"}
      flexDirection={resource_count > 1 ? "row" : "column"}
      boxSizing="content-box"
      flexShrink={0}
      flexGrow={1}
    >
      {children}
    </Flex>
  );
};

export default Table;
