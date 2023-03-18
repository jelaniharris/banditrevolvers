import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Head from "next/head";

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
            <div className="markdown">
              <h2>Who are you?</h2>
              <p>
                The Bandit Revolvers is the story of a bunch of guys on a
                journey to create the most engaging, compelling, and fulfilling
                interactive experiences in the world. We want to create
                universes in which our fans can feel like they&apos;re apart of.
              </p>
              <h2>Where are you?</h2>
              <p>
                Currently the bandits are located in Madison, WI and when
                we&apos;re not shoveling show for sport, watching the Packers,
                or eating cheese with our beers we&apos;re hard at work trying
                to bring top quality products to you.
              </p>
              <h2>Why that name?</h2>
              <p>
                We are big fans of the fighting game series known as Guilty
                Gear. Although the game is made by Japanese developers, the
                series takes inspiration from American rock music, so it has a
                lot of English names in it. One of the characters in that game
                has a staple aerial-attack move called the{" "}
                <span className="text-red-800">&quot;Bandit Revolver&quot;</span>, which
                he says as he&apos;s performing the move. (Think of it like the
                Hadouken from Street Fighter.)
              </p>

              <p>
                We thought it was hilarious and kinda thematically odd because
                the character has other gun-related named moves (yet he wields a
                blade).
              </p>

              <p>
                It was hard enough to come up with an available name for our
                company, let alone an available domain name that is available.
                So we decided to call ourselves that.
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
