import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, review, rating, category, tags, publisher, bookId  } = book;

  // console.log(book);
  return (
    <Link 
    to={`/${bookId}`}

    className=" border rounded-2xl p-4">
        <div className="card bg-base-100  shadow-xl ">
      <figure>
        <img
          src={image}
          alt="books"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="text-xl font-bold">{bookName}</h2>
        <div>
            <p>By : {author}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
            <p>{category}</p>
            <div className="flex items-center ">
                <p className="mr-2">{rating}</p>
                <CiStar className="size-5"></CiStar>
            </div>
        </div>
      </div>
    </div>

    </Link>
  );
};

export default Book;
