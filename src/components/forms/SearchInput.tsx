import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useSearchStore } from "../../store/searchStore";
import { ImageSearchClient } from "../../utils/ImageSearch";

const GOOGLE_API_KEY = "AIzaSyCjkJN0NKj66ONuK2BBvs6PnAXjC0ZjpKI";
const SEARCH_ENGINE_ID = "f555f168acc9d40d8";
interface imagePorp {
  link: string;
}
const SearchInput = () => {
  const { search, setSearch, setResults } = useSearchStore((state) => state);
  const handleSearch = async () => {
    const searchClient = new ImageSearchClient(
      SEARCH_ENGINE_ID,
      GOOGLE_API_KEY
    );
    const results = await searchClient.search(search);
    const links = results.map(({ link }: imagePorp) => link);
    console.log(links);
    setResults(links);
  };
  return (
    <InputGroup size="md" marginBottom={"8px"}>
      <Input
        pr="4.5rem"
        type="text"
        placeholder="search an image"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleSearch}>
          search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
