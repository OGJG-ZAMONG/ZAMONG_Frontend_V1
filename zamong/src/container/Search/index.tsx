import { useLayoutEffect } from "react";
import { useHistory, useLocation } from "react-router";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/SearchPage";

const SearchContainter = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);
  const { push } = useHistory();
  const content = query.get("content");
  const types = query.get("types");

  useLayoutEffect(() => {
    if (!content) push("/");
  }, []);

  return (
    <>
      <Header />
      <Search content={content!} types={types!} />
    </>
  );
};

export default SearchContainter;
