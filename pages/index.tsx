import Head from "next/head";
import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPosts } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Post from "@/interfaces/post";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`Bandit Revolvers`}</title>
        </Head>
        <Header />
        <Intro />
        <div className="hidden">
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
