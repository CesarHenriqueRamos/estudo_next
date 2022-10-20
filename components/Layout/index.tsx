import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <header>
        <title>{t("title")}</title>
        {router.locales?.map((item, index) => {
          return (
            <Link key={index} href={"/"} locale={item}>
              <p>{item}</p>
            </Link>
          );
        })}
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
