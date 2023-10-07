import Link from 'next/link';
import SearchBar from './searchBar';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-semibold">
          Stack Overflow Clone
        </Link>
        <SearchBar/>
        <nav>
          {isLoggedIn ? (
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <p className="text-white mr-4">Login</p>
              </Link>
              <Link href="/signup">
                <p className="text-white">Signup</p>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
