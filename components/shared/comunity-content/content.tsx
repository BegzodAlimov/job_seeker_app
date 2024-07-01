import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import likeIcon from "@/public/icons/like-comment.svg";
import { IComment } from "@/types/commets";

export const Content = ({ item }: { item: IComment }) => {
  const { username, date, job, content, likes, avatar } = item;

  let avatartName = username?.split(" ").map((item) => item.slice(0, 1));

  return (
    <div className="pb-6 mb-6 max-w-[791px]">
      <div className="flex gap-x-4 w-full">
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback className="bg-primary-10 text-white ">{avatartName}</AvatarFallback>
        </Avatar>

        <div className="font-font-family tracking-[0.01em] w-full">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-[16px] text-grayscale-100">
              {username}
            </h4>
            <p className="font-normal text-[14px] text-grayscale-60">{date}</p>
          </div>
          <p className="font-normal text-[14px] text-grayscale-50 mb-3">
            {job}
          </p>
          <p className="font-normal text-[14px] text-grayscale-100 mb-3">
            {content}
          </p>
          <div className="flex items-center gap-x-1">
            <Image src={likeIcon} alt="like" />{" "}
            <span className="font-normal text-[14px] text-grayscale-100">
              {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
