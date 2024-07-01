"use client"
import ComunityBanner from "@/components/shared/comunity-banner/comunity-banner";
import { Content } from "@/components/shared/comunity-content/content";
import { IComment } from "@/types/commets";
import axios from "axios";
import { useEffect, useState } from "react";

const Comunity = () => {

  const [comment, setComment] = useState<IComment[] | null>(null);

  const getCommentData = () => {
    axios
      .get("https://d4cf4593d5120234.mokky.dev/comments")
      .then((res) => setComment(res.data));
  };

  useEffect(() => {
    getCommentData()
  }, [])

  return (
    <div>
      <h2 className="max-w-[600px] font-font-family font-medium text-5xl text-center tracking-[0.01em] text-black mx-auto py-12">
        For the Community, by the Community
      </h2>
      <ComunityBanner />
      <div>
        <h3 className="font-font-family font-medium text-2xl text-[#09080d] tracking-[0.01em] mb-8">
          Community Activity
        </h3>
        {comment?.map((item: IComment) => (
          <Content item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Comunity;
