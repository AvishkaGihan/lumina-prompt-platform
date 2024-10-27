"use client";

import Link from "next/link";
import { useState } from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [focused, setFocused] = useState({
    prompt: false,
    tag: false,
  });

  const [charCount, setCharCount] = useState(0);

  const handlePromptChange = (e) => {
    const text = e.target.value;
    setPost({ ...post, prompt: text });
    setCharCount(text.length);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="neon_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left! max-w-md">
        {type} to share your amazing prompts with the world and unleash your
        creativity on any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 cyber_glassmorphism"
      >
        <label>
          <span
            className={`form_label ${focused.prompt ? "text-neon-blue" : ""}`}
          >
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={handlePromptChange}
            onFocus={() => setFocused({ ...focused, prompt: true })}
            onBlur={() => setFocused({ ...focused, prompt: false })}
            placeholder="Write your post here"
            required
            className="cyber_textarea"
          />
          <div className="input_info">
            Characters: {charCount} | Click to start typing your creative prompt
          </div>
        </label>

        <label>
          <span className={`form_label ${focused.tag ? "text-neon-blue" : ""}`}>
            Field of Prompt{" "}
            <span className="font-normal text-neon-pink">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            onFocus={() => setFocused({ ...focused, tag: true })}
            onBlur={() => setFocused({ ...focused, tag: false })}
            type="text"
            placeholder="#Tag"
            required
            className="cyber_input"
          />
          <div className="input_info">Enter one or more tags</div>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link
            href="/"
            className="font-tech-mono text-neon-purple hover:text-neon-blue transition-colors duration-300"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="cyber_btn px-5 py-1.5 text-sm relative overflow-hidden"
          >
            <span className={submitting ? "loading_dots" : ""}>
              {submitting ? `${type}ing` : type}
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
