import { useLoaderData } from "react-router-dom";

const Item: React.FC = () => {
  const loader = useLoaderData() as string;

  return (
    <div>
      <h1>{loader}</h1>
    </div>
  );
};

export default Item;
