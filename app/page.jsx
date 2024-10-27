import Feed from "@/components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col home_container">
    <h1 className="head_text">
      ENTER THE MATRIX OF
      <br className="max-md:hidden" />
      <span className="cyber_gradient"> AI-POWERED PROMPTS</span>
    </h1>
    <p className="desc text-center">
      Welcome to the digital frontier of creativity. Lumina is your gateway to
      the next-gen AI prompting ecosystem. Create, share, and explore prompts
      that push the boundaries of artificial intelligence.
    </p>
    <Feed />
  </section>
);

export default Home;
