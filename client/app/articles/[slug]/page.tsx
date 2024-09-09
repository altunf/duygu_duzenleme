import { ArticleCard } from "@/components/article/article-card";

export default async function ReadArticle({ params }: any) {
  const articleId = params.slug;

  return (
    <main className="h-full w-full">
      <ArticleCard articleId={articleId} />
    </main>
  );
}
