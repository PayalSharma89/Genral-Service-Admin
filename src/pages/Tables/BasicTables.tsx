import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function BasicTables() {
  return (
    <>
       <PageMeta
        title="Woqqy"
        description="Woqqy Admin Pannel"
      />
      <PageBreadcrumb pageTitle="User Management" />
      <div className="space-y-6">
        <ComponentCard title="User List">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
