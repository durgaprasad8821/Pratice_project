'use client';

import { useEffect, useState } from 'react';
import { FiMessageCircle, FiSend, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

export default function Feed() {
    const [apiData, setData] = useState([]);

    useEffect(() => {
        const dataFetchHandle = async () => {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8b67756eb709463db75c6339f2d292c8");
            const data = await response.json();
            setData(data.articles);
        }
        dataFetchHandle();
    }, []);

    return (
        <div className="flex">
            {/* Main Content (Scrollable Feed) */}
            <main className="flex-1 p-4 max-w-6xl mx-auto h-[calc(100vh-40px)] overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {apiData?.map((post, index) => (
                        <div key={index} className="bg-white border rounded-lg shadow-md p-4 flex flex-col h-[450px]">
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
                                <img
                                    src={post.urlToImage}
                                    alt="Post Image"
                                    className="w-full h-40 object-cover rounded-lg mb-3"
                                />
                            )}

                            {/* Description (Clamped to fit) */}
                            <p className="text-gray-700 mb-3 line-clamp-3 flex-1">{post.description}</p>

                            {/* Post Actions: Like, Dislike, Comment, Share */}
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
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
