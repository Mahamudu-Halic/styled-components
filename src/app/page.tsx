"use client";
import { Button } from "@/components/buttons/button.styled.component";
import FormField from "@/components/form/form.component";

export default function Home() {
  return (
    <div>
      <FormField buttonLabel="login" title="login" />
      <FormField
        buttonLabel="register"
        title="create new account"
        createAccount
      />

      <div style={{ margin: "10px", display: "flex", gap: "10px" }}>
        <Button>default</Button>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="success">success</Button>
        <Button variant="premium">premium</Button>
        <Button variant="destructive">destructive</Button>
      </div>
    </div>
  );
}
