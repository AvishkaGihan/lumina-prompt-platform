"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card group">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="profile_image"
          />

          <div className="flex flex-col">
            <h3 className="font-tech-mono font-semibold text-neon-blue">
              {post.creator.username}
            </h3>
            <p className="font-tech-mono text-sm text-neon-purple opacity-80">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn group" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
            className="transition-transform group-hover:scale-110"
          />
        </div>
      </div>

      <p className="my-4 font-tech-mono text-sm text-white/90">{post.prompt}</p>
      <p
        className="font-tech-mono text-sm cyber_blue_gradient cursor-pointer hover:scale-105 transition-transform inline-block"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-neon-purple/20 pt-3">
          <p
            className="font-tech-mono text-sm cyber_green_gradient cursor-pointer hover:scale-105 transition-transform"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-tech-mono text-sm cyber_red_gradient cursor-pointer hover:scale-105 transition-transform"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
