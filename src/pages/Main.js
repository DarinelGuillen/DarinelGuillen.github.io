import logo from '../assets/img/logo.svg';

function Main() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
            <header className="text-center">
                <img src={logo} className="w-24 h-24 mb-8" alt="logo" />
                <p className="mb-4 text-lg">
                    Edit
                </p>
                <a href="#" className="px-4 py-2 bg-white text-red-900 rounded hover:bg-red-200">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Main;
