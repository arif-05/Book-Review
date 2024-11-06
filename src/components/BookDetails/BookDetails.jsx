import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

  const {
    
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className=" text-3xl font-bold">{bookName}</h2>
        <p>By : {author}</p>
        <hr />
        <p> {category} </p>
        <hr />

        <p>
          {" "}
          <span className="text-xl font-bold">Review : </span> {review}{" "}
        </p>

        <p>
          <span className="text-xl font-bold">Tag </span>
          {tags.map((element, index) => (
            <div
              className="inline mx-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-full p-2"
              key={index}
            >
              #{element}
            </div>
          ))}
        </p>

        <hr />

        <div className="space-y-2">
          <div className=" flex  justify-between">
            <p className="text-gray-600">Number of Pages:</p>
            <p className="font-bold w-1/2"> {totalPages} </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Publisher:</p>
            <p className="font-bold w-1/2"> {publisher}</p>
          </div>
          <div className=" flex  justify-between">
            <p className="text-gray-600">Year of Publishing:</p>
            <p className="font-bold w-1/2">{yearOfPublishing}</p>
          </div>
          <div className=" flex justify-between">
            <p className="text-gray-600">Rating:</p>
            <p className="font-bold w-1/2">{rating}</p>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn text-xl border">Read</button>
          <button className="btn bg-[#50B1C9] text-xl text-white ">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
