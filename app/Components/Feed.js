import Link from 'next/link';
import { FiMessageCircle, FiSend, FiThumbsUp, FiThumbsDown, FiBriefcase, FiHome } from 'react-icons/fi';
import { Homedata } from '../Data/Home';

export default function Feed() {
    return (
        <div className="flex flex-col p-4 max-w-6xl mx-auto h-[calc(100vh-40px)] overflow-y-auto scrollbar-hide">
    {/* Top Section: Trending Jobs & Shelter Cards */}
    <div className="flex gap-4 w-full mb-6 flex-nowrap justify-center">
        <Link href="/Job" className="w-1/2 bg-blue-100 p-4 rounded-lg shadow-md flex items-center space-x-4 hover:bg-blue-200 transition">
            <FiBriefcase className="text-3xl text-blue-600" />
            <span className="text-lg font-semibold">Trending Jobs</span>
        </Link>
        <Link href="/Shelter" className="w-1/2 bg-green-100 p-4 rounded-lg shadow-md flex items-center space-x-4 hover:bg-green-200 transition">
            <FiHome className="text-3xl text-green-600" />
            <span className="text-lg font-semibold">Shelter</span>
        </Link>
    </div>


            {/* Feed Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Homedata?.map((post, index) => (
                    <Link key={index} href={`/${post.source.id}`} className="bg-white border rounded-lg shadow-md p-4 flex flex-col h-[370px] hover:shadow-lg transition">
                        {/* User Info */}
                        <div className="flex items-center space-x-3 mb-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                            <div>
                                <h3 className="font-semibold">{post.source.name}</h3>
                                <p className="text-sm text-gray-500">{post.publishedAt}</p>
                            </div>
                        </div>

                        {/* Post Image */}
                        {post.urlToImage && (
                            <img src={post.urlToImage} alt="Post Image" className="w-full h-40 object-cover rounded-lg mb-3" />
                        )}

                        {/* Description (Clamped) */}
                        <p className="text-gray-700 mb-3 line-clamp-3 flex-1">{post.description}</p>

                        {/* Post Actions */}
                        <div className="flex justify-between items-center text-gray-600 py-2 border-t border-gray-200">
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 hover:text-red-500">
                                    <FiThumbsUp className="text-xl" />
                                    <span>20</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-gray-500">
                                    <FiThumbsDown className="text-xl" />
                                    <span>23</span>
                                </button>
                            </div>

                            <button className="flex items-center space-x-1 hover:text-blue-500">
                                <FiMessageCircle className="text-xl" />
                                <span>10</span>
                            </button>

                            <button className="flex items-center space-x-1 hover:text-green-500">
                                <FiSend className="text-xl" />
                                <span>5</span>
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
