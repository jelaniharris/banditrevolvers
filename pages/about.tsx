import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Head from "next/head";

import markdownStyles from "@/components/markdown-styles.module.css"


export default function About() {
  return (
  <>
  <Layout>
    <Head>
      <title>{`About the Bandit Revolvers`}</title>
    </Head>
    <Header />
    <Container>
      <PageHeader>About</PageHeader>
      <div className="mx-auto">
      <div
        className={markdownStyles['markdown']}
        >
<p>The Bandit Revolvers is the story of a bunch of guys on a journey to create the most engaging, compelling, and fulfilling interactive experiences in the world. We want to create universes in which our fans can feel like they&apos;re apart of.</p>
<p>Currently the bandits are located in Madison, WI and when we&apos;re not shoveling show for sport, watching the Packers, or eating cheese with our beers we&apos;re hard at work trying to bring top quality products to you.</p>
        </div>
        </div>
    </Container>
  </Layout>
</>
  )
}