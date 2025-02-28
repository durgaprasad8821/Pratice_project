"use client";
import { useSearchParams } from "next/navigation";
import NewsCard from "../NewPost";
import { useParams } from "next/navigation";
import newsData from '../../Data/News.js';


export default function NewsFeed() {
    const { type } = useParams();
  const searchParams = useSearchParams();
   

  const filteredNews =  newsData.filter((item) => item.category === type);

  return (
    <div className="flex flex-col items-center p-4">
      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredNews.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
