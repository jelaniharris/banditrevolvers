import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <Header />
      <Container>
        <div className=" my-8 text-center">
          <h1 className="text-6xl my-12">404 - Page Not Found</h1>
          <p className="text-xl">
            Somehow you've done it. You've found a page that doesn't exist
            anymore.
          </p>
					<p>Check that you've typed the address correctly, or go back to your previous page.</p>
					<br />
          <Link className="font-lg font-bold p-4 bg-black hover:bg-red-500 text-white" href="/">Visit Homepage</Link>
        </div>
      </Container>
    </Layout>
  );
}
