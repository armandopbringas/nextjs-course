interface CategoryProps {
  params: { category: string };
}

const Category = (props: CategoryProps) => {
  const { category } = props.params;
  return (
    <>
      <h1>Categoría dinámica: {category}</h1>
    </>
  );
};

export default Category;
