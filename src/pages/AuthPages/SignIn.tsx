import SignInForm from "../../components/auth/SignInForm";
import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Woqqy"
        description="Woqqy Admin Panel"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
