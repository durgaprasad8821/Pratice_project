"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp, FaShare } from "react-icons/fa";
import newsData from "@/app/Data/News";



export default function NewsDetail() {
  const router = useRouter();
  const { type, id } = useParams();
  
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return <p className="text-center text-red-500">News not found!</p>;
  }

  // Like State
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12); // Default likes

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  // Share Functionality
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard! 📋");
  };

  // Default comments
  const initialComments = [
    { user: "Rahul", text: "This match was insane! Loved the performance. 🔥" },
    { user: "Priya", text: "AI is evolving so fast, it's crazy! 🤯" },
    { user: "Vikram", text: "India’s batting lineup was on fire! Great win! 🏏" }
  ];

  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, { text: commentText, user: "User" }]);
      setCommentText("");
    }
  };

  return (
    <>
    <div className="max-w-3xl mx-auto pt-4 relative   md:left-[-40px]">
      {/* ✅ Back Button to return to Category Page */}
      <button
        onClick={() => router.push(`/News/${type}`)}
        className="bg-gray-300 px-4 py-2 rounded mb-4"
      >
        Back
      </button>
    </div>
    <div className="max-w-4xl mx-auto p-4">
      {/* Full-width Image */}
      <img src={newsItem.image} alt={newsItem.title} className="w-full h-72 object-cover rounded-lg mb-4" />

      {/* News Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">{newsItem.title}</h1>
          <p className="text-gray-500">{newsItem.author} • {newsItem.publishedAt}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Join</button>
      </div>

      {/* Like & Share Section */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Like Button */}
        <button onClick={handleLike} className="flex items-center space-x-2 text-gray-700">
          {liked ? <FaThumbsUp className="text-blue-500" /> : <FaRegThumbsUp />}  
          <span>{likeCount} Likes</span>
        </button>

        {/* Share Button */}
        <button onClick={handleShare} className="flex items-center space-x-2 text-gray-700">
          <FaShare />
          <span>Share</span>
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">{newsItem.description}</p>

      {/* Comment Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>

        {/* Comment Input */}
        <div className="flex items-center space-x-3 mb-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          <button onClick={handleCommentSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Comment
          </button>
        </div>

        {/* Display Comments */}
        {comments.length > 0 ? (
          <div className="space-y-3">
            {comments.map((comment, index) => (
              <div key={index} className="border p-3 rounded-lg">
                <p className="font-semibold">{comment.user}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
    </>
  );
}
