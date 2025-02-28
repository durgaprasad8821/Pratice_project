"use client";
import { useParams ,useRouter } from "next/navigation";
import { FiThumbsUp, FiMessageCircle, FiSend } from "react-icons/fi";

export default function NewsCard({ post }) {
  const router = useRouter();
    const {type} = useParams();
  return (
    <div
      className="bg-white border rounded-lg shadow-md p-4 cursor-pointer"
      onClick={() => router.push(`/News/${type}/${post.id}`)}
    >
      {/* News Image */}
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-3" />

      {/* News Details */}
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>

      {/* Interaction Buttons */}
      <div className="flex justify-between items-center mt-3 text-gray-600">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <FiThumbsUp className="text-xl" />
          <span>20</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-500">
          <FiMessageCircle className="text-xl" />
          <span>10</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-red-500">
          <FiSend className="text-xl" />
          <span>5</span>
        </button>
      </div>
    </div>
  );
}
