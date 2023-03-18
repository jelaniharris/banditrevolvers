import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Head from "next/head";
import Image from "next/image";

import LinkButton from "@/components/link-button";
import PurgatoryImage from "../public/assets/games/PurgatoryLayoffs.gif"
import PurgatoryLogo from "../public/assets/games/purgatorylayoffslogo.png";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Games from the Bandit Revolvers`}</title>
        </Head>
        <Header />
        <Container>
          <PageHeader>Games</PageHeader>
          <div className="p-8 bg-neutral-600 rounded-xl">
            <div className="mx-auto">
              <div className={"markdown"}>
                <div className="flex md:flex-row flex-col items-center w-full">
                  <div className="md:w-1/2 w-full flex flex-row items-center justify-center">
                    <Image className="align-middle" src={PurgatoryImage} alt="Purgatory Layoffs Gif of Gameplay" />
                  </div>
                  <div className="md:w-1/2  ml-5">
                    <Image src={PurgatoryLogo} alt="Purgatory Layoffs Logo" />
                    <p>
                      It&apos;s the dreaded all-staff meeting and Purgatory Inc&apos;s CEO
                      Adam Synder announces that there must be layoffs even if
                      profits and revenue are sky-high.
                    </p>
                    <p>
                      Unfortunately for you, in purgatory layoffs mean death ...
                      again. Permanently.
                    </p>
                    <p>
                      Become the #1 ranked employee in your department by outworking,
                      outmaneuvering, and <span className="line-through">beating</span> engaging your coworkers into submission.*
                    </p>
                    <p>It&apos;s either them or you.</p>
                    <LinkButton href="https://banditrevolvers.itch.io/purgatory-layoffs">
                      Free Download from Itch.io
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 p-3 text-center bg-neutral-500 rounded-xl mb-10">
            <p>*This was made at a time when layoffs were not so prevalent. We the creators do not condone violence.</p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
