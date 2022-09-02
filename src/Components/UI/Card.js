const Card = (props) => {
  return (
    <div className={`${"w-full hidden md:block md:w-9/12 lg:w-10/12 md:ml-4 lg:ml-12 lg:rounded-lg shadow-md shadow-gray-200 border border-gray-400"} ${props.className}`}>
      <h1 className='border-b border-gray-400 font-bold py-4 px-6 text-xl uppercase text-black'>{props.pageTitle}</h1>
      {props.children}
    </div>
  );
};
export default Card;
