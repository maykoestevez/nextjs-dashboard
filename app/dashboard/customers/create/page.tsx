import { CreateCustomerForm } from "@/app/ui/customers/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Create Customer",
            href: "/dashboard/customers/create",
            active: true,
          },
        ]}
      ></Breadcrumbs>
      <CreateCustomerForm></CreateCustomerForm>
    </div>
  );
}
