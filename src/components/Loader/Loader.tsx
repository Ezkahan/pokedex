import { Watch } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Watch
        height="280"
        width="280"
        radius="248"
        color="#e15554"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        visible={true}
      />
      <h1 className="font-montserrat-bold text-2xl animate-pulse text-pokedex">
        Loading...
      </h1>
    </div>
  );
};

export default Loader;
