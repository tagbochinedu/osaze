import { useParams } from "react-router-dom";

const MaleProductItems = () => {
  const params = useParams();
  return <p>{params.id}</p>;
};
export default MaleProductItems;
