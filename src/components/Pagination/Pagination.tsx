import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

type PaginationType = {
  offset: number;
  perPage: string;
  count?: number;
  handlePrevBtn: any;
  handleNextBtn: any;
};

const Pagination: React.FC<PaginationType> = ({
  offset,
  perPage,
  count,
  handlePrevBtn,
  handleNextBtn,
}) => {
  return (
    <section className="flex items-center justify-center gap-5 my-5">
      <button
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        disabled={offset < parseInt(perPage)}
        onClick={handlePrevBtn}
      >
        <IoArrowBackCircleOutline size={24} />
        <p>Previous</p>
      </button>

      <button
        onClick={handleNextBtn}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={offset >= (count as number)}
      >
        <p>Next</p>
        <IoArrowForwardCircleOutline size={24} />
      </button>
    </section>
  );
};

export default Pagination;
