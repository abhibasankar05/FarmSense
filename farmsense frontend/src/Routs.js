import Dashboard from "./components/Dashboard/Dashboard";
import Farmers from "./components/farmers/farmer";
import Addfarmer from "./components/farmers/addfarmer";
import Farmerdetails  from "./components/farmers/farmerdetails";
import Addorder  from "../src/components/Order/addorder"
import PendingOrders from "../src/components/Order/pendingorders"
import Completedorders from "../src/components/Order/completedordes"
import Billing from "./components/Billing/AddBills";
import GetAllBills from ".././src/components/Billing/AllBills";
import PendingPayments from "./components/Payments/PendingPayments";
import CompletedPayments from "./components/Payments/CompletedPayments";
import OrderPdf from "./components/Order/OrderPdf";






var routes12 = [
    {
      path: "/",
      name: "Dashboard",
      icon: "ni ni-tv-2 text-primary",
      component: <Dashboard />,
      
      
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: <Dashboard />,
        
      },
      {
        path: "/farmer",
        name: "Farmer",
        icon: "ni ni-tv-2 text-primary",
        component: <Farmers/>,
        
      },
      {
        path: "/addfarmer",
        name: "AddFarmer",
        icon: "ni ni-tv-2 text-primary",
        component: <Addfarmer/>,
        
      },
      {
        path: "/farmerdetails",
        name: "FarmerDetails",
        icon: "ni ni-tv-2 text-primary",
        component: <Farmerdetails></Farmerdetails>,
        
      },
      {
        path: "/addorders",
        name: "Orders",
        icon: "ni ni-tv-2 text-primary",
        component: <Addorder/>
        
      },
      {
        path: "/porders",
        name: "Orders",
        icon: "ni ni-tv-2 text-primary",
        component: <PendingOrders></PendingOrders>
        
      },
      {
        path: "/corders",
        name: "Orders",
        icon: "ni ni-tv-2 text-primary",
        component: <Completedorders/>
        
      },
      {
        path: "/addbills",
        name: "Bills",
        icon: "ni ni-tv-2 text-primary",
        component: <Billing></Billing>
        
      },
      {
        path: "/allbills",
        name: "AllBills",
        icon: "ni ni-tv-2 text-primary",
        component: <GetAllBills></GetAllBills>
        
      },
      {
        path: "/ppayments",
        name: "Payments",
        icon: "ni ni-tv-2 text-primary",
        component: <PendingPayments></PendingPayments>
        
      },
      {
        path: "/cpayments",
        name: "Payments",
        icon: "ni ni-tv-2 text-primary",
        component: <CompletedPayments></CompletedPayments>
        
      },
      {
        path: "/orderpdf",
        name: "OrderPdf",
        icon: "ni ni-tv-2 text-primary",
        component: <OrderPdf></OrderPdf>
        
      }
     
   
  ];
 



  export default routes12 ;