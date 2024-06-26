import "./../../globals.css";
import { Mulish } from "next/font/google";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SieMaticAtomicCards from "./_components/atoms";
import SieMaticMoleculeCards from "./_components/molecules";
import SieMaticOrganismCards from "./_components/organisms";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

const SieMaticPage = () => {
  return (
    <Tabs defaultValue="atoms" className="max-w-full m-4">
      <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
        <TabsTrigger value="atoms">Atoms</TabsTrigger>
        <TabsTrigger value="molecules">Molecules</TabsTrigger>
        <TabsTrigger value="organisms">Organisms</TabsTrigger>
      </TabsList>
      <TabsContent className="h-full max-w-full" value="atoms">
        <SieMaticAtomicCards />
      </TabsContent>
      <TabsContent className="h-full max-w-full" value="molecules">
        <SieMaticMoleculeCards />
      </TabsContent>
      <TabsContent className="h-full max-w-full" value="organisms">
        <SieMaticOrganismCards />
      </TabsContent>
    </Tabs>
  );
};

export default SieMaticPage;
