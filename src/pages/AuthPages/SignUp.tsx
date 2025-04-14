import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Woqqy"
        description="Woqqy Admin Pannel"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
