import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminImagesTab } from "./AdminImagesTab";
import { AdminCopysTab } from "./AdminCopysTab";

const AdminDashboard = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <Tabs defaultValue="images" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-8">
          <TabsTrigger value="images">🖼️ Imagens</TabsTrigger>
          <TabsTrigger value="copys">✍️ Textos (Copys)</TabsTrigger>
        </TabsList>
        <TabsContent value="images">
          <AdminImagesTab />
        </TabsContent>
        <TabsContent value="copys">
          <AdminCopysTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
