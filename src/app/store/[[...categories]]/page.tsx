interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

const Category = (props: CategoryProps) => {
  const { categories } = props.params;
  console.log(props);
  return (
    <>
      <h1>Categoría dinámica: {categories}</h1>
    </>
  );
};

export default Category;
