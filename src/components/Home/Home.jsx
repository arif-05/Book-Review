import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect( ()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])

    // console.log(books);





    return (
        <div className="">
            {/* banner section */}
            <div className="bg-[#1313130D]  my-6 min-h-[70vh] flex items-center justify-center p-20 gap-6 rounded-2xl">
            <div className="flex flex-col space-y-16">
            <h2 className="text-6xl font-bold">Books to freshen <br /> up your bookshelf</h2>
           <div>
           <a className="btn bg-[#23BE0A] text-white mr-4"> View The List</a>
           </div>
            </div>
            <div className="w-1/2">
                <img className=" w-50" src="https://i.ibb.co.com/kGQ5DZT/greg-rakozy-vw3-Ahg4x1t-Y-unsplash.jpg" alt="book img" />
            </div>
            </div>

            {/* books section */}
    
            <div className="grid grid-cols-3 gap-6">
                {
                books.map( book => <Book key={book.bookId} book = {book}></Book> )
                }
            </div>

           
        </div>
    );
};

export default Home;