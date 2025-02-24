import ManagerPillTable from '@renderer/components/manager/pill-inventory/ManagerPillTable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@renderer/components/ui/tabs'
import SecondManagerOrders from '@renderer/components/manager/customer-orders/SecondManagerOrders'
import ThirdRequestCompany from '@renderer/components/manager/requests-company/ThirdRequestCompany'
import Navbar from '@renderer/components/shared/Navbar'

export default function StoreManagerPage() {
  return (
    <div className="max-w-[1920px] px-3 mx-auto py-5">
      <Navbar />

      <Tabs defaultValue="pill" className="px-5">
        <TabsList>
          <TabsTrigger value="pill">Pill Inventory</TabsTrigger>
          <TabsTrigger value="order">Customer Orders</TabsTrigger>
          <TabsTrigger value="customer">Requests to Company</TabsTrigger>
        </TabsList>
        <TabsContent value="pill">
          <ManagerPillTable />
        </TabsContent>
        <TabsContent value="order">
          <SecondManagerOrders/>
        </TabsContent>
        <TabsContent value="customer">
          <ThirdRequestCompany/>
        </TabsContent>
      </Tabs>
    </div>
  )
}
