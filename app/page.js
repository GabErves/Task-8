import TopContent from "../components/TopContent";
import SocialLinks from "../components/SocialLinks";
import NonSocialLinks from "../components/NonSocialLinks";

export default async function Home() {
  console.log("!!!!");

  console.log(process.env.NEXT_PUBLIC_SUPABASE_PUBLIC);
  return (
    <main>
      <TopContent />
      <SocialLinks />
      <NonSocialLinks />
    </main>
  );
}
  