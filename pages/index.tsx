import type { GetStaticProps } from "next";
import Layout from "../components/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation("common");
  const { t: tHome } = useTranslation("home");
  return (
    <Layout>
      <h1>{tHome("welcome")}</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home"])),
    },
  };
};

export default Home;
