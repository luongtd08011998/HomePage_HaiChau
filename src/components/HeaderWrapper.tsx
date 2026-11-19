import Header from "./Header";
import { getEnhancedCategoryTree } from "@/lib/categoryTree";

export default async function HeaderWrapper() {
  const finalTree = await getEnhancedCategoryTree();
  return <Header categoryTree={finalTree} />;
}
